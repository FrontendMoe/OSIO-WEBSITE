import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
function Footer() {
  return (
    <footer className="padding text-[#FFF3D8] bg-[#050505] py-[64px]">
      <img src={logo} alt="logo" />
      <div>
        <p>Our Sport is Ours</p>
        <p
          onClick={() =>
            window.open(
              'https://www.google.com/maps/search/1234+Address+St+Nw,+Atlanta+Ga.+30320/@33.786388,-84.4558109,17z/data=!3m1!4b1?entry=ttu',
              '_blank',
            )
          }
        >
          1234 Address St Nw, Atlanta Ga. 30320
        </p>
        <Link to={'mailto::support@oursportisours.com'}>
          <p>support@oursportisours.com</p>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
