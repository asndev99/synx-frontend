"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../../../redux/reducers/userReducer";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const navigation = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const onSubmit = async (data) => {
    console.log(data, "data");
    dispatch(loginRequest());
    try {
      const response = await axios.post(
        "https://sn6jm18m-8000.inc1.devtunnels.ms/api/v1/admin/login", data
      );
      dispatch(loginSuccess(response.data));
      localStorage.setItem("admin_token", response.data.token);
      toast.success("Login successful!");
      navigation.push('/dashboard');
    } catch (err) {
      dispatch(
        loginFailure(err.response?.data?.message || "Something went wrong")
      );
      toast.error("Login failed. Please check your credentials and try again.");
    }
    reset();
  };

  return (
    <>
      <ToastContainer />
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
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                type="text"
                name="username"
                placeholder="xyz123"
                {...register("username", {
                  required: { value: true, message: "username is required" },
                })}
              />
              {errors.username && (
                <p className="text-xs text-red-600">{errors.username.message}</p>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
