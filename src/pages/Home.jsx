import firstSecVid from '../assets/FirstSecVid.png'
import Join from '../components/Join'

import logo from '../assets/blackLogo.svg'
import playStore from '../assets/PlayStore.png'
import appStore from '../assets/AppStore.svg'
import vectorOne from '../assets/HomeVector.svg'
import vectorTwo from '../assets/HomeVector2.svg'
import vectorThree from '../assets/vectorThree.svg'
import vectorFour from '../assets/vectorFour.svg'
import discoverSideVid3 from '../assets/discoverSideVid3.png'
import discoverSideVid from '../assets/discoverSideVid.png'
import Phone from '../components/Phone'
import videoTwo from '../assets/videoTwo.png'
import videoThree from '../assets/videoThree.png'
import benifits from '../assets/Benifits.png'
import { BsArrowRight } from 'react-icons/bs'
import ImageBolls from '../components/ImageBolls'
import Coaches from '../assets/Coaches.png'
import Parents from '../assets/parents.png'
import TeamMission from '../assets/TeamMisson.png'
import bgVideo from '../assets/bgVideo.mp4'
import { useEffect } from 'react'
function Home() {
  const playAllVideos = () => {
    const videos = document.querySelectorAll('video')
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i]
      video.muted = true // Force mute the video
      video.addEventListener('ended', () => {
        video.currentTime = 0 // Reset the video to the beginning
        video.play() // Pause the video when it ends
      })

      video.play()
    }
  }
  useEffect(() => {
    playAllVideos()
  }, [])
  return (
    <div className="overflow-x-hidden">
      <section className="relative h-fit min-h-screen overflow-hidden">
        <div>
          <video
            src={bgVideo}
            alt="firstSecVid"
            muted={true}
            loop={true}
            playsInline
            className="w-full h-[80%] object-cover absolute top-0 left-0"
          ></video>
        </div>
        <div className="  pb-[200px] relative z-10 items-center pt-[300px]">
          <div className="space-y-[61px] items-center relative flex flex-col z-10">
            {/* Mobile Phone */}
            <Phone></Phone>
            <img src={logo} alt="" />
            <p className="mdText w-[719px] text-center">
              Create a profile in OSIO to engage the cheer community, offer
              coaching services to our network of athletes and create a profile{' '}
            </p>
            <div className="flex">
              <img src={playStore} alt="" />
              <img src={appStore} alt="" />
            </div>
          </div>
          <div className="absolute -space-y-72 -bottom-[50%] left-0 w-full">
            <img src={vectorTwo} alt="" className=" w-full" />
            <img
              src={vectorOne}
              alt=""
              className="rotate-180 w-full   left-0 object-fill z-0"
              style={{ transform: 'scaleY(-1)' }}
            />
          </div>
        </div>
      </section>
      <section className="flex text-center space-y-[50px] bg-[#EBE1C7] flex-col items-center py-[150px]">
        <p className="sectionTitle">
          Resources <br />& Community For <br /> CheerAthletes.
        </p>
        <p className="mdText w-[750px]">
          Create a profile in OSIO to engage the cheer community, offer coaching
          services to our network of{' '}
        </p>
        <Phone video={videoTwo}></Phone>
      </section>
      <section className="flex  text-center space-y-[50px] bg-[#DED1AE] flex-col items-center py-[150px]">
        <p className="sectionTitle">
          Share your Experiences <br /> with Coaches & Programs
        </p>
        <p className="mdText pb-[150px]">
          Create a profile in OSIO to engage the cheer <br /> community, offer
          coaching services to our network of{' '}
        </p>
        <div className="w-fit  relative ">
          <img
            src={discoverSideVid}
            alt=""
            className="absolute scale-105 -right-[240px] -top-[50px]"
          />
          <img
            src={discoverSideVid}
            alt=""
            className="absolute  scale-105  -right-[240px] top-[270px]"
          />
          <img
            src={discoverSideVid3}
            alt=""
            className="absolute  scale-105  -left-[240px] overflow-visible -top-[50px]"
          />
          <img
            src={discoverSideVid3}
            alt=""
            className="absolute  scale-105  -left-[240px] overflow-visible top-[270px]"
          />
          <Phone video={videoThree} bottomShadow={false}></Phone>
        </div>
      </section>
      <section className="px-[200px] relative  py-[150px] bg-[#FFF3D8]">
        <div className="space-y-[150px] relative z-10">
          <div className="flex justify-between ">
            <div className="space-y-[40px] w-[500px]">
              <p className="sectionTitle">
                Explore the Benefits of Joining Our Community.
              </p>
              <p className="mdText">
                Create a profile in OSIO to engage the cheer community, offer
                coaching services to our network of{' '}
              </p>
            </div>
            <ImageBolls></ImageBolls>
          </div>
          <div className="flex w-full justify-between mx-auto">
            <ImageBolls image={Parents}></ImageBolls>
            <ImageBolls image={Coaches}></ImageBolls>
          </div>
          <div className="flex  w-full justify-between mx-auto">
            <ImageBolls image={Parents}></ImageBolls>
            <ImageBolls image={Coaches}></ImageBolls>
          </div>
        </div>
        <div className="absolute -bottom-[55%] rotate-6  z-0  -left-[20%]   w-[120%] ">
          <img
            src={vectorThree}
            alt=""
            className="w-full h-full 

           "
          />
        </div>
      </section>
      <section className="px-[200px] relative -space-y-[350px]   py-[150px] bg-[#FFF3D8]">
        <div className="w-full relative z-10 flex px-[50px] justify-end">
          <div className="aspect-square w-fit flex justify-center items-center rounded-full p-4 overflow-hidden bg-[#000]">
            <img
              src={TeamMission}
              alt=""
              className="rounded-full w-[695px] aspect-square"
            />
          </div>
        </div>
        <div className="w-full relative z-10 flex px-[50px] justify-start">
          <div className="aspect-square w-fit flex justify-center items-center rounded-full p-4 overflow-hidden bg-[#000]">
            <img
              src={TeamMission}
              alt=""
              className="rounded-full w-[695px] aspect-square opacity-0"
            />
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <img src={vectorFour} alt="" />
        </div>
      </section>
      {/* Last Section */}
      <Join></Join>
    </div>
  )
}

export default Home
