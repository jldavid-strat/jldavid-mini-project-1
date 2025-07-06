import React from "react";
import PageTitle from "../layout/PageTitle";
import ProfileCard from "@/lib/components/ui/cards/profile-card";
import CertificateCard from "@/lib/components/ui/cards/certificate-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/components/ui/tabs/tabs"
import { Badge } from "@/lib/components/ui/badges/badge";

const TechCard = ({ name, iconSrc}) => {
  return (
    <div className={`w-25 h-auto group bg-card-foreground border border-green-900 shadow-md hover:scale-110 hover:border-green-700 transition-all duration-400 hover:shadow-[inset_0_0_20px_rgba(34,197,94,0.15)]`}>
    <div className="flex flex-col items-center justify-center p-2">
        <img
          src={iconSrc}
          alt={`${name} icon`}
          className="w-10 h-10 object-contain"
        />
        <span className="text-sm font-medium group-hover:text-white transition-colors duration-300 text-center mt-2">
            {name}
        </span>
    </div>
</div>
  );
};

const progLangs = [
    { 
        name: "Python", 
        iconSrc: "/assets/icons/prog-lang/python_icon.svg",
    },
    { 
        name: "HTML", 
        iconSrc: "/assets/icons/prog-lang/html5_icon.svg",
    },
    { 
        name: "CSS", 
        iconSrc: "/assets/icons/prog-lang/css3_icon.svg",
    },
    { 
      name: "JavaScript", 
      iconSrc: "/assets/icons/prog-lang/js_icon.svg",
    },
    { 
      name: "C", 
      iconSrc: "/assets/icons/prog-lang/c_icon.svg",
    },
    { 
      name: "C++", 
      iconSrc: "/assets/icons/prog-lang/cplusplus_icon.svg",
    },
    { 
      name: "Java", 
      iconSrc: "/assets/icons/prog-lang/java_icon.svg",
    },
    { 
      name: "PHP", 
      iconSrc: "/assets/icons/prog-lang/php_icon.svg",
    },
    { 
      name: "Dart", 
      iconSrc: "/assets/icons/prog-lang/dart_icon.svg",
    },
    { 
      name: "MySQL", 
      iconSrc: "/assets/icons/prog-lang/mysql_icon.svg",
    },
    { 
      name: "PostgresSQL", 
      iconSrc: "/assets/icons/prog-lang/postgresql_icon.svg",
    },

  ];

const frameworks = [
    { 
        name: "TailwindCSS", 
        iconSrc: "/assets/icons/frameworks/tailwindcss_icon.svg",
    },
    { 
        name: "Laravel", 
        iconSrc: "/assets/icons/frameworks/laravel_icon.svg",
    },
    { 
        name: "Flutter", 
        iconSrc: "/assets/icons/frameworks/flutter_icon.svg",
    },
];

const otherTech = [
    { 
        name: "Git", 
        iconSrc: "/assets/icons/others/git_icon.svg",
    },
    { 
        name: "Github", 
        iconSrc: "/assets/icons/others/github_white_icon.svg",
    },

]

const Page = () => {
    return (
        <>
            <div className="mb-8 lg:mx-20 xl:mx-25">
                <PageTitle title="Get to Know Me"/>
                <div className="flex flex-col md:flex-row justify-between w-full gap-10">
                    <ProfileCard />
                    <div className="flex w-full lg:w-2/3 flex-col gap-6">
                        <Tabs defaultValue="skills">
                            <TabsList className={"w-full flex flex-1 text-xs lg:text-lg"}>
                                <TabsTrigger className={"p-1"} value="skills">Technical Skills</TabsTrigger>
                                <TabsTrigger className={"p-1"} value="experience">Experience</TabsTrigger>
                                <TabsTrigger className={"p-1"} value="certificates">Certificates</TabsTrigger>
                            </TabsList>
                            <TabsContent value="skills">
                                <div className="bg-card-foreground w-full h-auto p-4 text-muted-foreground">
                                    <h3 className="text-xl mb-4">Programming Languages</h3>
                                    <div className="flex flex-wrap">
                                        {progLangs.map((tech, index) => (
                                            <TechCard
                                                key={index}
                                                name={tech.name}
                                                iconSrc={tech.iconSrc}
                                                bgColor={tech.bgColor}
                                            />
                                        ))}
                                    </div>

                                    <h3 className="text-xl my-4">Libraries & Frameworks</h3>
                                    <div className="flex flex-row flex-wrap">
                                        {frameworks.map((tech, index) => (
                                            <TechCard
                                            key={index}
                                            name={tech.name}
                                            iconSrc={tech.iconSrc}
                                            bgColor={tech.bgColor}
                                            />
                                        ))}
                                    </div>

                                    <h3 className="text-xl my-4">Other</h3>
                                    <div className="flex flex-row flex-wrap">
                                        {otherTech.map((tech, index) => (
                                            <TechCard
                                            key={index}
                                            name={tech.name}
                                            iconSrc={tech.iconSrc}
                                            bgColor={tech.bgColor}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="experience">
                                <div className="bg-card-foreground w-full h-auto p-4 text-muted-foreground rounded-xl">
                                    <h3 className="font-bold"> Report Analyst Intern - Automation</h3>
                                    <p className="text-sm text-gray-400">S.P Madrid & Associates</p>
                                    <div className="flex gap-2 my-2">
                                        <Badge className='bg-green-700'>Python</Badge>
                                        <Badge className='bg-red-700'>UiPath</Badge>
                                        <Badge className='bg-blue-700'>VB</Badge>
                                    </div>
                                    {/* TODO add tool used as badges */}
                                    
                                    <ul className="list-disc">
                                        <div className="text-sm pl-8 text-muted">
                                            <li>Developed programs that automate data extraction and report generation utilizing UiPath</li>
                                            <li>Developed python scripts to automate different types of payment agreement documents.Streamlined the business process to make data input easier to verify and manipulate.</li>
                                        </div>
                                    </ul>
                                </div>
                            </TabsContent>
                            <TabsContent value="certificates">  
                                <div className="bg-card-foreground h-auto p-4 text-muted-foreground">
                                    <CertificateCard
                                        src="/assets/icons/certificates/cyber_essentials_badge.png"
                                        alt="Cybersecurity Essentials Certificate Image"
                                        provider="Cisco"
                                        date_issued="Apr 2023"
                                        title="Cybersecurity Essentials"
                                        description="Covers core cybersecurity concepts including network security, cryptography, system vulnerabilities, and cyberattack methods. Prepares learners to understand modern threats and develop defensive strategies across various digital environments."
                                        link_to="/"
                                    />
                                    <CertificateCard
                                        src="/assets/icons/certificates/python_essentials_badge.png"
                                        alt="Python Essentials Certificate Image"
                                        provider="Cisco"
                                        date_issued="Jun 2024"
                                        title="Python Essentials"
                                        description="A beginner-focused course Python syntax, data types, control flow, functions, and basic object-oriented programming. It builds problem-solving skills through hands-on coding exercises and practical programming tasks"
                                        link_to="/"
                                    />
                                    <CertificateCard
                                        src="/assets/icons/certificates/isc2_candidate_badge.png"
                                        alt="ISC2 CC Certificate Image"
                                        provider="ISC2"
                                        date_issued="Apr 2023"
                                        title="Certified in Cybersecurity Passer"
                                        description="Provisionally passed an entry-level certification covering cybersecurity fundamentals, threat management, risk mitigation, incident response, and security principles, ideal for beginners seeking foundational knowledge and a globally recognized credential."
                                        link_to="/"
                                    />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )    
}


export default Page