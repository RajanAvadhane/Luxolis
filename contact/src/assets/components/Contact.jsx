import React from "react"
import { PiShoppingCartLight } from "react-icons/pi"
import { FiUser, FiLock } from "react-icons/fi"

import { useForm } from "react-hook-form"

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    const { username, password } = data
    if (username === "test@luxpmsoft.com" && password === "test1234!") {
      // Redirect or perform any action upon successful login
      console.log("Login successful")
      // Leave the page blank
    } else if (password.match(/^[a-zA-Z0-9!@#$%^&*]+$/)) {
      // Incorrect password
      alert("The provided password is wrong")
    } else {
      // Wrong combination
      alert("Wrong combination")
    }
  }

  return (
    <div className=" bg-blue-700 relative top-1/2 left-1/2 translate-x-[100%] translate-y-[40%] h-96 w-96 ">
      <form onSubmit={handleSubmit(onSubmit)} className=" p-8 rounded-L w-96 ">
        <div className="flex justify-center items-center  ">
          <PiShoppingCartLight size={150} color="white" />
        </div>

        <div className="mb-4 ">
          <div className="relative  ">
            <span className=" absolute inset-y-0 left-0 pl-3 flex items-center">
              <FiUser className="h-5 w-5 text-white" />
            </span>
            <input
              className="shadow bg-blue-700 appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              id="username"
              type="text"
              placeholder="USERNAME"
              {...register("username")}
            />
          </div>
        </div>

        <div className="mb-2 ">
          <div className="relative ">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FiLock className="h-5 w-5 text-white" />
            </span>
            <input
              className="shadow bg-blue-700 appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="PASSWORD"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^[a-zA-Z0-9!@#$%^&*]+$/,
                  message:
                    "Password must contain letters, numbers, and special characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className=" bg-slate-100 text-blue-600 w-full px-4 py-2 rounded-md focus:outline-none mt-6  font-semibold shadow  "
          >
            LOGIN
          </button>

          <a
            href="#"
            className="flex justify-end text-slate-100 hover:text-blue-500 "
          >
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  )
}

export default Contact
