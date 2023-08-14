import { cheerProgramTriang } from '../assets/Features/vectors'
import {
  brownTriang,
  greenTriang,
  orangePhoneShadow,
  orangeTriang,
} from '../assets/icons'
import Join from '../components/Join'
import Phone from '../components/phone'

function Features() {
  return (
    <div>
      <section className="sectionPadding  topSection bg-[#EBE1C7] space-y-[30px] flex flex-col justify-center">
        <p className="text-[50.99px] font-[900] lg:w-[700.984px]">
          Empowering & Connecting All Members of the Cheer Community.
        </p>
        <p className="text-[22.231px] font-[400] lg:w-[750px]">
          Create a profile in OSIO to engage the cheer community, offer coaching
          services to our network of athletes and create a profile{' '}
        </p>
      </section>
      {/* Chear athletes */}
      <section className="bg-[#E2D9C0]  sectionPadding min-h-screen">
        <div className="py-[100px] border-b border-[#00000040]">
          <p className="sectionTitle  pb-4">
            Guardians <br /> &Child Athletes
          </p>
          <p className="smText ">
            Create a profile in OSIO to engage the cheer <br /> community, offer
            coaching services to our network of{' '}
          </p>
          <div className="  items-center space-x-[91px] md:py-[80px] flex  justify-between w-full ">
            <div className="h-fit w-fit  relative flex pr-40  justify-end items-center">
              <div className=" absolute right-0 -bottom-[15px] overflow-hidden  rounded-br-[100px] w-fit ">
                {orangePhoneShadow}
              </div>
              <Phone noShadow={true}></Phone>
            </div>
            <div className="w-1/2  space-y-[40px]">
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
        <div className="py-[100px] border-b border-[#00000040]">
          <p className="sectionTitle  pb-4">
            Cheer Coaches & <br /> Trainers
          </p>
          <p className="smText ">
            Create a profile in OSIO to engage the cheer <br /> community, offer
            coaching services to our network of{' '}
          </p>
          <div className="  items-center space-x-[91px] md:py-[80px] flex  justify-between w-full ">
            <div className="h-fit w-fit  relative flex pl-40  justify-center items-center">
              <div className="bg-[#9C7431] absolute left-0 -bottom-[15px] rounded-b-[100px] w-full h-[80%]"></div>
              <Phone noShadow={true}></Phone>
            </div>
            <div className="w-1/2  space-y-[40px]">
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
      <section className="bg-[#F1DFB5] flex flex-col justify-center sectionPadding min-h-screen relative">
        <p className="sectionTitle">
          Cheer <br /> Program <br /> Staff
        </p>
        <p className="smText lg:w-[268px]">
          Create a profile in OSIO to engage the cheer community, offer coaching
          services to our network of{' '}
        </p>
        <div className="absolute right-0 bottom-[10%]">
          {cheerProgramTriang}
        </div>
      </section>

      {/* Facility Manager */}
      <section className="bg-[#FFF3D8] sectionPadding min-h-screen">
        <div className="min-h-[70vh] border-b-[3px] border-[#DBD3BA] flex flex-col justify-center">
          <p className="sectionTitle ">
            Facility <br /> Managers
          </p>
          <p className="smText md:w-[268px]">
            Create a profile in OSIO to engage the cheer community, offer
            coaching services to our network of{' '}
          </p>
        </div>
      </section>
      <Join></Join>
    </div>
  )
}

export default Features
