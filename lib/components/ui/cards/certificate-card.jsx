import React from 'react'
import { 
    Card, 
    CardTitle,
    CardDescription,
    CardContent,
} from './card'
import { Button } from '../buttons/button'
import { Separator } from '../separator'
import Image from 'next/image'

function CardImage(){
    return (
        <div className='bg-gradient-fade-up relative overflow-hidden min-h-80'>
            <Image className="object-contain" fill src="/assets/images/david_profile_image.png" alt="Jed David Profile Image"/>
        </div>
    )
}

const CertificateCard = () => {
  return (
    <>
        <Card className="w-full border flex flex-row bg-transparent text-muted-foreground border-green-900 rounded-xl">
            <div className='w-full min-h-20 relative overflow-hidden'>
                <Image className='object-contain' fill src="/assets/icons/certificates/cyber_essentials_badge.png" alt="Cybersecurity Essentials"/>
            </div>
            <CardContent>
                <CardTitle className="text-xl">Cybersecurity Essentials</CardTitle>
                <div className="flex flex-row gap-3 text-muted text-sm mb-4">
                    <p>Cisco</p>
                    <p>|</p>
                    <p>Issued on Apr 2023</p>
                </div>
                <CardDescription className="text-sm font-light mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis praesentium, numquam voluptate provident nihil facere, inventore deserunt itaque, veniam facilis delectus iure corporis culpa. Reprehenderit iste molestiae sapiente odio reiciendis.
                </CardDescription>
                <Button variant="outline">See Certificate</Button>
            </CardContent>

        </Card>
    </>
  )
}

export default CertificateCard
