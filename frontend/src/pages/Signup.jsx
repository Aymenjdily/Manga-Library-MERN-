import React,{ useState } from 'react'
import picture from '../assets/illustration.svg'
import { Link } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSignup = async (e) => {
        e.preventDefault()

        await signup(username, email, password)
    }

    return (
        <section className='h-screen bg-gray-50 dark:bg-gray-900'>
            <div className='container mx-auto'>
                <div class=" flex flex-row items-center h-screen justify-center px-6 py-8 mx-auto lg:py-0">
                    <div class="flex-1 flex flex-col items-center">
                        <h2 href="#" class="flex items-center mb-6 text-2xl font-semibold text-[#EB3349]">
                        ZineManga Library
                        </h2>
                        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Create an Account
                                </h1>
                                <form class="space-y-4 md:space-y-6" onSubmit={handleSignup}>
                                    <div>
                                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                                        <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="@Username" onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name@exmaple.com" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <span class="font-medium text-primary-600 hover:underline dark:text-primary-500">Terms and Conditions</span></label>
                                        </div>
                                    </div>
                                    <button disabled={isLoading} type="submit" class="w-full text-white bg-[#EB3349] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                    {
                                        error &&
                                        <div className='text-red-500 bg-red-400/20 text-center py-2 px-2 border-2 border-red-500'>
                                            {error}
                                        </div>
                                    }
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? 
                                        {" "}
                                        <Link to='/login'>
                                            <span class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</span>
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <img alt='zinemanga' src={picture} className="lg:flex hidden flex-1" />
                </div>
            </div>
        </section>
    )
}

export default Signup