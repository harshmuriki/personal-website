import { ProjectCard } from './cards.js'
import projectsJSON from '../public/projects.json'
import Section from './section.js'


let projects = JSON.parse(JSON.stringify(projectsJSON))

export default function Projects() {
    return (
        <Section name='Projects'>
            <div className='grid grid-cols-1 md:gap-4 sm:gap-2 flex-wrap items-center justify-center'>
                {projects.map(project => (
                    <ProjectCard
                        key={project.title}
                        img={project.images[0]}
                        alt={project.alts[0]}
                        title={project.title}
                        className=''
                        subtitle={project.subtitle}
                        details1={project.details1}
                        details2={project.details2}
                        details3={project.details3}
                        language={project.skills.join(' | ')}
                    />
                ))}
            </div>
        </Section>
    )
}
