function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center">

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">

        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            About EventHub
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            EventHub is a community-driven platform designed to help people
            discover, create, and manage events effortlessly. Our goal is to
            connect communities and make event planning simple, modern,
            and enjoyable.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Mission */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
             Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To build a platform where communities can organize events,
              connect with people, and share experiences effortlessly.
              We aim to simplify planning while strengthening relationships.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
               Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To become a trusted and innovative event planning solution
              that brings people together through technology and fosters
              stronger, more connected communities worldwide.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;