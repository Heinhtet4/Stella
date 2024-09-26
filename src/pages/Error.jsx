import React from 'react'
import Navigation from '../components/navigation/Navigation'
import { FiAlertTriangle, FiSearch } from 'react-icons/fi'
import { FcBrokenLink } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <div className="flex flex-col items-center">
        {/* Icon */}
        <FcBrokenLink className="text-9xl mb-8" />

        {/* Error Code */}
        <h1 className="text-6xl font-bold mb-4">404</h1>

        {/* Error Message */}
        <p className="text-lg mb-4 text-gray-500">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Back to Home Button */}
        <Link to={"/"}
          className="btn btn-primary"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
    </>
  )
}

export default Error