import React from "react";
import PageTitle from "../layout/PageTitle";
import ProjectCard from "@/lib/components/ui/cards/project-card";
import { projectDetail } from "@/app/shared/projectDetails"



const Page = () => {
    return (
        <>
            <div className="mt-4 mb-8">
                <PageTitle 
                    title="Some of my previous works"
                />
                <div className="w-full flex flex-wrap gap-8 justify-center">
                    {
                        Object.values(projectDetail).map((project, index) => (
                            <ProjectCard 
                                key={index}
                                title={project.title}
                                description={project.description}
                                skills={project.skills}
                                tags={project.tags}
                                imgSrc={`${project.imgDir}/preview.png`}
                                imgAlt={`${project.slug} preview`}
                                slug={project.slug}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )    
}

export default Page