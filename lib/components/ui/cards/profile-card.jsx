import React from 'react'
import { 
    Card, 
    CardDescription,
    CardContent,
} from './card'
import Image from 'next/image'
import { ButtonLink } from '../buttons/button-link'

const ProfileCard = () => {
  return (
    <>
        <Card className="w-full lg:w-1/3 bg-card-foreground h-full   p-0 border-0 rounded-xl hover:shadow-[0_0_8px_2px_rgba(156,205,113,0.25)]">
            {/* profile image */}
            <div className='bg-gradient-fade-up relative overflow-hidden h-70'>
                <Image className="object-contain" fill src="/assets/images/david_profile_image.png" alt="Jed David Profile Image"/>
            </div>
            <CardContent>
                <CardDescription className="text-sm font-light flex flex-col gap-2">
                    <p>
                        Hello! I am an upcoming <span className='text-primary font-bold'>computer science graduate</span> with a strong foundation in software development, algorithms, and``
                        data structures. Proficient in programming languages such as <span className='text-primary font-bold'>Python, C++, and C</span>, with hands-on experience in
                        database management, web, and mobile development.
                    </p>
                    <p>
                        I am currently learning web development using the languages and frameworks such as <span className='text-primary font-bold'>HTML, CSS, JS, ReactJS, NextJS, TailwindCSS</span>
                    </p>
                </CardDescription>
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
                <ButtonLink className="text-white my-4" to="resume/David_CV_w.pdf" name="View CV"/>
            </CardContent>

        </Card>
    </>
  )
}

export default ProfileCard
