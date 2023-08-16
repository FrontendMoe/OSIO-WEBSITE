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
import Join from '../components/Join'
import Phone from '../components/Phone'

function Features() {
  return (
    <div className="text-center md:text-start">
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
        <div className="py-[100px] border-b border-[#00000040]">
          <p className="sectionTitle  pb-4">
            Cheer <br /> Athletes
          </p>
          <p className="smText ">
            Create a profile in OSIO to engage the cheer <br /> community, offer
            coaching services to our network of
          </p>
          <div className=" pt-[80px]  items-center md:space-x-[91px] space-y-[50px] md:space-y-0 md:py-[80px] flex md:flex-row flex-col  justify-between w-full ">
            <div className="h-fit w-fit  relative flex md:pl-40  justify-end items-center">
              <div className=" absolute md:left-[40px]  -bottom-[15px] overflow-hidden  rounded-b-[100px] w-fit ">
                {greenPhoneShadow}
              </div>
              <Phone noShadow={true}></Phone>
            </div>
            <div className="md:w-1/2  space-y-[40px]">
              {Array(3)
                .fill('')
                .map((el, index) => (
                  <div key={index} className="space-y-[30px] w-[324.334px]">
                    {greenTriang}
                    <div>
                      <p className=" font-bold text-[27.555px]">
                        Experience Surveys
                      </p>
                      <p className="smText">
                        Create a profile in OSIO to engage the cheer community,
                        offer coaching services to our network of{' '}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="py-[100px] border-b border-[#00000040]">
          <p className="sectionTitle  pb-4">
            Guardians <br /> &Child Athletes
          </p>
          <p className="smText ">
            Create a profile in OSIO to engage the cheer <br /> community, offer
            coaching services to our network of{' '}
          </p>
          <div className=" pt-[80px]  items-center md:space-x-[91px] space-y-[50px] md:space-y-0 md:py-[80px] flex md:flex-row flex-col  justify-between w-full ">
            <div className="h-fit w-fit  relative flex md:pr-40  justify-end items-center">
              <div className=" absolute md:right-0 -right-40 -bottom-[15px] overflow-hidden  rounded-br-[100px] w-fit ">
                {orangePhoneShadow}
              </div>
              <Phone noShadow={true}></Phone>
            </div>
            <div className="md:w-1/2  space-y-[40px]">
              {Array(3)
                .fill('')
                .map((el, index) => (
                  <div key={index} className="space-y-[30px] w-[324.334px]">
                    {orangeTriang}
                    <div>
                      <p className=" font-bold text-[27.555px]">
                        Experience Surveys
                      </p>
                      <p className="smText">
                        Create a profile in OSIO to engage the cheer community,
                        offer coaching services to our network of{' '}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="py-[100px]  border-[#00000040]">
          <p className="sectionTitle  pb-4">
            Cheer Coaches & <br /> Trainers
          </p>
          <p className="smText ">
            Create a profile in OSIO to engage the cheer <br /> community, offer
            coaching services to our network of{' '}
          </p>
          <div className=" pt-[80px]  items-center md:space-x-[91px] space-y-[50px] md:space-y-0 md:py-[80px] flex md:flex-row flex-col  justify-between w-full ">
            <div className="h-fit w-fit  relative flex md:pl-40  justify-center items-center">
              <div className="bg-[#9C7431] absolute right-40 md:left-0 -bottom-[15px] rounded-b-[100px] w-full h-[80%]"></div>
              <Phone noShadow={true}></Phone>
            </div>
            <div className="md:w-1/2  space-y-[40px]">
              {Array(3)
                .fill('')
                .map((el, index) => (
                  <div key={index} className="space-y-[30px] w-[324.334px]">
                    {brownTriang}
                    <div>
                      <p className=" font-bold text-[27.555px]">
                        Experience Surveys
                      </p>
                      <p className="smText">
                        Create a profile in OSIO to engage the cheer community,
                        offer coaching services to our network of{' '}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* Cheer Program */}
      <section className="bg-[#F1DFB5] flex justify-between   min-h-screen relative">
        <div className="flex sectionPadding flex-col justify-center">
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
        <div className="h-fit scale-100 w-fit md:mr-[100px] -bottom-[200px] relative flex pl-40  justify-center items-center">
          <div className="bg-[#762C56] w-[500px] absolute right-2 top-10 overflow-hidden h-[700px]   rounded-[100px]  "></div>{' '}
          <Phone noShadow={true}></Phone>
        </div>
      </section>

      {/* Facility Manager */}
      <section className="bg-[#FFF3D8] sectionPadding min-h-screen">
        <div className="min-h-[70vh] flex justify-between border-b-[3px] border-[#DBD3BA] ">
          <div className="flex flex-col justify-center">
            <p className="sectionTitle ">
              Facility <br /> Managers
            </p>
            <p className="smText md:w-[268px]">
              Create a profile in OSIO to engage the cheer community, offer
              coaching services to our network of{' '}
            </p>
          </div>
          <div className="  h-[600px] scale-90 overflow-hidden w-[519.049px] right-24 -top-[210px] rounded-bl-[100px]   relative flex pl-40  justify-center items-center">
            <div className="bg-[#9A9FCE] w-[800px] absolute right-2 bottom-0 overflow-hidden h-[400px]   rounded-[100px]  "></div>{' '}
            <div className="absolute -bottom-[150px] -right-0">
              <Phone noShadow={true}></Phone>
            </div>
          </div>
        </div>
        <div>
          <div className="  flex border-b-[3px] border-[#DBD3BA] py-[50px] md:py-[100px] justify-between md:flex-row flex-col">
            {Array(3)
              .fill('')
              .map((el, index) => (
                <div key={index} className="space-y-[30px] w-[324.334px]">
                  {purpleTriang}
                  <div>
                    <p className=" font-bold text-[27.555px]">
                      Experience Surveys
                    </p>
                    <p className="smText">
                      Create a profile in OSIO to engage the cheer community,
                      offer coaching services to our network of{' '}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="  flex  py-[50px] md:py-[100px] justify-between md:flex-row flex-col">
            {Array(3)
              .fill('')
              .map((el, index) => (
                <div key={index} className="space-y-[30px] w-[324.334px]">
                  {blueTriang}
                  <div>
                    <p className=" font-bold text-[27.555px]">
                      Experience Surveys
                    </p>
                    <p className="smText">
                      Create a profile in OSIO to engage the cheer community,
                      offer coaching services to our network of{' '}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Join></Join>
    </div>
  )
}

export default Features
