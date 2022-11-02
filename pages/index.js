import Head from 'next/head'
import Footer from '../components/footer.js'
import Divider from '../components/divider.js'
import AboutMe from '../components/aboutme.js'
import Experience from '../components/experience.js'
import Landing from '../components/landing.js'
import Navbar from '../components/navbar.js'
import Projects from '../components/projects.js'

export default function Home() {
  return (
    <>
      <Head>
        <title>Harsh Muriki | harshmuriki.com</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <meta
          property='og:description'
          content="A personal portfolio website for Harsh Muriki. 
            Comuter Science student at Georgia Tech who is passionate about Robotics in CS.
          "
        />
        <meta
          name='description'
          content="A personal portfolio website for Harsh Muriki. 
            Comuter Science student at Georgia Tech who is passionate about Robotics in CS.
          "
        />
        <meta property='og:title' content='Harsh Muriki | harshmuriki.com' key='title' />
        <meta
          property='og:image'
          content={
            '/harsh.webp'
          }
        />
        <meta property='og:url' content={'https://harshmuriki.com'} />
        <meta name='twitter:card' content='summary_large_image'></meta>
        <meta name='twitter:site' content='@harshmuriki24' />
        <meta name='twitter:creator' content='@harshmuriki24' />
        <meta name='twitter:title' content='Harsh Muriki | harshmuriki.com' />
        <meta
          name='twitter:description'
          content="A personal portfolio website for Harsh Muriki. 
          Comuter Science student at Georgia Tech who is passionate about Robotics in CS.
        "
        />
        <meta
          name='twitter:image'
          content='/harsh.jpg'
        />
        <link rel="canonical" href={'https://harshmuriki.com'} />
        <script type='application/ld+json'>{`
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Harsh Muriki",
  "url": "https://harshmuriki.com",
  "image": "",
  "sameAs": [
    "https://www.linkedin.com/in/harshmuriki/",
    "https://github.com/harshmuriki"
  ],
  "jobTitle": "Student",
  "worksFor": {
    "@type": "Organization",
    "name": "Georgia Institute of Technology",
  }  
}
`}</script>
      </Head>
      <div style={{ scrollBehavior: 'smooth' }} className='bg-slate-900 w-full overflow-x-hidden flex flex-col items-center'>
        <Navbar />
        <Landing />
        <AboutMe />
        <Divider />
        {/* <Experience />
        <Projects /> */}
        <Footer />
      </div>
    </>
  )
}
