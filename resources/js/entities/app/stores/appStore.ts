import { defineStore } from 'pinia';
import type { AppState } from '@entities/app/interfaces/app.interface';
import { Auth } from '@entities/auth/interfaces/app.interface';

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        auth: null,
    }),

    actions: {
        initialize() {
            if (this.isInitialized) return;

            try {
                const auth = localStorage.getItem('auth');

                if (auth) this.auth = JSON.parse(auth);

                this.isInitialized = true;
            } catch (error) {
                console.error('Error initializing app store:', error);
                this.isInitialized = true;
            }
        },

        setAuth(auth: Auth) {
            this.auth = auth;
            this.saveToStorage('auth', auth);
        },

        removeAuth() {
            this.auth = null;
            localStorage.removeItem('auth');
        },

        saveToStorage(key: string, value: any) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                console.error(`Error saving ${key} to localStorage:`, error);
            }
        },
    },
});