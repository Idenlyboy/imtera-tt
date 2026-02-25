import { api } from '@shared/api/endpoints';

export const authEndpoints = {
    web: {
        login: '/login',
        reg: '/reg',
    },

    api: {
        login: '/login',
        reg: '/reg',
        logout: '/logout',
    }
} as const;

export { api };