import { ButtonLink } from "@/lib/components/ui/buttons/button-link"
import Image from "next/image"

export default function Home() {
  return (
    <>
    <div className="flex flex-col mt-20 md:flex-row md:justify-center lg:mx-40 xl:mx-50 gap-10">
        <div className="flex flex-col items-start gap-4 font-manrope text-white h-full max-w-[500px]">
          <h1 >
            <span className="text-2xl md:text-4xl pb-2 block">Hi, I'm</span>
            <span className="text-5xl md:text-7xl lg:text-8xl font-black "><span className="text-primary">Jed</span>David</span>
          </h1>
          <p className="pr-4 subtitle-gray text-lg">
            An aspiring software developer whole likes <span className="text-primary font-bold">building random programs</span>, problem solving, and has a strong interest in networking and cybersecurity and ... <span className="text-xl">🎮</span> <span className="italic">also an avid gamer</span>.
          </p>
          <div>
              <ButtonLink to="https://www.linkedin.com/in/jed-laurence-david/" name="LinkedIn"/>
              <ButtonLink to="https://www.github.com/jldav1d/" name="GitHub"/>
              <ButtonLink to="mailto:jedlaurencedavid@gmail.com" name="Email"/>

          </div>
        </div>
      <div className="w-[330px] h-[330px] shrink-0 relative ">
        <Image fill className="object-contain" src="/assets/gifs/home_page_animation.gif" alt="Home page animation"/>
      </div>
    </div>
    </> 
  ) 
}
