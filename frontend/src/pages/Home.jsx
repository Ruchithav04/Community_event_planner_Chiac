import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 min-h-[90vh] flex items-center">

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT SIDE IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-[440px] h-[440px] md:w-[500px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/HomeImage.jpeg"
              alt="Community Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="md:w-1/2 space-y-8 text-center md:text-left">

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Community Event Planner
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            Create, discover, and manage community events effortlessly.
            Connect with people, organize gatherings, and build stronger
            communities — all in one place.
          </p>

          {/* Single CTA Button */}
          <div className="pt-4">
            <Link
              to="/login"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full shadow-md transition duration-300"
            >
              Get Started
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;