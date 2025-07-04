import React from 'react'
import { 
    Card, 
    CardDescription,
    CardTitle,
    CardContent,
} from './card'
import { Badge } from '../badges/badge'
import Image from 'next/image'
import { ButtonLink } from '../buttons/button-link'


const ProjectCard = ({title, description, skills, tags, imgSrc, imgAlt, slug}) => {
  return (
    <>
        <Card className="bg-card-foreground w-[350px] max-w-[350px] h-130 p-0 border-0 gap-2 mt-8 rounded-2xl shadown-sm transition-all duration-300 hover:shadow-[0_0_10px_4px_rgba(152,205,113,0.4)]">
            {/* Card Image */}
            <div className='relative overflow-hidden w-full h-42 rounded-t-xl'>
                <Image 
                    className="object-cover" 
                    fill 
                    src={imgSrc} 
                    alt={imgAlt}
                />
            </div>
            <CardContent className="px-4 flex flex-col flex-grow">
                <CardTitle className="text-muted-foreground text-2xl font-bold mb-2">{title}</CardTitle>
                <CardDescription className="text-sm font-light">
                    {description}
                </CardDescription>
                <div className='mt-2'>
                    <div className='pr-4 flex flex-wrap gap-2 my-2'>
                        {
                            skills.map((name, index) =>(
                                <Badge key={index}>{name}</Badge>
                            ))
                        }
                    </div>
                    <div className='pr-4 flex flex-wrap gap-2 mt-2 mb-4'>
                        {
                            tags.map((name, index) =>(
                                <Badge variant="tags" key={index}>{name}</Badge>
                            ))
                        }
                    </div>
                </div>
                <ButtonLink className="text-white mt-auto mb-4" to={`/projects/${slug}`} name="View Project"/>
            </CardContent>
        </Card>
    </>
  )
}

export default ProjectCard
