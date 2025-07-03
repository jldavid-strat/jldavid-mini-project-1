import React from "react";
import PageTitle from "../layout/PageTitle";
import { Input } from "@/lib/components/ui/inputs/input";
import { Label } from "@/lib/components/ui/labels/label";
import { Textarea } from "@/lib/components/textareas/textareas";
import { Button } from "@/lib/components/ui/buttons/button";
import Image from "next/image";

const SocialInfoDiv = ({src, alt, name, detail, link_to}) => {
    return (
        <div className="group flex gap-8 my-2">
            <div className="flex flex-row border border-none group-hover:border-b-slate-800 gap-8 my-2">
                <div className="w-10 h-10 relative overflow-hidden bg-secondary rounded-full">
                    <Image
                        fill
                        src={src}
                        className="object-cover"
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
            <div className="px-40 mt-10">
                <PageTitle title="Let's Connect!"/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-muted-foreground px-10">
                    <div className="bg-card-foreground p-5 rounded-2xl">
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
                                src="/assets/icons/others/github_icon.svg"
                                name="Github"
                                detail="jldav1d"
                                link_to="https://www.github.com/jldav1d/"
                                alt="Github Profile"
                            />

                        </div>
                    </div>
                    <div className="bg-card-foreground p-5 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">Send me a message</h3>
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
                        <div className="mt-8 px-30"><Button variant="outline" className="w-full"> Send </Button></div>
                    </div>
                    
                </div>
            </div>
        </>
    )    
}

export default Page