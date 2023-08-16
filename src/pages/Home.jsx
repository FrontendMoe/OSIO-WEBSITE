import firstSecVid from '../assets/FirstSecVid.png'
import Join from '../components/Join'

import logo from '../assets/blackLogo.svg'
import playStore from '../assets/PlayStore.png'
import appStore from '../assets/AppStore.svg'
import vectorOne from '../assets/HomeVector.svg'
import vectorTwo from '../assets/HomeVector2.svg'
import vectorThree from '../assets/vectorThree.svg'
import vectorFour from '../assets/vectorFour.svg'

import discoverSideVid2 from '../assets/discoverSideVid2.mp4'
import discoverSideVid from '../assets/discoverSideVid.png'
import Phone from '../components/Phone'
import videoThree from '../assets/videoThree.mp4'
import videoTwo from '../assets/videoTwo.mp4'
import benifits from '../assets/Benifits.png'
import { BsArrowRight } from 'react-icons/bs'
import ImageBolls from '../components/ImageBolls'
import Coaches from '../assets/Coaches.png'
import training from '../assets/training.png'
import Parents from '../assets/parents.png'
import TeamMission from '../assets/TeamMisson.png'
// Videos
import TeamMissionVid from '../assets/TeamMissionVid.mp4'
import bgVideo from '../assets/bgVideo.mp4'
import { useEffect } from 'react'
import researchSideVid1 from '../assets/researchSideVid1.png'
import researchSideVid2 from '../assets/researchSideVid2.png'
import researchSideVid3 from '../assets/researchSideVid3.png'
import researchSideVid4 from '../assets/researchSideVid4.png'
import {
  horizontalLineOne,
  horizontalLineTwo,
  researchLines,
  verticalLineOne,
  verticalLineTwo,
} from '../assets/icons'
import ExperienceSurvey from '../assets/ExperienceSurvey (2).png'
//
import collegiate from '../assets/Collegiate.png'
import Card from '../components/Card'
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
    <div className="overflow-hidden">
      <section className="relative h-fit   overflow-hidden">
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
        <div className="  pb-[200px] overflow-hidden relative z-10 items-center pt-[200px] md:pt-[300px]">
          <div className="space-y-[61px] items-center relative flex flex-col z-10">
            {/* Mobile Phone */}
            <Phone></Phone>
            <img src={logo} alt="" />
            <p className="mdText md:w-[719px] text-center">
              Create a profile in OSIO to engage the cheer community, offer
              coaching services to our network of athletes and create a profile{' '}
            </p>
            <div className="flex">
              <img src={playStore} alt="" />
              <img src={appStore} alt="" />
            </div>
          </div>
          <div
            style={{
              background:
                'linear-gradient(to top, #FFF3D8 ,#FFF3D8, transparent)',
            }}
            className="absolute md:hidden z-0 w-full bottom-0 h-[40%] left-0 bg-black"
          ></div>
          <div className="absolute  -space-y-72 bottom-[20%] lg:-bottom-[50%] left-0 w-full">
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
      <section className="flex text-center overflow-hidden space-y-[50px] bg-[#EBE1C7] flex-col items-center py-[150px]">
        <p className="sectionTitle">
          Resources <br />& Community For <br /> CheerAthletes.
        </p>
        <p className="mdText md:w-[750px]">
          Create a profile in OSIO to engage the cheer community, offer coaching
          services to our network of{' '}
        </p>
        <div className="w-fit  relative ">
          <div className="absolute  -right-[240px] rotate-[30deg] top-[0]">
            <Card img={discoverSideVid}></Card>
          </div>
          <div className="absolute   rotate-[15deg] scale-95 -right-[220px] top-[300px]">
            <Card vid={discoverSideVid2}></Card>
          </div>
          <div className="absolute rotate-[-36.814deg] scale-105  -left-[240px] overflow-visible top-[20px]">
            <Card img={discoverSideVid}></Card>
          </div>
          <div className="absolute  scale-[95%]  rotate-[-30deg] -left-[200px] overflow-visible top-[290px]">
            <Card vid={discoverSideVid2}></Card>
          </div>

          <Phone
            video={videoThree}
            high={120}
            width={170}
            left={0}
            bottomShadow={false}
            top={-10}
          ></Phone>
        </div>
      </section>
      <section className="flex overflow-hidden sectionPadding  text-center space-y-[50px] bg-[#DED1AE] flex-col items-center py-[150px]">
        <p className="sectionTitle">
          Share your Experiences <br /> with Coaches & Programs
        </p>
        <p className="mdText pb-[150px]">
          Create a profile in OSIO to engage the cheer <br /> community, offer
          coaching services to our network of{' '}
        </p>
        <div className="w-fit  relative ">
          <img
            src={researchSideVid2}
            alt=""
            className="absolute scale-105 z-10 rotate-[0deg] -right-[240px] -top-[50px]"
          />
          <img
            src={researchSideVid1}
            alt=""
            className="absolute  scale-125 rotate-[0deg] -right-[240px] top-[200px]"
          />
          <img
            src={researchSideVid4}
            alt=""
            className="absolute  scale-105 z-10 rotate-[0deg] -left-[240px] overflow-visible -top-[50px]"
          />
          <img
            src={researchSideVid3}
            alt=""
            className="absolute  scale-125 rotate-[0deg]  -left-[240px] overflow-visible top-[200px]"
          />
          <Phone
            video={videoTwo}
            high={150}
            width={150}
            left={0}
            bottomShadow={false}
            top={-42}
          ></Phone>
        </div>
        <div className="flex md:items-start h-fit md:flex-row space-y-[30px] md:space-y-0  flex-col items-center  justify-center   w-full">
          <div className="md:w-[367px]   space-y-[80px]">
            <div className="bg-black mx-auto p-2 w-fit rounded-full">
              <div className="rounded-full p-14 bg-[#EBE1C7]  overflow-hidden ">
                <img
                  src={ExperienceSurvey}
                  alt=""
                  className="     object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="sectionTitle text-[52px]">
                Experience <br /> Surveys
              </p>
              <p className="mdText">
                Create a profile in OSIO to engage the cheer community, offer
                coaching services to our network of{' '}
              </p>
            </div>
          </div>
          <div className="flex justify-center md:hidden">{verticalLineTwo}</div>
          <div className=" h-full pt-10 md:block hidden">{researchLines}</div>
          <div className="md:w-[367px] flex flex-col items-center md:items-end space-y-[80px]">
            <div className="bg-black p-2 w-fit rounded-full">
              <div className="rounded-full p-14 bg-[#EBE1C7]  overflow-hidden ">
                <img
                  src={ExperienceSurvey}
                  alt=""
                  className="     object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="sectionTitle text-[52px]">
                Experience <br /> Surveys
              </p>
              <p className="mdText">
                Create a profile in OSIO to engage the cheer community, offer
                coaching services to our network of{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-[200px] px-[50px] relative  py-[150px] bg-[#FFF3D8]">
        <div className="md:space-y-[150px] relative z-10">
          <div className="flex lg:flex-row items-center space-y-10 lg:space-y-0 flex-col justify-center ">
            <div className="space-y-[40px] md:w-[500px]">
              <p className="sectionTitle">
                Explore the Benefits of Joining Our Community.
              </p>
              <p className="mdText md:w-[330px]">
                Create a profile in OSIO to engage the cheer community, offer
                coaching services to our network of{' '}
              </p>
            </div>
            <ImageBolls></ImageBolls>
          </div>
          <div className="flex justify-center md:hidden">{verticalLineTwo}</div>
          <div>
            <div className="justify-around hidden md:flex">
              <div>{verticalLineOne}</div>
              <div>{verticalLineOne}</div>
            </div>

            <div className="flex md:flex-row md:items-start items-center flex-col w-full justify-center mx-auto">
              <ImageBolls
                image={Parents}
                title={
                  <>
                    Parents <br />& Guardians
                  </>
                }
              ></ImageBolls>
              <div className="pt-[150px] md:block hidden">
                {horizontalLineTwo}
              </div>
              <div className="flex justify-center md:hidden">
                {verticalLineTwo}
              </div>
              <ImageBolls
                image={Coaches}
                title={
                  <>
                    Coaches <br />& Trainers
                  </>
                }
              ></ImageBolls>
            </div>
            <div className="justify-around hidden md:flex ">
              <div>{verticalLineTwo}</div>
              <div>{verticalLineTwo}</div>
            </div>
            <div className="flex justify-center md:hidden">
              {verticalLineTwo}
            </div>
            <div className="flex md:flex-row flex-col items-center md:items-end w-full justify-center mx-auto">
              <ImageBolls
                image={collegiate}
                title={
                  <>
                    Collegiate <br />& AllStar <br />
                    Programs
                  </>
                }
              ></ImageBolls>
              <div className="pb-[150px] md:block hidden">
                {horizontalLineTwo}
              </div>
              <div className="w-full flex justify-center md:hidden">
                {verticalLineTwo}
              </div>
              <ImageBolls
                image={training}
                title={
                  <>
                    Training <br />
                    Facilities
                  </>
                }
              ></ImageBolls>
            </div>
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
      <section className=" md:px-[75px] lg:px-[100px] xl:px-[200px] relative w-full md:-space-y-[350px]   py-[150px] bg-[#FFF3D8]">
        <div className="w-full  boder-2 relative z-10 flex px-[50px] justify-end">
          <div className="aspect-square w-fit flex justify-center items-center rounded-full p-4 overflow-hidden bg-[#000]">
            <video
              src={TeamMissionVid}
              alt=""
              muted={true}
              loop={true}
              playsInline
              autoPlay
              className="rounded-full w-[500px] md:w-[695px] aspect-square object-cover object-center"
            ></video>
          </div>
        </div>
        <div className="w-full relative z-10 flex px-[50px] justify-start">
          <div className="aspect-square relative w-fit flex justify-center items-center rounded-full p-4 overflow-hidden bg-[#000]">
            <img
              src={TeamMission}
              alt=""
              className="rounded-full opacity-0 w-[500px] md:w-[695px] aspect-square"
            />
            <div className="absolute link space-y-2 md:space-y-[30px]  top-0 left-1/2 -translate-x-1/2 w-[65%]  lg:w-1/2  mx-auto flex justify-center flex-col items-center  h-full text-start ">
              <p className="text-[#EED9B5] w-full text-start text-[24px] md:text-[36px] font-bold">
                Team + Mission Built
              </p>
              <p className="text-[#FFE6A4] text-[24px] md:text-[36px] font-[500]">
                for and by the Cheer Community
              </p>
              <p className="text-[12px] md:text-[16.188px] leading-[20.994px] text-[#FFF3D8]">
                Create a profile in OSIO to engage the cheer community, offer
                coaching services to our network of athletes and create a
                profile to sh
              </p>
              <div className="text-[#FFF3D8]  text-start  w-full font-[600] space-x-4 flex items-center">
                <p>Learn More </p>
                <BsArrowRight className="text-xl hoverState"></BsArrowRight>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <img src={vectorFour} alt="" />
        </div>
      </section>
      {/* Last Section */}
      <div className="relative z-20">
        <Join></Join>
      </div>
    </div>
  )
}

export default Home
