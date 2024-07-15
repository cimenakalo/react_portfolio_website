import  React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className='cta'>
      <a href="{cv}" download className='btn'>הורד קורות חיים</a>
      <a href="#contact" className='btn btn-primary'>בוא נדבר</a>
    </div>
  )
}

export default CTA
