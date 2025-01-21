// import React from 'react'
// import Image2 from "../../../../public/image2.png"
// import Image from 'next/image'
// export default function Sign_in() {
//   return (
//     <div>
//   <Image src={Image2} alt='image2'/>
//   <h2>Your Account</h2>
//   <h2>For Everything</h2>
//   <h2>Nike</h2>
//   <input type="email" placeholder='Email address'/>
//   <input type="password" placeholder='Password' />
//     </div>
//   )
// }


'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Image2 from "../../../../public/image2.png"
export default function LoginForm() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Heading */}
        <div className="flex flex-col items-center">
          <Image src={Image2} alt="Nike Logo" width={80} height={30} className="mb-6" />
          <h2 className="text-2xl font-bold text-center leading-7 sm:text-3xl sm:leading-8">
            YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
          </h2>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email address"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
          />
          
          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
          />
          
          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <span
                className={`w-5 h-5 border border-gray-300 rounded flex items-center justify-center mr-2 ${
                  isChecked ? 'bg-black' : 'bg-white'
                }`}
              >
                {isChecked && (
                  <svg
                    className="w-3 h-3 text-white fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                )}
              </span>
              <span className="text-sm text-gray-600">Keep me signed in</span>
            </label>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Forgotten your password?
            </Link>
          </div>
          
          {/* Terms and Conditions */}
          <p className="text-sm text-center text-gray-500">
            By logging in, you agree to Nike&apos;s{' '}
            <Link href="#" className="underline text-gray-600 hover:text-black">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="#" className="underline text-gray-600 hover:text-black">
              Terms of Use
            </Link>
          </p>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            SIGN IN
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm">
          <span className="text-gray-500">Not a Member? </span>
          <Link href="#" className="text-black underline hover:no-underline">
            Join Us
          </Link>
        </p>
      </div>
    </div>
  )
}
