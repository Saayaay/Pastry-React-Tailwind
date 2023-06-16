// an hero image = une bannière in French

import pastryVid from '../assets/pastryVid.mp4';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={pastryVid} autoPlay loop muted/>
    </div>
  )
}

export default Hero