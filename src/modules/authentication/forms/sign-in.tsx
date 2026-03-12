import React from "react";
import InputField from "../../../components/ui/input-field";
import Button from "../../../components/ui/button";
import type { SignInFormData } from "../libs/types";
import { toast } from "sonner";

const SignInForm = (): React.ReactElement => {
  const [signinFormData, setSigninFormData] = React.useState<SignInFormData>({
    email: "",
    password: "",
  });

  const handleSignIn = (e: React.SubmitEvent) => {
    e.preventDefault();

    toast.success("Sign In Successful!");
  };

  return (
    <form onSubmit={handleSignIn} className="space-y-8">
      <fieldset className="space-y-4">
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="johndoe@example.com"
          value={signinFormData.email}
          onChange={(email) => {
            setSigninFormData({
              ...signinFormData,
              email,
            });
          }}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="*********"
          value={signinFormData.password}
          onChange={(password) => {
            setSigninFormData({
              ...signinFormData,
              password,
            });
          }}
        />
      </fieldset>

      <Button type="submit">Sign In</Button>
    </form>
  );
};

export default SignInForm;
