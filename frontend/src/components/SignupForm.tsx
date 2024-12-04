import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import { useState } from "react";
import { Link } from "react-router-dom";

type Inputs = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export default function SignupForm() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const registerUser: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const watchEmail = watch("email") || "test@test.com";
  const watchPassword = watch("password") || "Link@2023";

  const emailValidation = {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(watchEmail),
  };

  const passwordValidation = {
    hasUppercase: /[A-Z]/.test(watchPassword),
    hasLowercase: /[a-z]/.test(watchPassword),
    hasNumber: /[0-9]/.test(watchPassword),
    hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(watchPassword),
    minLength: watchPassword.length >= 8,
  };

  return (
    <form
      onSubmit={handleSubmit(registerUser)}
      className="flex flex-col gap-5 mt-10"
    >
      <div className="flex lg:flex-row md:flex-row mb:flex-col items-center justify-between gap-4">
        <div className="lg:w-1/2 md:w-1/2 mb:w-full flex flex-col gap-1">
          <label htmlFor="firstname" className="cursor-pointer">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            {...register("firstname", {
              required: "This field is required",
            })}
            placeholder="John"
            className="outline-none placeholder:font-light font-light bg-white border-solid border-[1px] border-[#D1D5DB] focus:border-black py-2 px-4 rounded-md"
          />
          {errors.firstname && (
            <p className="text-sm text-red-600">This field is required!</p>
          )}
        </div>
        <div className="lg:w-1/2 md:w-1/2 mb:w-full flex flex-col gap-1">
          <label htmlFor="lastname" className="cursor-pointer">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            {...register("lastname", {
              required: "This field is required!",
            })}
            placeholder="Doe"
            className="outline-none placeholder:font-light font-light bg-white border-solid border-[1px] border-[#D1D5DB] focus:border-black py-2 px-4 rounded-md"
          />
          {errors.lastname && (
            <p className="text-sm text-red-600">{errors.lastname.message}</p>
          )}
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row mb:flex-col items-center justify-between gap-4">
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="email" className="cursor-pointer">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required!",
            })}
            placeholder="jdoe@mycompany.com "
            className="outline-none placeholder:font-light font-light bg-white border-solid border-[1px] border-[#D1D5DB] focus:border-black py-2 px-4 rounded-md"
          />
          {!emailValidation.regex && (
            <p className="text-sm text-red-600">Enter a valid email address!</p>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <label htmlFor="password" className="cursor-pointer">
            Password
          </label>
          <div className="flex gap-1 items-center">
            <input
            className="accent-black"
              type="checkbox"
              name=""
              id="showPassword"
              onClick={() => setPasswordVisibility(!passwordVisibility)}
            />
            <label htmlFor="showPassword" className="cursor-pointer">
              Show Password
            </label>
          </div>
        </div>
        <input
          type={passwordVisibility?"text":"password"}
          id="password"
          {...register("password", {
            required: "Password is required",
          })}
          placeholder="Enter your password!"
          className="outline-none placeholder:font-light font-light bg-white border-solid border-[1px] border-[#D1D5DB] focus:border-black py-2 px-4 rounded-md"
        />
        {!passwordValidation.hasLowercase &&
          !passwordValidation.hasLowercase &&
          !passwordValidation.hasNumber &&
          !passwordValidation.hasSymbol &&
          !passwordValidation.minLength && (
            <p className="text-sm text-red-600">
              Password doesn't match our criteria!
            </p>
          )}
        <ul>
          <ol>
            <span className="font-light text-sm text-gray-600">
              Mix of uppercase & lowercase letters
            </span>
          </ol>
          <ol>
            <span className="font-light text-sm text-gray-600">
              Minimum 8 characters long
            </span>
          </ol>
          <ol>
            <span className="font-light text-sm text-gray-600">
              Contain at least 1 number and a special character
            </span>
          </ol>
        </ul>

        <div className="w-full mt-5">
          <Button variant="dark" text="Create Account" />
        </div>
        <div className="w-full mt-5 flex items-start gap-2">
          <h3 className="font-[400] text-[rgba(0,0,0,0.5)]">Already have an account?</h3>
          <Link to='/login'>Sign in</Link>
        </div>
      </div>
    </form>
  );
}
