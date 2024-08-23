import React from 'react'
import ProjectsCard from '././ProjectsCard/ProjectsCard';

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="SOCIAL MEDIA CLONE"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={'https://adithyagundlapalli.github.io/personalportfolio/img/profilepic.png'}
                />
                <ProjectsCard
                    title="E-commerce Website"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={'https://adithyagundlapalli.github.io/personalportfolio/img/profilepic.png'}
                />
                <ProjectsCard
                    title="Chatting App"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={'https://adithyagundlapalli.github.io/personalportfolio/img/profilepic.png'}
                />

            </div>
        </section>
    );
}

export default Projects