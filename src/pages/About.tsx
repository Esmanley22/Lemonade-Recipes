import SlideAlert from '../components/SlideAlert'
import Background from '../assets/images/stand.jpg'



function About() {
  return (
    <div
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
      <SlideAlert />
    </div>
  )
}

export default About
