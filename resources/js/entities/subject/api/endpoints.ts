import { api } from '@shared/api/endpoints';

export const subjectEndpoints = {
    web: {
    },

    api: {
        getItems: '/subject/get-items',
        store: '/subject',
    }
} as const;

export { api };