import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6">
      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:underline">
                {" "}
                <Link href="#">Become Link Member</Link>
              </a>
            </li>
            <li>
              <a className="hover:underline">
                <Link href="#">Sign Up for Email</Link>
              </a>
            </li>
            <li>
              <a className="hover:underline">
                <Link href="#">Student Discounts</Link>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:underline">
                <Link href="#">Order Status </Link>
              </a>
            </li>
            <li>
              <a className="hover:underline">
                <Link href="#">Delivery </Link>
              </a>
            </li>
            <li>
              <a className="hover:underline">
                <Link href="#">Returns </Link>
              </a>
            </li>
            <li>
              <a className="hover:underline">
                {" "}
                <Link href="#">Payment Options </Link>
              </a>
            </li>
            <li>
              <a className="hover:underline">
                <Link href="#">Contact Us on Nike.com</Link>
              </a>
            </li>
            <li>
              <a className="hover:underline">
                <Link href="#">Contact Us on All Other Inquiries </Link>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:underline">
                <Link href="#">News </Link>
              </a>
            </li>
            <li>
              <a className="hover:underline">
                <Link href="#">Careers</Link>
              </a>
            </li>
            <li>
              <a className="hover:underline">
                <Link href="#">Investors</Link>
              </a>
            </li>
            <li>
              <a className="hover:underline">
                {" "}
                <Link href="#">Sustainability</Link>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 (Social Media Icons) */}
        <div className="flex justify-start lg:justify-end items-start gap-4">
          <FaTwitter className="text-lg cursor-pointer hover:text-gray-400" />
          <FaFacebook className="text-lg cursor-pointer hover:text-gray-400" />
          <FaYoutube className="text-lg cursor-pointer hover:text-gray-400" />
          <FaInstagram className="text-lg cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">
        {/* Country and Copyright */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <IoLocationOutline />
          <span>India</span>
          <span>© 2023 Nike, Inc. All Rights Reserved</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 sm:justify-center">
          <a className="hover:underline">
            <Link href="#">Guides</Link>
          </a>

          <a className="hover:underline">
            <Link href="#">Terms of Sale</Link>
          </a>

          <a className="hover:underline">
            <Link href="#">Terms of Use </Link>
          </a>

          <a className="hover:underline">
            <Link href="#">Nike Privacy Policy</Link>
          </a>
        </div>
      </div>
    </footer>
  );
}