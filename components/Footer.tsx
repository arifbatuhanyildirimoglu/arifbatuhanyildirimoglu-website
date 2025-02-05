export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Arif Batuhan Yıldırımoğlu. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/arifbatuhanyildirimoglu/" className="hover:text-blue-400 transition-colors duration-300">
            LinkedIn
          </a>
          <a href="https://github.com/arifbatuhanyildirimoglu" className="hover:text-blue-400 transition-colors duration-300">
            GitHub
          </a>
          <a href="https://x.com/ABatuhanY" className="hover:text-blue-400 transition-colors duration-300">
            X
          </a>
        </div>
      </div>
    </footer>
  )
}

