import React from "react";
import PageTitle from "../layout/PageTitle";
import { Input } from "@/lib/components/ui/inputs/input";
import { Label } from "@/lib/components/ui/labels/label";
import { Textarea } from "@/lib/components/ui/textareas/textareas";
import { Button } from "@/lib/components/ui/buttons/button";
import Image from "next/image";

const SocialInfoDiv = ({src, alt, name, detail, link_to}) => {
    return (
        <div className="flex my-2 px-2 rounded-xl hover:bg-black ">
            <div className="flex flex-row gap-6 my-2">
                <div className="w-10 h-10 relative">
                    <Image
                        fill
                        src={src}
                        className="object-fill"
                        alt={alt}
                    />
                </div>
                <div>
                    <p className="text-muted text-sm">{name}</p>
                    <a href={link_to}>
                        <p>{detail}</p>
                    </a>
                </div>
            </div>
        </div>
    )
} 

const Page = () => {
    return (
        <>
            <div className="px-40 mt-10 mb-8">
                <PageTitle title="Let's Connect!"/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-muted-foreground px-10 mt-12">
                    <div className="bg-card-foreground p-5 rounded-2xl round shadow-md transition-all duration-300 hover:shadow-[0_0_8px_2px_rgba(156,205,113,0.25)]">
                        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                        <div className="w-full flex flex-col">

                            <SocialInfoDiv 
                                src="/assets/icons/social/linkedin_icon.svg"
                                name="LinkedIn"
                                detail="Jed Laurence David"
                                link_to="https://www.linkedin.com/in/jed-laurence-david/"
                                alt="LinkedIn Profile"
                            />
                            <SocialInfoDiv 
                                src="/assets/icons/others/github_white_icon.svg"
                                name="Github"
                                detail="jldav1d"
                                link_to="https://www.github.com/jldav1d/"
                                alt="Github Profile"
                            />
                            <SocialInfoDiv 
                                src="/assets/icons/social/envelope_icon.svg"
                                name="Email"
                                detail="jedlaurencedavid@gmail.com"
                                link_to="mailto:jedlaurencedavid@gmail.com"
                                alt="Email Icon"
                            />

                        </div>
                    </div>
                    <div className="bg-card-foreground p-5 rounded-2xl round shadow-md transition-all duration-300 hover:shadow-[0_0_8px_2px_rgba(156,205,113,0.25)]">
                        <h3 className="text-xl font-bold mb-4">Send me a message</h3>
                        <form method="post" action="">
                            <div className="my-4">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" placeholder="Enter your email"/>
                            </div>
                            <div className="my-4">
                                <Label htmlFor="name">Name</Label>
                                <Input type="name" placeholder="Enter your name"/>
                            </div>
                            <div className="my-4">
                                <Label htmlFor="message">Message</Label>
                                <Textarea placeholder="Type your message here"/>
                            </div>
                        </form>
                        <div className="mt-8 px-30"><Button variant="outline" className="w-full"> Send </Button></div>
                    </div>
                    </div>
            </div>
        </>
    )    
}

export default Page