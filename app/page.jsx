
export default function Home() {
  return (
    <>
    <div className="flex flex-row pt-30 px-40 gap-20">
        <div className="flex flex-col items-start font-manrope text-white">
          <h1 className="text-2xl pb-4">Hi, I'm</h1>
          <p className="text-8xl font-black max-w-fit"><span className="text-green-800">Jed</span>David</p>
          <p className=" pt-4 subtitle-gray text-lg">
            An aspiring software developer who likes problem-solving,
            with a keen interest in networks and cybersecurity,
            and avid gamer
          </p>
        </div>
      <div className="w-100 h-100 bg-green-400">
        animated graphic
      </div>
    </div>
    </>
  ) 
}
