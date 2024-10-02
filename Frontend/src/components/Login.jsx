import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div>
            <dialog id="my_modal" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <h3 className="font-bold text-lg">Login</h3>
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
                                Login
                            </button>
                        </div>
                        <div className='mt-4'>
                            <p>
                                Not registered?{" "}
                                <Link
                                    to="/signup"
                                    className="underline text-blue-500 cursor-pointer"
                                >
                                    Signup
                                </Link>{" "}
                            </p>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div >
    )
}

export default Login