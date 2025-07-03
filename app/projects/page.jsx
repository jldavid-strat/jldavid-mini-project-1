import React from "react";
import PageTitle from "../layout/PageTitle";
import ProjectCard from "@/lib/components/ui/cards/project-card";


const Page = () => {
    return (
        <>
            <div className="px-40 mt-10">
                <PageTitle 
                    title="Some of my previous works"
                />
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </div>
        </>
    )    
}

export default Page