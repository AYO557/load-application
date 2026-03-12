import { GithubLogoIcon, GoogleLogoIcon } from "@phosphor-icons/react";
import SignUpForm from "../forms/sign-up";
import Button from "../../../components/ui/button";
import AuthHeader from "../components/auth-header";
import FormDivider from "../components/form-divider";

const SignUpPage = () => {
  return (
    <>
      {/* Header */}
      <AuthHeader
        title="Sign Up Account"
        description="Enter the input fields below to create an account."
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

      <SignUpForm />

      <p className="text-center">
        Already have an account?{" "}
        <span className="hover:underline cursor-pointer">Sign In</span>
      </p>
    </>
  );
};

export default SignUpPage;
