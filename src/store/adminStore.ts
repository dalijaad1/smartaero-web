import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface AdminState {
  isAdmin: boolean;
  loading: boolean;
  error: string | null;
  checkAdminStatus: () => Promise<void>;
}

export const useAdminStore = create<AdminState>((set) => ({
  isAdmin: false,
  loading: true,
  error: null,

  checkAdminStatus: async () => {
    try {
      set({ loading: true, error: null });
      
      const { data, error } = await supabase
        .rpc('is_admin');

      if (error) throw error;
      
      set({ isAdmin: data });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  }
}));