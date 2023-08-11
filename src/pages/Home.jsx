import firstSecVid from '../assets/FirstSecVid.png'
import Join from '../components/Join'
import phoneBg from '../assets/phoneBg.svg'
import logo from '../assets/blackLogo.svg'
import playStore from '../assets/PlayStore.png'
import appStore from '../assets/AppStore.svg'
import phoneShadow from '../assets/phoneShadow.svg'
import vectorOne from '../assets/HomeVector.svg'
import vectorTwo from '../assets/HomeVector2.svg'
import vid from '../assets/vid.png'
import phoneVid from '../assets/phoneVid.svg'
import phoneTop from '../assets/phoneTop.svg'
import Phone from '../components/phone'
import videoTwo from '../assets/videoTwo.png'
import videoThree from '../assets/videoThree.png'
function Home() {
  return (
    <div>
      <section className="relative h-fit min-h-screen overflow-hidden">
        <div>
          <img
            src={firstSecVid}
            alt="firstSecVid"
            className="w-full absolute top-0 left-0"
          />
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
      <section className="flex text-center space-y-[50px] bg-[#DED1AE] flex-col items-center py-[150px]">
        <p className="sectionTitle">
          Share your Experiences <br /> with Coaches & Programs
        </p>
        <p className="mdText">
          Create a profile in OSIO to engage the cheer <br /> community, offer
          coaching services to our network of{' '}
        </p>
        <Phone video={videoThree}></Phone>
      </section>
      {/* Last Section */}
      <Join></Join>
    </div>
  )
}

export default Home
