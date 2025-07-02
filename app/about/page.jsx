import React from "react";
import PageTitle from "../layout/PageTitle";
import ProfileCard from "@/lib/components/ui/cards/profile-card";

const Page = () => {
    return (
        <>
            <div className="px-40 mt-10">
                <PageTitle title="Get to Know Me"/>
                <div className="flex flex-row gap-10">
                    {/* <div className="w-1/3 h-100 bg-primary-foreground">Profile Card</div> */}
                    <ProfileCard />
                    <div className="w-2/3 h-100 bg-primary-foreground">Info Tabs</div>
                </div>
            </div>
        </>
    )    
}

export default Page