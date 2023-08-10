import { cheerProgramTriang } from '../assets/Features/vectors'
import Join from '../components/Join'

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
      <section className="bg-[#E2D9C0] min-h-screen"></section>
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
