import React from 'react'

function ContactForm() {
  return (
    <div className='p-4 rounded-full bg-gray-400 w-fit'>
      <form action="" method='get' className='flex flex-col gap-2 m-4'>
      
        <input type="text" placeholder='Your Full Name' className='' />
        
        <input type="text" placeholder='Your Email'/>
        
        <input type="text" placeholder='Subject' />
        
        <input type="text" placeholder='Message' />
        <button>
            Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm
