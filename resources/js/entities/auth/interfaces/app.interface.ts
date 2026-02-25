interface Auth {
    user_id: number,
    name: string,
    email: string,
    token: string,
    role: string,
}

interface LoginData {
    email: string,
    password: string,
}

interface RegData {
    name: string,
    email: string,
    password: string,
    password_confirmation: string,
}

export type { Auth, LoginData, RegData };