import React from 'react'

const ContactList = () => {
  return (
    <section id="contact" className='w-full bg-[#f8f9fa] py-16 px-6 md:px-20 lg:mt-15'>
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

          {/** Left: Map */}
          <div className='w-full md:w-3/5 h-64 md:h-80 rounded-sm overflow-hidden'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.5983142456!2d5.1214!3d52.0907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66f5cf0744629%3A0xd26462bf1d7a8b92!2sUtrecht%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ToyStore Location"
            />
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