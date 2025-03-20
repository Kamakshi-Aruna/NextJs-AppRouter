export default async function About(){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">About Page!!</h1>

                <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                        Welcome to our company! We're dedicated to providing exceptional products and services to our customers.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-gray-50 p-4 rounded-md text-center">
                            <h3 className="font-medium text-lg mb-2">Our Mission</h3>
                            <p className="text-sm text-gray-500">To deliver innovative solutions that improve everyday life.</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md text-center">
                            <h3 className="font-medium text-lg mb-2">Our Vision</h3>
                            <p className="text-sm text-gray-500">Building a future where technology enhances human potential.</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md text-center">
                            <h3 className="font-medium text-lg mb-2">Our Values</h3>
                            <p className="text-sm text-gray-500">Integrity, innovation, and customer satisfaction guide everything we do.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}