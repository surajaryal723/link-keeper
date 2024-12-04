import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import { useState } from "react";
import { Link } from "react-router-dom";
type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const loginUser: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(loginUser)}
      className="flex flex-col gap-5 mt-10"
    >
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
          {errors.email && (
            <p className="text-sm text-red-600">Email is required!</p>
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
          type={passwordVisibility ? "text" : "password"}
          id="password"
          {...register("password", {
            required: "Password is required",
          })}
          placeholder="Enter your password!"
          className="outline-none placeholder:font-light font-light bg-white border-solid border-[1px] border-[#D1D5DB] focus:border-black py-2 px-4 rounded-md"
        />
        {errors.password && (
          <p className="text-sm text-red-600">Password is required!</p>
        )}

        <div className="w-full mt-5">
          <Button variant="dark" text="Sign in" />
        </div>
        <div className="w-full mt-5 flex items-start gap-2">
          
          <Link to="/">Don't have an account?</Link>
        </div>
      </div>
    </form>
  );
};
