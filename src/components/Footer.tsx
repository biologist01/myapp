// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-pink-200 text-gray-800 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Footer Title */}
          <div className="text-3xl font-extrabold text-pink-600 hover:cursor-pointer tracking-wide hover:text-pink-700">
            GlowMore 
          </div>

          {/* Links Section */}
          <div className="flex space-x-8">
            <Link href="/" passHref>
              <span className="hover:text-pink-600 transition duration-300 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/blogs" passHref>
              <span className="hover:text-pink-600 transition duration-300 cursor-pointer">
                Blogs
              </span>
            </Link>
            <Link href="/contactUs" passHref>
              <span className="hover:text-pink-600 transition duration-300 cursor-pointer">
                Contact Us
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Glow More. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
