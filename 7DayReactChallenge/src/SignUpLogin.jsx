import { useState } from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faUser,faLock } from '@fortawesome/free-solid-svg-icons'

function SignUpLogin() {
    const [action, setAction] = useState('Sign Up');
    return (
        <>
            <div className="w-100 h-screen flex items-center justify-center">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-black flex-shrink-0">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="flex justify-center space-x-2" >

                            <img
                                className=" h-10 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="Your Company"
                            />
                            <h2 className="text-white text-3xl font-bold leading-9  tracking-normal  ">React Form</h2>
                        </div>

                        <div className="flex">
                            <h2 className={`w-1/2 mt-10 text-center text-2xl font-bold leading-9 tracking-normal cursor-pointer ${action === 'Sign Up' ? 'text-white border-b-2 pb-2' : 'text-gray-500'}`} onClick={() => { setAction('Sign Up') }}>
                                Sign Up
                            </h2>
                            <h2 className={`w-1/2 mt-10 text-center text-2xl font-bold leading-9 tracking-normal  cursor-pointer ${action === 'Sign Up' ? 'text-gray-500' : 'text-white border-b-2 pb-2'}`} onClick={() => { setAction('Sign In') }}>
                                Sign In
                            </h2>
                        </div>
                    </div>
                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm ">
                        <form className="space-y-6 flex flex-col items-between" action="" method="POST" >
                            <div className={action === 'Sign Up'? '' : 'hidden'} >
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                                   User Name
                                </label>
                                <div className="mt-2 relative">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        placeholder='username'
                                        required
                                        className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                    />
                                  <FontAwesomeIcon icon={faUser} className="text-black absolute top-2.5 right-2"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                    Email address
                                </label>
                                <div className="mt-2 relative">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="email"
                                        required
                                        className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                    />
                                  <FontAwesomeIcon icon={faEnvelope} className="text-black absolute top-2.5 right-2"/>

                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2 relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        placeholder="password"
                                        required
                                        className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                    />
                                <FontAwesomeIcon icon={faLock} className="text-black absolute top-2.5 right-2"/>
                                </div>
                                
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="text-xl font-bold leading-9 tracking-normal text-white flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {action === 'Sign In' ? 'Sign In' : 'Sign Up'}
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Join Us 
                            </a>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUpLogin;
