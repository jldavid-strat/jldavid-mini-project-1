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

const CertificateCard = ({src, alt, title, description, date_issued, provider, link_to}) => {
  return (
    <>
        <Card className="border flex flex-col lg:flex-row bg-transparent justify-center items-center text-muted-foreground border-green-900">
            <div className='min-w-[100px] h-[100px] lg:ml-8 relative'>
                <Image className='object-cover' fill src={src} alt={alt}/>
            </div>
            <CardContent>
                <CardTitle className="text-xl">{title}</CardTitle>
                <div className="flex flex-row gap-3 text-muted text-xs md:text-sm mb-4">
                    <p>{provider}</p>
                    <p>|</p>
                    <p>Issued on {date_issued}</p>
                </div>
                <CardDescription className="text-sm font-light mb-4">
                    {description}
                </CardDescription>
                <Button variant="outline"><a href={link_to}>See Certificate</a></Button>
            </CardContent>

        </Card>
    </>
  )
}


export default CertificateCard
