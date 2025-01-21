import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import logo from "../../../../public/image2.png";

const Page = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4 md:px-0">
      {/* Logo */}
      <Image className="pb-5" src={logo} width={40} height={40} alt="Logo" />

      {/* Title */}
      <h2 className="uppercase text-center font-bold pb-5 text-lg md:text-xl">
        Become a Nike Member
      </h2>

      {/* Description */}
      <p className="w-full max-w-md text-center text-gray-500 pb-5">
        Create your Nike Member profile and get first access to the very best of
        Nike products, inspiration, and community.
      </p>

      {/* Form */}
      <form className="flex flex-col w-full max-w-md">
        {/* Inputs */}
        <input
          className="border-gray-300 rounded-md mb-4 px-4 py-3 border-[2px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="border-gray-300 rounded-md mb-4 px-4 py-3 border-[2px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          type="password"
          placeholder="Password"
        />
        <input
          className="border-gray-300 rounded-md mb-4 px-4 py-3 border-[2px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          type="text"
          placeholder="First Name"
        />
        <input
          className="border-gray-300 rounded-md mb-4 px-4 py-3 border-[2px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          type="text"
          placeholder="Last Name"
        />
        <input
          className="border-gray-300 rounded-md mb-4 px-4 py-3 border-[2px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          type="date"
          placeholder="Date of Birth"
        />

        {/* Birthday Note */}
        <p className="text-sm text-gray-500 text-center pb-3">
          Get a Nike Member Reward every year on your Birthday.
        </p>

        {/* Country Select */}
        <select className="border-gray-300 rounded-md mb-4 px-4 py-3 border-[2px] text-gray-500 focus:outline-none focus:ring-2 focus:ring-black">
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Canada">Canada</option>
        </select>

        {/* Gender Selection */}
        <div className="flex gap-4 mb-4">
          <button
            type="button"
            className="border-gray-300 rounded-md py-3 w-full text-center text-gray-500 border-[2px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
          >
            Male
          </button>
          <button
            type="button"
            className="border-gray-300 rounded-md py-3 w-full text-center text-gray-500 border-[2px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
          >
            Female
          </button>
        </div>

        {/* Email Updates */}
        <div className="flex items-start gap-2 mb-6">
          <input type="checkbox" id="emailUpdates" className="mt-1" />
          <label htmlFor="emailUpdates" className="text-sm text-gray-500">
            Sign up for emails to get updates from Nike on products, offers, and
            your Member benefits.
          </label>
        </div>

        {/* Terms and Conditions */}
        <p className="text-sm text-gray-500 text-center mb-6">
          By creating an account, you agree to Nike s
          <Link className="underline" href="#">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="underline" href="#">
            Terms of Use
          </Link>
          .
        </p>

        {/* Submit Button */}
        <Button className="w-full py-3 rounded-md bg-black text-white font-medium hover:bg-gray-800">
          Join Us
        </Button>

        {/* Already a Member */}
        <p className="text-center mt-6">
          <span className="text-gray-500">Already a Member? </span>
          <Link href="" className="underline text-black">
            Sign In.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
