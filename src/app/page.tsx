// pages/index.js
import Image from 'next/image';


const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-100 via-pink-500 to-purple-400 py-20 text-center">
        <h1 className="text-4xl font-bold text-white">Welcome to Glow More</h1>
        <p className="mt-4 text-lg text-white">Your go-to blog for the latest skin care tips and beauty secrets.</p>
      </section>

      {/* About Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-extrabold text-pink-600">About Me</h2>
            <p className="mt-4 text-lg text-gray-600">
              Hello! I’m the creator behind Glow More. I’ve always been passionate about skin care and helping others
              achieve glowing, healthy skin. Through my blog, I share my personal experiences, expert tips, and product
              reviews that cater to all skin types. I believe that skin care should be simple, fun, and effective.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition duration-300 cursor-pointer">
                Explore My Blogs
              </span>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-80 w-full md:h-[350px] lg:h-[400px]">
            <Image
              src="/skin.jpg" // Replace with your image path
              alt="Skin Care"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-pink-600">Latest Blogs</h2>
          <p className="mt-4 text-lg text-gray-600">Catch up on my latest articles and tips for glowing skin!</p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Blog 1 */}
            <div className="relative group">
              <div className="relative h-56 w-full ">
                <Image
                  src="/my.avif" // Replace with your image path
                  alt="Blog 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg group-hover:scale-105 object-cover filter-none group-hover:blur transition duration-300 ease-in-out "
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-50 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-black">
                <h3 className="text-xl font-semibold">Top 5 Skin Care Routines</h3>
                <p className="mt-2">Discover simple yet effective skin care routines that you can follow daily for glowing skin.</p>
                <span className="mt-2 inline-block text-pink-600 hover:text-pink-800 font-semibold cursor-pointer">
                  Read More
                </span>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="relative group">
              <div className="relative h-56 w-full">
                <Image
                  src="/images.jpeg" // Replace with your image path
                  alt="Blog 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg group-hover:scale-105 object-cover filter-none group-hover:blur transition duration-300 ease-in-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-50 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-black">
                <h3 className="text-xl font-semibold">The Best Natural Ingredients for Skin</h3>
                <p className="mt-2">Explore natural ingredients that can do wonders for your skin and why they work so well.</p>
                <span className="mt-2 inline-block text-pink-600 hover:text-pink-800 font-semibold cursor-pointer">
                  Read More
                </span>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="relative group">
              <div className="relative h-56 w-full">
                <Image
                  src="/facemasks.jpg" // Replace with your image path
                  alt="Blog 3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg group-hover:scale-105 object-cover filter-none group-hover:blur transition duration-300 ease-in-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-50 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-black">
                <h3 className="text-xl font-semibold">The Ultimate Guide to Face Masks</h3>
                <p className="mt-2">A comprehensive guide on different types of face masks and how to choose the best one for your skin.</p>
                <span className="mt-2 inline-block text-pink-600 hover:text-pink-800 font-semibold cursor-pointer">
                  Read More
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
