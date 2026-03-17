import React from "react";
import InputField from "../../../components/ui/input-field";
import Button from "../../../components/ui/button";
import type { SignUpFormData } from "../libs/types";
import { validateSignUpFields } from "../utils/validations";
import { toast } from "sonner";
import AuthService from "../infrastructure/services/auth.service";

const SignUpForm = (): React.ReactElement => {
  const [signupFormData, setSignupFormData] = React.useState<SignUpFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSignUp = (e: React.SubmitEvent) => {
    e.preventDefault();

    const { isError, error } = validateSignUpFields(signupFormData);

    if (isError) {
      toast.error(error);
    }

    if (!isError) {
      AuthService.registerUser({
        email: signupFormData.email,
        fullName: `${signupFormData.firstName} ${signupFormData.lastName}`,
        password: signupFormData.password,
        role: "Client",
      })
        .then(() => {
          toast.success("Sign Up Successful!");
        })
        .catch((err) => {
          toast.error("Sorry an error occured!");
        });
    }
  };

  return (
    <form onSubmit={handleSignUp} className="space-y-8">
      <fieldset className="space-y-4">
        <article className="grid grid-cols-2 gap-4">
          <InputField
            label="First Name"
            name="first-name"
            placeholder="John"
            value={signupFormData.firstName}
            onChange={(firstName) => {
              setSignupFormData({
                ...signupFormData,
                firstName,
              });
            }}
          />
          <InputField
            label="Last Name"
            name="last-name"
            placeholder="Doe"
            value={signupFormData.lastName}
            onChange={(lastName) => {
              setSignupFormData({
                ...signupFormData,
                lastName,
              });
            }}
          />
        </article>

        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="johndoe@example.com"
          value={signupFormData.email}
          onChange={(email) => {
            setSignupFormData({
              ...signupFormData,
              email,
            });
          }}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="*********"
          value={signupFormData.password}
          onChange={(password) => {
            setSignupFormData({
              ...signupFormData,
              password,
            });
          }}
        />
      </fieldset>

      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
