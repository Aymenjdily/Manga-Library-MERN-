import React from 'react'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <div className='bg-gray-900 text-gray-400 py-6 text-center'>
            <p>
                &copy; All Right Reserved {year} - ZINEMANGA
            </p>
        </div>
    )
}

export default Footer