import phoneBg from '../assets/phoneBg.svg'

import phoneShadow from '../assets/shadow.svg'

import vid from '../assets/vid.png'
import firstPhoneVid from '../assets/firstPhoneVid.mp4'
import phoneVid from '../assets/phoneVid.svg'
import phoneTop from '../assets/phoneTop.svg'
const Phone = ({
  video = firstPhoneVid,
  width = 115,
  high = 100,
  bottomShadow = true,
  noShadow = false,
  top = 0,
  left = 0,
}) => {
  return (
    <div className="relative  overflow-visible mx-auto w-[375.436px] h-fit z-10">
      {!noShadow &&
        (bottomShadow ? (
          <img
            src={phoneShadow}
            width={'495px'}
            height={'772px'}
            style={{ filter: 'blur(45px)' }}
            className="absolute shadow  w-[495px] h-[772px]  left-0 z-0 -bottom-[200px] "
            alt=""
          />
        ) : (
          <div className="w-full blur-3xl h-full absolute top-0 bg-black"></div>
        ))}
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
      <img src="" alt="" />
      <div className="top-0 h-full w-fit mx-auto relative rounded-[50px] overflow-hidden z-20">
        <img src={phoneVid} className="w-[350px] relative z-0" alt="" />
        <div className="absolute top-0 w-full h-[40px] bg-black z-20"></div>
        <video
          src={video}
          alt=""
          loop
          autoPlay
          style={{
            height: high + '%',
            width: width + '%',
            top: top + '%',
            left: left + '%',
          }}
          className={`absolute top-0 left-0   z-0 rounded-[50px] p-2 object-cover`}
        ></video>
      </div>
    </div>
  )
}

export default Phone
