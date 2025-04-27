import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '../types';
import { supabase } from '../lib/supabase';

interface CartState {
  items: CartItem[];
  addItem: (productId: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  createOrder: () => Promise<string>;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (productId) =>
        set((state) => {
          const existingItem = state.items.find(item => item.productId === productId);
          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.productId === productId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            };
          }
          return { items: [...state.items, { productId, quantity: 1 }] };
        }),
      
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter(item => item.productId !== productId)
        })),
      
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: quantity > 0
            ? state.items.map(item =>
                item.productId === productId
                  ? { ...item, quantity }
                  : item
              )
            : state.items.filter(item => item.productId !== productId)
        })),
      
      clearCart: () => set({ items: [] }),
      
      createOrder: async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('User not authenticated');

        const items = get().items;
        const total = items.reduce((sum, item) => sum + (item.quantity), 0);

        const { data: order, error } = await supabase
          .from('orders')
          .insert({
            user_id: user.id,
            total,
            status: 'pending'
          })
          .select()
          .single();

        if (error) throw error;

        const orderItems = items.map(item => ({
          order_id: order.id,
          product_id: item.productId,
          quantity: item.quantity
        }));

        const { error: itemsError } = await supabase
          .from('order_items')
          .insert(orderItems);

        if (itemsError) throw itemsError;

        get().clearCart();
        return order.id;
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);