import type { SignUpFormData } from "../libs/types";

// a function that accepts an object with properties of type SignUpFormData
// It validates the fields
// and Retruns a response
export const validateSignUpFields = (
  formData: SignUpFormData,
): {
  error: string | null;
  isError: boolean;
} => {
  if (formData.firstName.trim().length < 3) {
    return {
      isError: true,
      error: "First name must be at least 3 characters.",
    };
  }

  if (formData.lastName.trim().length < 3) {
    return {
      isError: true,
      error: "Last name must be at least 3 characters.",
    };
  }

  if (formData.password.trim().length < 8) {
    return {
      isError: true,
      error: "Password must contain at least 8 characters.",
    };
  }

  return {
    isError: false,
    error: null,
  };
};
