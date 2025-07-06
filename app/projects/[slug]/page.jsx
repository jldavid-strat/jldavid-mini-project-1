import PageTitle from "@/app/layout/PageTitle"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/lib/components/ui/carousels/carousel"
import { Badge } from "@/lib/components/ui/badges/badge"
import Image from "next/image"
import fs from 'fs'
import path from 'path'
import { projectDetail } from "@/app/shared/projectDetails"


function getImagesFromDir(dir) {
  const postsDir = path.join(process.cwd(), dir)
  return fs.readdirSync(postsDir).filter((file) => file.endsWith('.png'))
}

export default async function ProjectDetailPage({ params }) {
    const slug = (await params).slug
    const project = projectDetail[slug]
    const carouselImgs = getImagesFromDir(`public/${project.imgDir}`)
    console.log(carouselImgs)

    return (
    <div className="mt-10 mb-8">
        <PageTitle title={project.title}/>
        {/* skills */}
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2 justify-center items-center">
                    {
                        project.skills.map((name, index) =>(
                            <Badge key={index} className="text-md">{name}</Badge>
                        ))
                    }
                </div>
                <div className="flex flex-wrap gap-2 justify-center items-center">
                    {
                        project.tags.map((name, index) =>(
                            <Badge key={index} variant="tags" className="text-sm">{name}</Badge>
                        ))
                    }
                </div>
            </div>
            <div className="w-full h-auto flex justify-center mt-2">
                <Carousel className="w-190">
                    <CarouselContent>
                        {carouselImgs.map((filename, index) => (
                            <CarouselItem key={index}>
                                <Image
                                    src={`/assets/images/projects/${project.slug}/${filename}`}
                                    width={900}
                                    height={900}
                                    alt={`${project.slug} Image ${index +1}`}
                                    priority
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="invisible md:visible" variant="default"/>
                    <CarouselNext className="invisible md:visible" variant="default" />
                </Carousel>
            </div>
            <div className="lg:px-60 mt-4 text-muted-foreground">
                <div className="flex justify-center text-2xl font bold mb-4">
                    <p className="border border-green-400  rounded-xl p-2">Role: {project.role}</p>
                </div>
                    <p>{project.extendedDescription}</p>
                    
                    <div className="mt-4">
                        <h4 className="text-2xl text-primary font-bold">Contributions</h4>
                        <ul className="pl-10 list-disc">
                            {
                                project.contributions.map((name, index) => (
                                    <li key={index}>{name}</li>
                                ))
                            }
                        </ul>
                    </div>     
                </div>
        </div>
    </div>
  )
}