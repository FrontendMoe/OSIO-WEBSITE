import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
function Navbar() {
  const links = [
    {
      name: 'Home',
    },
    {
      name: 'Features',
    },

    {
      name: 'About Us',
    },

    {
      name: 'Download',
    },
  ]
  return (
    <nav className="absolute flex w-full justify-between padding pt-[50px] md:pt-[100px]">
      <img src={logo} alt="" className="w-fit" />
      <div className="space-x-[77px] flex">
        {links.map((link, index) => (
          <Link key={index} to={'/'}>
            <p
              className={`  ${
                link.name === 'Home'
                  ? 'text-[#D8C596]  border-[#D8C596]'
                  : 'text-[#D8C59680] border-transparent'
              } text-[17.39px] font-[700] hover:text-[#D8C596] transition border-b-4 hover:border-[#D8C596]`}
            >
              {link.name}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
