import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-center p-4 bg-gray-800 text-white shadow-md">
            <div className="flex space-x-6">
                <Link href="/" className="px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-200">
                    Home
                </Link>
                <Link href="/about" className="px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-200">
                    About
                </Link>
                <Link href="/contact" className="px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-200">
                    Contact
                </Link>
                <Link href="/product" className="px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-200">
                    Product
                </Link>
                <Link href="/blog" className="px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-200">
                    Blog
                </Link>
            </div>
        </nav>
    );
}