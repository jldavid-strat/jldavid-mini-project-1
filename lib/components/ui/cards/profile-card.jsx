import React from 'react'
import { 
    Card, 
    CardTitle,
    CardDescription,
    CardContent,
} from './card'
import { Button } from '../buttons/button'
import Image from 'next/image'

function CardImage(){
    return (
        <div className='bg-gradient-fade-up relative overflow-hidden min-h-80'>
            <Image className="object-contain" fill src="/assets/images/david_profile_image.png" alt="Jed David Profile Image"/>
        </div>
    )
}

const ProfileCard = () => {
  return (
    <>
        <Card className="w-1/3 bg-card-foreground min-h-130 p-0 border-0 rounded-xl">
            <CardImage/>
            <CardContent>
                <CardDescription className="text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis praesentium, numquam voluptate provident nihil facere, inventore deserunt itaque, veniam facilis delectus iure corporis culpa. Reprehenderit iste molestiae sapiente odio reiciendis.</CardDescription>
                <section className='grid grid-cols-2 gap-4 my-4 text-muted-foreground text-[0.8em]'>
                    <div>
                        <p className='text-muted'>Name</p>
                        <p>Jed Laurence J. David</p>
                    </div>
                    <div>
                        <p className='text-muted'>Location</p>
                        <p>San Andres, Manila</p>
                    </div>
                    <div>
                        <p className='text-muted'>Email</p>
                        <p>jedlaurencedavid@gmail.com</p>
                    </div>
                </section>
                <Button className="text-white my-4" variant="outline">Download CV</Button>
            
            </CardContent>

        </Card>
    </>
  )
}

export default ProfileCard
