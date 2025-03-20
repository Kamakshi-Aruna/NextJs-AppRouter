export default async function Contact() {
    // Simulates a server delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="max-w-sm w-full bg-white p-5 rounded-lg shadow-md">
                <h1 className="text-xl font-bold text-center text-gray-800 mb-4">Contact Us</h1>

                <form className="space-y-3">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-xs font-semibold text-gray-700">Message</label>
                        <textarea
                            id="message"
                            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                            placeholder="Your message..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="w-full py-2 px-3 rounded-md bg-blue-600 text-white font-medium text-sm shadow-md transition duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                        >
                             Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
