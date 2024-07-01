import { heroBg } from "../../../assets"

const Hero = () => {
  return (
    <div className="flex  justify-evenly h-screen ">
      <div className="w-1/2 bg-purple-300 place-content-center">
        <div className="mx-auto w-fit flex flex-col items-start gap-y-4">
          <div className="flex flex-col text-5xl">
            <span className="font-thin">Best Design of</span>
            <span className="font-bold">Furniture Collections</span>
          </div>
          <p className="w-80 ">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

          <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg text-lightPurple uppercase font-bold">Discover</button>
        </div>
      </div>
      <div className="w-1/2 bg-purple-200">
        <img src={heroBg} alt="Hero background" className="object-contain w-full h-full" />
      </div>
    </div>
  )
}

export default Hero