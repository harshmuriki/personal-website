import React from 'react'
// import Link from 'react-scroll/modules/components/Link.js'
import Section from './section.js'
import Link from "next/link"

export default function AboutMe() {
  return (
    <Section name='About Me'>
      <div className='w-full md:w-5/6 flex flex-col-reverse md:flex-row items-center justify-center gap-20'>
        <div className='text-left leading-10 max-w-prose'>
          <p>Hey there! I&apos;m Harsh Muriki! Welcome to My Life.</p>
          <br></br>
          <p>
            I am currently pursuing a Bachelor&apos;s degree in Computer Science
            at the Georgia Institute of Technology, Atlanta.
          </p>
          <p>
            My interests are in the field of Computer Science especially in
            web development, Robotics and Computer Vision. I have recently been exposed
            to the field of APIs and scripting and have been enjoying it a lot.
          </p>
          <br></br>
          <p className='text-red-500'>
            This website is still under development. Please use this link for more info:
          </p>
          <Link href="https://harshmuriki.wixsite.com/website">
            {/* Make the text red */}
            <a className='text-red-500'>Harsh Muriki Website</a>
            {/* Harsh Muriki Website */}
          </Link>
        </div>
        <img className="w-5/6 md:w-1/3 aspect-square rounded-md border-white border-2" alt="Harsh Muriki" src="/harsh.jpg" />
      </div>
    </Section >
  )
}