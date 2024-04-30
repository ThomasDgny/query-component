import React from 'react'

export default function InputUrl() {
  return (
    <input
    type="url"
    name="url"
    required
    placeholder="Enter URL"
    className="block w-full rounded-md border-0 py-1.5 pl-4 pr-28 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  />
  )
}
