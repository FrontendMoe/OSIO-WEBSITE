import { cheerProgramTriang } from '../assets/Features/vectors'
import {
  blueTriang,
  brownTriang,
  greenPhoneShadow,
  greenTriang,
  orangePhoneShadow,
  orangeTriang,
  purplePhoneShadow,
  purpleTriang,
} from '../assets/icons'
import videoTwo from '../assets/videoTwo.mp4'

import Join from '../components/Join'
import LinkCard from '../components/LinkCard'
import Phone from '../components/Phone'

function Features() {
  return (
    <div className="text-center overflow-x-hidden md:text-start">
      <section className="sectionPadding  topSection py-[100px] bg-[#EBE1C7] space-y-[30px] flex flex-col justify-center">
        <p className="sectionTitle font-[900] lg:w-[700.984px]">
          Empowering & Connecting All Members of the Cheer Community.
        </p>
        <p className="mdText font-[400] lg:w-[750px]">
          Create a profile in OSIO to engage the cheer community, offer coaching
          services to our network of athletes and create a profile{' '}
        </p>
      </section>
      {/* Chear athletes */}
      <section className="bg-[#E2D9C0]  sectionPadding min-h-screen">
        <div className="py-[50px] md:py-[100px] border-b border-[#00000040]">
          <p className="sectionTitle  pb-4">
            Cheer <br /> Athletes
          </p>
          <p className="smText ">
            Create a profile in OSIO to engage the cheer <br /> community, offer
            coaching services to our network of
          </p>
          <div className=" md:pt-[80px]  items-center md:space-x-[91px] space-y-[50px] md:space-y-0 md:py-[80px] flex md:flex-row flex-col  justify-between w-full ">
            <div className="h-fit w-fit md:scale-100 scale-[80%]  relative flex md:pl-40  justify-end items-center">
              <div className=" absolute md:left-[40px]  -bottom-[15px] overflow-hidden  rounded-b-[100px] w-fit ">
                {greenPhoneShadow}
              </div>
              <Phone noShadow={true}></Phone>
            </div>
            <div className="md:w-1/2  space-y-[40px]">
              {Array(3)
                .fill('')
                .map((el, index) => (
                  <LinkCard triang={greenTriang} key={index}></LinkCard>
                ))}
            </div>
          </div>
        </div>
        <div className="py-[50px] md:py-[100px] border-b border-[#00000040]">
          <p className="sectionTitle  pb-4">
            Guardians <br /> &Child Athletes
          </p>
          <p className="smText ">
            Create a profile in OSIO to engage the cheer <br /> community, offer
            coaching services to our network of{' '}
          </p>
          <div className=" md:pt-[80px]  items-center md:space-x-[91px] space-y-[50px] md:space-y-0 md:py-[80px] flex md:flex-row flex-col  justify-between w-full ">
            <div className="h-fit w-fit  md:scale-100 scale-[80%] relative flex md:pr-40  justify-end items-center">
              <div className=" absolute md:right-0 -right-40 -bottom-[15px] overflow-hidden  rounded-br-[100px] w-fit ">
                {orangePhoneShadow}
              </div>
              <Phone noShadow={true}></Phone>
            </div>
            <div className="md:w-1/2  space-y-[40px]">
              {Array(3)
                .fill('')
                .map((el, index) => (
                  <LinkCard triang={orangeTriang} key={index}></LinkCard>
                ))}
            </div>
          </div>
        </div>
        <div className="py-[50px] md:py-[100px]  border-[#00000040]">
          <p className="sectionTitle  pb-4">
            Cheer Coaches & <br /> Trainers
          </p>
          <p className="smText ">
            Create a profile in OSIO to engage the cheer <br /> community, offer
            coaching services to our network of{' '}
          </p>
          <div className=" md:pt-[80px]  items-center md:space-x-[91px] space-y-[50px] md:space-y-0 md:py-[80px] flex md:flex-row flex-col  justify-between w-full ">
            <div className="h-fit w-fit  md:scale-100 scale-[80%]   relative flex md:pl-40  justify-center items-center">
              <div className="bg-[#9C7431] fade absolute right-40 md:left-0 -bottom-[15px] rounded-b-[100px] w-full h-[80%]"></div>
              <Phone
                video={videoTwo}
                high={150}
                width={150}
                left={0}
                bottomShadow={false}
                top={-42}
              ></Phone>
            </div>
            <div className="md:w-1/2  space-y-[40px]">
              {Array(3)
                .fill('')
                .map((el, index) => (
                  <LinkCard key={index} triang={brownTriang}></LinkCard>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* Cheer Program */}
      <section className="bg-[#F1DFB5] h-[90vh]  py-[50px] md:py-[100px] md:flex-row flex-col flex md:justify-between   md:min-h-screen relative">
        <div className="flex sectionPadding  flex-col justify-center">
          <p className="sectionTitle">
            Cheer <br /> Program <br /> Staff
          </p>
          <p className="smText lg:w-[268px]">
            Create a profile in OSIO to engage the cheer community, offer
            coaching services to our network of{' '}
          </p>
          <div className="absolute  right-0 bottom-[10%]">
            {cheerProgramTriang}
          </div>
        </div>
      </section>

      {/* Facility Manager */}
      <section className="bg-[#FFF3D8] relative sectionPadding min-h-screen">
        <div className=" md:min-h-[70vh]  flex md:flex-row flex-col-reverse  justify-around items-center md:justify-between  border-b-[3px] border-[#DBD3BA] ">
          <div className="flex-1 py-[50px] md:mt-0 mt-[-420px]  flex-col justify-center">
            <p className="sectionTitle ">
              Facility <br /> Managers
            </p>
            <p className="smText md:w-[268px]">
              Create a profile in OSIO to engage the cheer community, offer
              coaching services to our network of{' '}
            </p>
          </div>
          <div className="h-fit w-fit  md:scale-100 scale-[60%] pl-24 md:pl-0  -mt-[647px] md:-mt-[630px]  flex flex-col justify-end">
            <div className="h-fit    relative right-0 w-full flex justify-end ">
              <div className="bg-[#762C56]  fade w-[500px] absolute right-2  top-10 overflow-hidden h-[700px]   rounded-[100px]  "></div>{' '}
              <div className="w-fit right-0 ">
                <Phone noShadow={true}></Phone>
              </div>
            </div>
            <div className="  h-[600px] right-24 -top-[300px]  z-10 overflow-hidden w-[519.049px]    rounded-bl-[100px]   relative flex   justify-center items-center">
              <div className="bg-[#9A9FCE] fade w-[800px] absolute right-2 bottom-0 overflow-hidden h-[400px]   rounded-[100px]  "></div>{' '}
              <div className="absolute  -bottom-[150px] -right-0">
                <Phone noShadow={true}></Phone>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="  flex border-b-[3px] border-[#DBD3BA] py-[50px] md:py-[100px] justify-between md:flex-row flex-col">
            {Array(3)
              .fill('')
              .map((el, index) => (
                <LinkCard key={index} triang={purpleTriang}></LinkCard>
              ))}
          </div>
          <div className="  flex  py-[50px] md:py-[100px] justify-between md:flex-row flex-col">
            {Array(3)
              .fill('')
              .map((el, index) => (
                <LinkCard key={index} triang={blueTriang}></LinkCard>
              ))}
          </div>
        </div>
      </section>
      <Join></Join>
    </div>
  )
}

export default Features
