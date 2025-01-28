import Image from "next/image";
import Image1 from "../../public/image1.png";
import Image2 from "../../public/image2.png";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import Image3 from "../../public/image3.png";
import HamburgerMenu from "./Hamburger";
import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <div className="lg:flex lg:justify-between md:flex md:justify-between sm:flex sm:justify-between flex justify-between items-center pl-5 pr-5 pt-3 bg-[#F5F5F5]">
        <div>
          <Image src={Image1} alt="image1" height={40} />
        </div>

        <ul className="lg:flex lg:text-xl lg:font-normal md:flex md:text-xl md:font-normal sm:flex sm:text-xl sm:font-normal flex text-sm font-normal space-x-3 font-[Helvetica Neue]">
          <Link href={"/"}>
            <li className="hover:text-gray-500">Home |</li>
          </Link>
          <a href="/find">
            <li className="hover:text-gray-500">Find a store |</li>
          </a>
          <Link href={"/help"}>
            <li className="hover:text-gray-500">Help |</li>
          </Link>
          <a href="/join_us">
            <li className="hover:text-gray-500">Join us |</li>
          </a>
          <Link href={"/sign_in"}>
            <li className="hover:text-gray-500">Sign in</li>
          </Link>
        </ul>
      </div>
      <div className="lg:flex lg:justify-between pl-5 pr-5 pt-3 lg:items-center sm:flex sm:justify-between sm:items-center flex justify-between items-center border-b-2 border-t-2 h-20 border-[#F5F5F5]">
        <div>
          <Image src={Image2} alt="image2" height={100} width={100} />
        </div>
        <ul className="lg:flex lg:text-xl lg:font-semibold lg:space-x-8 md:hidden sm:hidden hidden">
         <Link href={"/all-products"} ><li>New & Featured</li></Link>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sales</li>
          <li>SNKRS</li>
        </ul>
        <div className="lg:flex ">
          <Search className="rounded-l-md bg-[#F5F5F5] h-7 md:hidden sm:hidden hidden " />
          <input
            type="search"
            placeholder="Search"
            className="h-7 rounded-r-md bg-[#F5F5F5] md:hidden sm:hidden hidden"
          />

          <div className="flex space-x-3 items-center pl-5">
            <Link href={"/wishlist"}>
              {" "}
              <Heart />
            </Link>
           <Link href={"/cart"}>
              <Image src={Image3} alt="image3" />
            </Link>
            <div className="lg:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}