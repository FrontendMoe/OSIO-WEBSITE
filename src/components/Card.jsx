import discoverSideVid from '../assets/discoverSideVid.png'
import video from '../assets/discoverSideVid.mp4'
import { closeX, vidCorner } from '../assets/icons'
function Card({
  vid = video,
  title = (
    <>
      Discover <br />
      Local <br />
      Programs
    </>
  ),
  showCorner = false,
  desc = ' olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.o  olor sit',
}) {
  return (
    <div className="relative rounded-tl-[60px] rounded-br-[60px]  h-[350.014px] overflow-hidden w-[298.84px]">
      <div className="absolute flex p-4 flex-col justify-between top-0 left-0 w-full h-full ">
        <video
          src={vid}
          muted={true}
          loop={true}
          playsInline
          autoPlay
          className="object-cover absolute top-0  h-full w-full left-0"
        ></video>
        {showCorner && (
          <div className="absolute  bottom-0 -rotate-[20deg] -right-[70px] z-10">
            {vidCorner}
          </div>
        )}

        <div className="relative h-fit -mt-[40px] z-10 flex justify-end">
          <div className="w-fit h-fit -rotate-[30deg]">{closeX}</div>
        </div>
        <div className=" relative space-y-4 text-start">
          <p className="text-[#E4E0D4] text-[34px] font-[900] leading-[30px]">
            {title}
          </p>
          <p className="font-[500] w-[75%] text-[11px] text-[#E4E0D4]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
