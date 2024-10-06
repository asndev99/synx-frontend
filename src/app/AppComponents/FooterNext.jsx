import { Link } from "@nextui-org/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="bg-[#14131A] py-8 text-white ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left flex flex-col gap-3">
            <h2 className="text-lg font-bold text-blue-600">SYnX</h2>
            <p className="text-sm w-[220px] break-words" >Join us today to level up your gaming experience!</p>
            <div className="flex gap-4 mt-3  text-2xl justify-center md:justify-start">
    <a href="https://facebook.com" target="_blank" >
      <FaFacebook  />
    </a>
    <a href="https://twitter.com" target="_blank" >
      <FaTwitter  />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram  />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin  />
    </a>
  </div>
          </div>

          <div className="mt-4 md:mt-0">
            <ul className="flex flex-col  ">
              <li>
                <Link href="#" className="text-gray-500 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div> 
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-col  ">
              <li>
                <Link href="#" className="text-gray-500 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white" isDisabled>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Email and Phone Section */}
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <p className="text-sm ">Email: info@brandname.com</p>
            <p className="text-sm ">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
