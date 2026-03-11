import { GithubLogoIcon, GoogleLogoIcon } from "@phosphor-icons/react";
import InputField from "../../../components/ui/input-field";
import Button from "../../../components/ui/button";

const SignUpPage = () => {
  return (
    <>
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="2xl:text-3xl xl:text-2xl text-xl font-bold">
          Sign Up Account
        </h1>
        <p className="text-sm">
          Enter the input fields below to create an account.
        </p>
      </div>

      {/* Socials */}
      <div className="grid grid-cols-2 gap-4">
        <button className="flex gap-2 py-2 w-full justify-center items-center rounded-lg border-2">
          <GoogleLogoIcon size={16} color="orange" weight="bold" />
          Google
        </button>

        <button className="flex gap-2 py-2 w-full justify-center items-center rounded-lg border-2">
          <GithubLogoIcon size={16} color="red" weight="bold" />
          Github
        </button>
      </div>

      {/* Divider */}
      <div className="flex gap-2 items-center">
        <div className="h-0.5 flex-1 bg-white/50"></div>
        <span>Or</span>
        <div className="h-0.5 flex-1 bg-white/50"></div>
      </div>

      {/* Signup Form */}
      <form className="space-y-8">
        <fieldset className="space-y-4">
          <article className="grid grid-cols-2 gap-4">
            <InputField
              label="First Name"
              name="first-name"
              placeholder="John"
            />
            <InputField label="Last Name" name="last-name" placeholder="Doe" />
          </article>

          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="johndoe@example.com"
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="*********"
          />
        </fieldset>

        <Button type="submit">Sign Up</Button>
      </form>

      <p className="text-center">
        Already have an account?{" "}
        <span className="hover:underline cursor-pointer">Sign In</span>
      </p>
    </>
  );
};

export default SignUpPage;
