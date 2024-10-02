import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Login from './Login'

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className="flex h-screen items-center justify-center bg-slate-100">
            <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-lg">Signup</h3>
                    <div className="mt-4 space-y-2">
                        {/* Name */}
                        <span>Name</span>
                        <br />
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-100 px-3 py-1 border rounded-md outline-none"
                            {...register("name", { required: true })}
                        />
                        <br />
                        {errors.name && (
                            <span className="text-sm text-red-500">
                                This field is required
                            </span>
                        )}
                    </div>
                    {/* Email */}
                    <div className="mt-4 space-y-2">
                        <span>Email</span>
                        <br />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-100 px-3 py-1 border rounded-md outline-none"
                            {...register("email", { required: true })}
                        />
                        <br />
                        {errors.email && (
                            <span className="text-sm text-red-500">
                                This field is required
                            </span>
                        )}
                    </div>
                    {/* password */}
                    <div className="mt-4 space-y-2">
                        <span>Password</span>
                        <br />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-100 px-3 py-1 border rounded-md outline-none"
                            {...register("password", { required: true })}
                        />
                        <br />
                        {errors.password && (
                            <span className="text-sm text-red-500">
                                This field is required
                            </span>
                        )}
                    </div>

                    {/* Button */}
                    <div className="mt-6">
                        <button className="bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200">
                            Signup
                        </button>
                    </div>
                    <div className='mt-4'>
                        <p className="text-xl">
                            Have account?{" "}
                            <Link
                                to="/"
                                className="underline text-blue-500 cursor-pointer"
                            >
                                Login
                            </Link>{" "}
                            <Login />
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup