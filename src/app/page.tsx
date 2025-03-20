export default async function Home() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return (
          <div className="bg-gradient-to-b from-blue-50 to-white">
                <header className="py-16 px-4">
                      <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Welcome to Our App</h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Discover amazing features and services designed to make your life easier and more productive.</p>
                      </div>
                </header>
          </div>
      );
}