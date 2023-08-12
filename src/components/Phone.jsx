import phoneBg from '../assets/phoneBg.svg'

import phoneShadow from '../assets/shadow.svg'

import vid from '../assets/vid.png'
import phoneVid from '../assets/phoneVid.svg'
import phoneTop from '../assets/phoneTop.svg'
const Phone = ({ video = vid }) => {
  return (
    <div className="relative  overflow-visible mx-auto  w-[375.436px] h-fit z-10">
      <div className="w-full blur-2xl h-full absolute top-0 bg-black"></div>
      <img
        src={phoneTop}
        className="absolute top-0 w-1/2 left-1/2 -translate-x-1/2 z-30"
        alt=""
      />
      <img
        src={phoneBg}
        alt=""
        className="w-[375.436px] absolute top-1/2 -translate-y-1/2 z-10"
      />
      <div className="top-0  h-full w-fit mx-auto relative rounded-[50px] overflow-hidden z-20">
        <img src={phoneVid} className="w-[350px]" alt="" />
        <img
          src={video}
          alt=""
          className="absolute top-0 left-0 w-full rounded-[50px] p-2 h-full"
        />
      </div>
    </div>
  )
}

export default Phone
