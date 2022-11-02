import { ProjectCard } from './experiencecards.js'
import experiencsJSON from '../public/experience.json'
import Section from './section.js'


let projects = JSON.parse(JSON.stringify(experiencsJSON))

export default function Experience() {
  return (
    <Section name='My Experience in this World'>
      <div className='grid grid-cols-1 md:gap-4 sm:gap-2 flex-wrap items-center justify-center'>
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            img={project.images[0]}
            alt={project.alts[0]}
            title={project.title}
            className=''
            subtitle={project.subtitle}
            details={project.test}
            language={project.skills.join(' | ')}
          />
        ))}
      </div>
    </Section>
  )
}
