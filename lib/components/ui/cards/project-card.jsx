import React from 'react'
import { 
    Card, 
    CardDescription,
    CardContent,
} from './card'
import { Button } from '../buttons/button'
import { Badge } from '../badges/badge'
import Image from 'next/image'


function CardImage(){
    return (
        <div className='bg-gradient-fade-up relative overflow-hidden min-h-80'>
            <Image className="object-cover" fill src="/assets/images/projects/jemerators/JEMerators_1.png" alt="JEMerators Screenshot"/>
        </div>
    )
}

const ProjectCard = () => {
  return (
    <>
        <Card className="bg-card-foreground max-h-170 p-0 border-0 rounded-5xl">
            <CardImage/>
            <CardContent>
                <CardDescription className="text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis praesentium, numquam voluptate provident nihil facere, inventore deserunt itaque, veniam facilis delectus iure corporis culpa. Reprehenderit iste molestiae sapiente odio reiciendis.</CardDescription>
                <div className='flex flex-wrap gap-2 my-4'>
                    <Badge>Python</Badge>
                    <Badge className="bg-red-600">Streamlit</Badge>
                </div>
                <div className='flex flex-wrap gap-2 my-4'>
                    <Badge variant="tags">Data Analytics</Badge>
                    <Badge variant="tags">Data Visualization</Badge>
                    <Badge variant="tags">AI</Badge>
                </div>
                <Button className="text-white my-4" variant="outline">View Project</Button>
            </CardContent>

        </Card>
    </>
  )
}

export default ProjectCard
