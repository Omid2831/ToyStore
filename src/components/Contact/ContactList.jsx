import React from 'react'

const ContactList = () => {
  return (
    <section className='w-full bg-[#f8f9fa] py-16 px-6 md:px-20 lg:mt-15'>
      <div className='max-w-6xl mx-auto'>
        {/** Header Section */}
        <header className='mb-10'>
          <h2 className='text-3xl md:text-4xl font-normal text-gray-800 mb-4'>Contact Us</h2>
          <p className='text-gray-600 max-w-5xl leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </header>

        {/** Content Grid */}
        <div className='flex flex-col md:flex-row gap-10 items-start'>
          
          {/** Left: Placeholder Box (Map) */}
          <div className='w-full md:w-3/5 bg-[#dee2e6] h-64 md:h-80 rounded-sm'>
            {/* This represents the gray box in your image */}
          </div>

          {/** Right: Contact Info */}
          <div className='w-full md:w-2/5 flex flex-col gap-8'>
            
            {/** Location */}
            <div>
              <h3 className='text-xl font-medium text-gray-800 mb-2'>Our Location</h3>
              <div className='text-gray-600 space-y-1'>
                <p>ToyStore</p>
                <p>123 Play Street</p>
                <p>Fun City, FC 12345</p>
              </div>
            </div>

            {/** Contact Details */}
            <div>
              <h3 className='text-xl font-medium text-gray-800 mb-2'>Contact</h3>
              <div className='text-gray-600 space-y-1'>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@toystore.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactList