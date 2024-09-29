"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../../../redux/reducers/userReducer";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const onSubmit = async (data) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post("/api/auth/login", data);
      dispatch(loginSuccess(response.data.user));
    } catch (err) {
      dispatch(
        loginFailure(err.response?.data?.message || "Something went wrong")
      );
    }
    reset();
  };

  return (
    <div className="bg-[#e7e7e7] h-screen w-screen flex items-center">
      <div className="h-max mx-auto flex flex-col items-center">
        <h1 className="text-xl font-bold text-center pb-10">Login Admin</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg p-10 flex flex-col gap-4 text-sm rounded-lg"
        >
          <div>
            <label
              className="text-gray-600 font-bold inline-block pb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="email"
              name="email"
              placeholder="mehedi@jaman.com"
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
            />
            {errors.email && (
              <p className="text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              className="text-gray-600 font-bold inline-block pb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="password"
              name="password"
              placeholder="******"
              {...register("password", {
                required: { value: true, message: "Password is required" },
              })}
            />
            {errors.password && (
              <p className="text-xs text-red-600">{errors.password.message}</p>
            )}
          </div>

          <div>
            <input
              className="bg-blue-500 w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-blue-700"
              type="submit"
              value="Login"
              disabled={loading}
            />
          </div>
          {error && <p className="text-xs text-red-600">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
