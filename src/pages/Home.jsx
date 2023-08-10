import firstSecVid from '../assets/FirstSecVid.png'
function Home() {
  return (
    <div>
      <img src={firstSecVid} alt="firstSecVid" className="w-full" />
      {/* Last Section */}
      <section className="bg-[#EBE1C7] py-[80px] md:py-[150px]">
        <div className="text-center mx-auto space-y-[50px] w-[90%] md:w-1/2">
          <p className="text-[60px] font-[900]">
            Join the OSIO Community Today
          </p>
          <p className="text-[23.268px] font-[400]">
            Create a profile in OSIO to engage the cheer community, offer
            coaching services to our network of{' '}
          </p>
          <button className="py-[30px] text-[#FFF3D8] text-[25px] font-[700] px-[70px] bg-[#1D1D1D] rounded-[3px]">
            Download Today
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
