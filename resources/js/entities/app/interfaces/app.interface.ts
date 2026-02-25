import { Auth } from "@entities/auth/interfaces/app.interface";

interface AppState {
    auth: Auth | null;
}

export type { AppState };