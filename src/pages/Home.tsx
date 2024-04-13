import image from "../../public/heyimage.gif";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <div className='flex flex-col py-10 h-full w-screen md:flex-row justify-center items-center'>
        <div className='flex w-full m-2 md:w-1/2 h-full justify-center items-center '>
          <img src={image} alt="Hey" className='h-2/3 w-2/3' />
        </div>
        <div className='flex flex-col w-full m-2 md:w-1/2 justify-center items-center md:items-start space-y-8'>
          <div className='w-full md:w-11/12 space-y-8 text-center md:text-left'>
            <div className='space-y-2 flex flex-col'>
              <p className='text-5xl md:text-6xl font-sans font-bold my-4'>Oh!! hello there,</p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-x-5 items-center">
                <p className="text-3xl md:text-4xl font-sans"> Myself </p>
                <p className='font-semibold text-5xl'>Deepansh Gupta.</p>
              </div>
              <ul className='list-disc relative left-0 md:left-12 space-y-2 text-lg md:text-2xl'>
                <li>
                  A Full Stack Developer 👨‍💻
                </li>
                <li>
                  A Blockchain Developer 📄
                </li>
                <li>
                  Gym Lover  🏋️‍♂️
                </li>
                <li>
                  Anime Lover 🤓
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col  justify-center items-center md:items-start w-full md:w-4/6'>
            <p className='text-lg md:text-xl'>Connect with me:</p>
            <div className='flex flex-row space-x-4 pt-4'>
              <a href="https://github.com/devacius" ><FaGithub className='h-8 w-8 md:h-12 md:w-12' /></a>
              <a href="https://www.linkedin.com/in/deepansh-gupta-1227591b9/"><FaLinkedin className='h-8 w-8 md:h-12 md:w-12'/></a>
              <a href="https://twitter.com/devacius"><FaTwitter className='h-8 w-8 md:h-12 md:w-12'/></a>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-xs md:text-base text-center"> "I am just a good Developer on my journey to be a Great Developer!!"</footer>
    </div>
  )
}
