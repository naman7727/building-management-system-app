export type Role = 'ADMIN' | 'MANAGER' | 'RESIDENT';
export type RequestStatus = 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
export interface AuthTokens { accessToken: string; refreshToken: string; }
export interface Building { id: string; name: string; address: string; }
export interface MaintenanceRequest { id: string; title: string; description: string; status: RequestStatus; }
