import { cheerProgramTriang } from '../assets/Features/vectors'
import Join from '../components/Join'

function Features() {
  return (
    <div>
      <section className="lg:px-[180px]  topSection bg-[#EBE1C7] space-y-[30px] flex flex-col justify-center">
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
      <section className="bg-[#F1DFB5] min-h-screen relative">
        <div className="absolute right-0 bottom-[10%]">
          {cheerProgramTriang}
        </div>
      </section>

      {/* Facility Manager */}
      <section className="bg-[#FFF3D8] min-h-screen"></section>
      <Join></Join>
    </div>
  )
}

export default Features
