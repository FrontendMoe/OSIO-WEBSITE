import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
function Footer({ currentLink, setCurrentLink }) {
  const links = [
    {
      name: 'Home',
      link: 'home',
    },
    {
      name: 'About',
      link: 'about',
    },
    {
      name: 'Contacts',
      link: 'home',
    },
    {
      name: 'Privacy Policy',
      link: 'home',
    },
    {
      name: 'Download',
      link: 'download',
    },
  ]
  return (
    <footer className="padding flex space-y-[50px] text-center md:text-start md:flex-row flex-col  items-center s text-[#FFF3D8] bg-[#050505] py-[64px]">
      <div className="flex items-center md:space-y-0 space-y-[15px] text-center md:text-start md:items-start md:flex-row flex-col    w-fit  text-[14px]  md:space-x-[40px]">
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
      <div className=" flex flex-col items-end w-full  flex-1">
        <div className="space-y-[20px]">
          <p>© 2004-2023 CBS INTERACTIVE. ALL RIGHTS RESERVED.</p>
          <div className="  flex flex-wrap justify-around md:space-x-10 ">
            {links.map((el, i) => (
              <Link
                onClick={() => setCurrentLink(el.link)}
                key={i}
                to={el.link}
                className=""
              >
                <p className="font-[500] px-2  text-[14px] flex">{el.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
