import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
function Footer() {
  return (
    <footer className="padding flex  items-center s text-[#FFF3D8] bg-[#050505] py-[64px]">
      <div className="flex items-start   w-full  text-[14px]  space-x-[40px]">
        <img src={logo} alt="logo" />
        <div className="space-y-[7.6px]">
          <p className="font-[700] text-[14px]  text-[#FFF3D8]">
            Our Sport is Ours
          </p>
          <p
            className="text-[14px] font-[400]"
            onClick={() =>
              window.open(
                'https://www.google.com/maps/search/1234+Address+St+Nw,+Atlanta+Ga.+30320/@33.786388,-84.4558109,17z/data=!3m1!4b1?entry=ttu',
                '_blank',
              )
            }
          >
            1234 Address St Nw, Atlanta Ga. 30320
          </p>
          <div>
            {' '}
            <Link to={'mailto::support@oursportisours.com'}>
              <p>support@oursportisours.com</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="space-y-[20px]">
        <p>© 2004-2023 CBS INTERACTIVE. ALL RIGHTS RESERVED.</p>
        <div className="flex  space-x-[50px]">
          {Array(6)
            .fill('')
            .map((el, i) => (
              <Link key={i}>
                <p className="font-[500] text-[14px]">Home</p>
              </Link>
            ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
