export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string
    password: string
    salt: string;
    birthDate: string;
    address: string;
    city: string;
    state: string;
    country: string;
    imageUrl: string;
    accessToken: string;
    refreshToken: string;
    isActive: boolean;
    isMerchant: boolean;
    roles: [],
    lastLogin: string;
    phone: string;
    NbFailedAttempts: number;
    temporaryLockedAt: string;
    merchantId: string;
    userSupportId: string;
    organizationId: string;
}