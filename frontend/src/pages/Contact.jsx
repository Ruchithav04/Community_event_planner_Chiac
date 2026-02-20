function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center">

      <div className="max-w-5xl mx-auto px-6 py-20 w-full">

        {/* Title Section */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-xl rounded-3xl p-10 max-w-3xl mx-auto">

          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-left text-gray-700 dark:text-gray-300 mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-left text-gray-700 dark:text-gray-300 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-left text-gray-700 dark:text-gray-300 mb-2 font-medium">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>

            {/* Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3 rounded-full shadow-lg transition duration-300"
              >
                Send Message
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Contact;