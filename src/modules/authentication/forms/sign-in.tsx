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

  const baseUrl = "https://localhost:7118/api";

  // common methods: GET | POST | PUT | PATCH | DELETE

  const handleSignIn = (e: React.SubmitEvent) => {
    e.preventDefault();

    const logUserIn = async () => {
      try {
        const logUserRes = await fetch(`${baseUrl}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signinFormData),
        });

        const dto = await logUserRes.json(); // parse

        if (!logUserRes.ok || logUserRes.status > 399) {
          throw dto;
        }

        console.log("succes response: ", dto);

        toast.success("Login Successful!");
      } catch (error) {
        console.error(error);
        toast.error(
          (error as { message: string }).message || "Sorry, an error occured.",
        );
      }
    };

    logUserIn();
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
