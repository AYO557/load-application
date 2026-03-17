export type RegisterRequestDto = {
  fullName: string;
  email: string;
  password: string;
  role: "Client" | "Admin";
};

export type RegisterResponseDto = {
  token: string;
  userId: string;
  fullName: string;
  email: string;
  role: "Client" | "Admin";
  expiresAt: string;
};

export type LoginRequestDto = {
  email: string;
  password: string;
};

export type ErrorResponse = {
  message: string;
};
