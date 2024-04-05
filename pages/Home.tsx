import React from 'react'
import image from '../public/heyimage.gif';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-row w-screen h-screen items-center justify-center'>
        <div className='flex w-1/2 h-full justify-center items-center'>
          <img src={image} alt="Hey" className='h-2/3 w-2/3' />
        </div>
        <div className='flex flex-col h-full w-1/2 justify-center items-center space-y-8'>
          <div className=' h-auto w-auto space-y-8 '>
            <p className='text-2xl space-y-4'>
              <p className='text-6xl  font-sans font-bold'>Oh!! hello there,</p> I am <span className='font-semibold text-2xl'>Deepansh Gupta.</span><br />
              <ul className='list-disc relative left-12 space-y-2'>
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
            </p>
          </div>
          <div className='flex flex-col space-x-4 justify-center items-center'>
            Connect with me on :
            <div className='flex flex-row space-x-4 pt-4'>
            <div className='h-12 w-20'><a href="https://github.com/devacius" ><FaGithub className='h-full w-full' /></a></div>
            <a href="https://www.linkedin.com/in/deepansh-gupta-1227591b9/"><FaLinkedin className='h-12 w-20'/></a>
            <a href="https://twitter.com/devacius"><FaTwitter className='h-12 w-20'/></a>
            </div>
            </div>
        </div>

      </div>
      <footer> "I am just a good Developer on my journey to be a Great Developer!!"</footer>

    </div>
  )
}
