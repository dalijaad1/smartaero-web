import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';

interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  phone: string | null;
}

interface AuthState {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
  setUser: (user: User | null) => void;
  updateProfile: (data: Partial<Profile>) => Promise<void>;
  updatePassword: (currentPassword: string, newPassword: string) => Promise<void>;
  fetchProfile: () => Promise<void>;
  deleteAccount: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  profile: null,
  loading: true,
  error: null,

  fetchProfile: async () => {
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', get().user?.id)
        .single();

      if (error) throw error;
      set({ profile });
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  },

  signIn: async (email: string, password: string) => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      set({ user: data.user });

      // Fetch profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data.user.id)
        .single();

      set({ profile });
    } catch (error) {
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  signUp: async (email: string, password: string, fullName: string) => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;

      if (data.user) {
        // Update profile with full name
        const { error: profileError } = await supabase
          .from('profiles')
          .update({ full_name: fullName })
          .eq('id', data.user.id);

        if (profileError) throw profileError;

        set({ 
          user: data.user,
          profile: {
            id: data.user.id,
            email: data.user.email!,
            full_name: fullName,
            avatar_url: null,
            phone: null,
          }
        });
      }
    } catch (error) {
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  signOut: async () => {
    try {
      set({ loading: true, error: null });
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ user: null, profile: null });
    } catch (error) {
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  setUser: (user) => {
    set({ user, loading: false });
    if (user) {
      get().fetchProfile();
    }
  },

  updateProfile: async (data) => {
    try {
      set({ loading: true, error: null });
      const user = get().user;
      if (!user) throw new Error('No user logged in');

      const { error } = await supabase
        .from('profiles')
        .update(data)
        .eq('id', user.id);

      if (error) throw error;

      // Fetch updated profile
      await get().fetchProfile();
    } catch (error) {
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  updatePassword: async (currentPassword: string, newPassword: string) => {
    try {
      set({ loading: true, error: null });
      
      // First verify current password
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: get().user?.email!,
        password: currentPassword,
      });

      if (signInError) throw new Error('Current password is incorrect');

      // Update password
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;
    } catch (error) {
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  deleteAccount: async () => {
    try {
      set({ loading: true, error: null });
      const user = get().user;
      if (!user) throw new Error('No user logged in');

      // Delete user's profile (this will cascade to delete the auth.users entry)
      const { error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', user.id);

      if (error) throw error;

      // Sign out
      await get().signOut();
    } catch (error) {
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));