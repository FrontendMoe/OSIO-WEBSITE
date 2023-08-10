import firstSecVid from '../assets/FirstSecVid.png'
import Join from '../components/Join'
function Home() {
  return (
    <div>
      <img src={firstSecVid} alt="firstSecVid" className="w-full" />
      {/* Last Section */}
      <Join></Join>
    </div>
  )
}

export default Home
