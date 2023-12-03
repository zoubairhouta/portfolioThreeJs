import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
     <p className='cta-text'>Have a Project in Mind?  <br className='sm:block hidden'/>
     Let's Build something together
        </p>
        <Link to="/contact" className="btn">Contact</Link>
    
    </section>
  )
}

export default CTA