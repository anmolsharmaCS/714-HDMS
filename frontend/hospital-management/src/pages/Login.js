import React from 'react'
import { FaGoogle, FaEnvelope, FaUserPlus } from 'react-icons/fa';
import { useLottie } from "lottie-react";
import animationData from "../assets/animations/loginsignup.json"
import {auth, logInWithEmailAndPassword, signInWithGoogle} from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";


function Login(props) {
    const [emailSignup, setEmailSignup] = React.useState(false);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [user, loading, error] = useAuthState(auth);

    const options = {
        loop: false,
        animationData: animationData,
    };
    const { View } = useLottie(options);

    React.useEffect(() => {
        if (user) props.navigatePage(0)
      }, [user]);

      
    async function loginWithGoogle() {
        if(await signInWithGoogle())
            props.navigatePage(0)
    }

    async function loginWithEmail() {
        if(await logInWithEmailAndPassword(email, password))
            props.navigatePage(0)
    }

    function navigateToSignup() {
        props.navigatePage(-2)
    }

    return (
        <section className="h-screen bg-slate-200">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap mt-0 h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        {View}
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <h1 className="text-6xl text-semibold mb-10">Sign In.</h1>
                        {emailSignup ? (
                            <form>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-slate-900 bg-slate-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-900 focus:bg-slate-100 focus:border-rose-500 focus:outline-none"
                                        placeholder="Email address"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-slate-900 bg-slate-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-900 focus:bg-slate-100 focus:border-rose-500 focus:outline-none"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <a
                                    className="px-7 py-3 font-medium text-sm leading-snug uppercase rounded shadow-md w-full flex justify-center items-center mb-3 text-rose-500 bg-slate-800 hover:shadow-lg hover:bg-rose-500 hover:text-slate-800 transition duration-150 ease-in-out"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    role="button"
                                    onClick={() => loginWithEmail()}
                                >
                                    <FaEnvelope className="w-3.5 h-3.5 mr-2" />
                                    Sign In
                                </a>
                            </form>
                        ) : (
                            <a
                                className="px-7 py-3 font-medium text-sm leading-snug uppercase rounded shadow-md w-full flex justify-center items-center mb-3 text-rose-500 bg-slate-800 hover:shadow-lg hover:bg-rose-500 hover:text-slate-800 transition duration-150 ease-in-out"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                role="button"
                                onClick={() => setEmailSignup(true)}
                            >
                                <FaEnvelope className="w-3.5 h-3.5 mr-2" />
                                Sign In with Email
                            </a>
                        )}
                        <a
                            className="px-7 py-3 font-medium text-sm leading-snug uppercase rounded shadow-md w-full flex justify-center items-center mb-3 text-slate-900 bg-rose-500 hover:shadow-lg hover:bg-slate-800 hover:text-rose-500 transition duration-150 ease-in-out"
                            role="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={() => loginWithGoogle()}
                        >
                            <FaGoogle className="w-3.5 h-3.5 mr-2" />
                            Sign In with Google
                        </a>


                        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-black before:mt-0.5 after:flex-1 after:border-t after:border-black after:mt-0.5">
                            <p className="text-center font-semibold mx-4 mb-0">Don't Have An Account?</p>
                        </div>

                        <a
                            className="px-7 py-3 font-medium text-sm leading-snug uppercase rounded shadow-md w-full flex justify-center items-center mb-3 text-rose-500 bg-slate-800 hover:shadow-lg hover:bg-rose-500 hover:text-slate-800 transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            role="button"
                            onClick={() => navigateToSignup()}
                        >
                            <FaUserPlus className="w-3.5 h-3.5 mr-2" />
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
