import type {
  ErrorResponse,
  LoginRequestDto,
  RegisterRequestDto,
  RegisterResponseDto,
} from "../dtos/auth.dtos";

const AuthService = {
  registerUser: async (data: RegisterRequestDto) => {
    try {
      const registerResponseDto = await fetch(
        "https://localhost:7118/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      const response = await registerResponseDto.json();

      if (
        !registerResponseDto.ok ||
        registerResponseDto.status === 400 ||
        registerResponseDto.status === 500
      ) {
        throw response;
      }

      return response as RegisterResponseDto;
    } catch (error) {
      return (error as ErrorResponse | Error).message;
    }
  },

  loginUser: async (data: LoginRequestDto) => {
    try {
      const loginResponseDto = await fetch(
        "https://localhost:7118/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      const response = await loginResponseDto.json();

      if (
        !loginResponseDto.ok ||
        loginResponseDto.status === 400 ||
        loginResponseDto.status === 500
      ) {
        throw response;
      }

      return response as RegisterResponseDto;
    } catch (error) {
      return (error as ErrorResponse | Error).message;
    }
  },
};

export default AuthService;
