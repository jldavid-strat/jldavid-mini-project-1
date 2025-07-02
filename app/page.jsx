import { ButtonLink } from "@/lib/components/ui/buttons/button-link"

export default function Home() {
  return (
    <>
    <div className="flex flex-row pt-30 px-40 gap-20">
        <div className="flex flex-col items-start gap-5 font-manrope text-white">
          <h1 >
            <span className="text-2xl pb-4 block">Hi, I'm</span>
            <span className="text-8xl font-black "><span className="text-primary">Jed</span>David</span>
          </h1>
          <p className=" pt-4 subtitle-gray text-lg">
            An aspiring software developer who likes problem-solving,
            with a keen interest in networks and cybersecurity,
            and avid gamer
          </p>
          <div>
              <ButtonLink to="https://linkedin.com" name="LinkedIn"/>
              <ButtonLink to="https://github.com" name="GitHub"/>
              <ButtonLink to="https://gmail.com" name="Email"/>

          </div>
        </div>
      <div className="w-200 h-100 bg-primary">
        animated graphic
      </div>
    </div>
    </>
  ) 
}
