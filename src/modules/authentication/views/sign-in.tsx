import { GithubLogoIcon, GoogleLogoIcon } from "@phosphor-icons/react";
import LogInForm from "../forms/sign-in";
import Button from "../../../components/ui/button";
import AuthHeader from "../components/auth-header";
import FormDivider from "../components/form-divider";

const SignInPage = () => {
  return (
    <>
      <AuthHeader
        title="Sign In"
        description="Enter the input fields below to sign in."
      />

      {/* Socials */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline">
          <GoogleLogoIcon size={16} color="orange" weight="bold" />
          Google
        </Button>

        <Button variant="outline">
          <GithubLogoIcon size={16} color="red" weight="bold" />
          Github
        </Button>
      </div>

      <FormDivider>Or</FormDivider>

      <LogInForm />

      <p className="text-center">
        Don't have an account?{" "}
        <span className="hover:underline cursor-pointer">Sign Up</span>
      </p>
    </>
  );
};

export default SignInPage;
