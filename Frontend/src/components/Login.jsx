import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };
        await axios
            .post("https://stackstore-iak3ej2dr-annnanyas-projects.vercel.app/user/login", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Loggedin Successfully!");
                    document.getElementById("my_modal").close();
                    setTimeout(() => {
                        window.location.reload();
                        localStorage.setItem("Users", JSON.stringify(res.data.user));
                    }, 1000);
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("User does not exist!");
                    setTimeout(() => { }, 2000);
                }
            });
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