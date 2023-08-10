import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { useEffect, useState } from 'react'
import MenuBurger from './MenuBurger'
import { Fade } from 'react-reveal'
function Navbar() {
  const navigate = useNavigate(null)
  const [Collapse, setCollapse] = useState(false)
  const [currentLink, setCurrentLink] = useState(null)
  const links = [
    {
      name: 'Home',
      link: 'home',
    },
    {
      name: 'Features',
      link: 'Features',
    },

    {
      name: 'About Us',
      link: 'about',
    },

    {
      name: 'Download',
      link: 'download',
    },
  ]

  useEffect(() => {
    // Retrieve the saved link from localStorage on component mount
    const savedLink = localStorage.getItem('currentLink')
    console.log(savedLink)
    if (savedLink) setCurrentLink(savedLink)
    else setCurrentLink(links[0].link)
  }, [])

  const handleLinkClick = (link) => {
    setCurrentLink(link)
    localStorage.setItem('currentLink', link) // Save the link to localStorage
  }
  useEffect(() => {
    if (currentLink) navigate(currentLink)
  }, [currentLink])
  return (
    <nav className="absolute flex w-full justify-between md:flex-row flex-col md:bg-transparent bg-[#050505] padding py-[50px] md:pt-[100px]">
      <div className="flex items-center w-full md:w-fit justify-between">
        <img src={logo} alt="" className="w-fit" />
        {/* Burger */}
        <div
          onClick={() => {
            setCollapse(!Collapse)
          }}
          className="md:hidden"
        >
          <MenuBurger collapsed={Collapse}></MenuBurger>
        </div>
      </div>
      <div className="md:space-x-[77px] hidden space-y-[30px] w-full items-center  justify-end  md:space-y-0 md:flex md:flex-row flex-col">
        {links.map((link, index) => (
          <p
            key={index}
            style={{
              borderColor:
                link.link === currentLink ? '#D8C596' : 'transparent',
              color: link.link === currentLink ? '#D8C596' : '#D8C59680',
            }}
            className={`text-[17.39px] cursor-pointer font-[700] w-fit text-center hover:text-[#D8C596] transition border-b-4 hover:border-[#D8C596]`}
            onClick={() => handleLinkClick(link.link)}
          >
            {link.name}
          </p>
        ))}
      </div>
      <div className="md:hidden">
        {Collapse && (
          <Fade>
            <div className="md:space-x-[77px]  space-y-[30px] w-full items-center  justify-end  md:space-y-0 flex md:flex-row flex-col">
              {links.map((link, index) => (
                <p
                  key={index}
                  style={{
                    borderColor:
                      link.link === currentLink ? '#D8C596' : 'transparent',
                    color: link.link === currentLink ? '#D8C596' : '#D8C59680',
                  }}
                  className={`text-[17.39px] cursor-pointer font-[700] w-fit text-center hover:text-[#D8C596] transition border-b-4 hover:border-[#D8C596]`}
                  onClick={() => handleLinkClick(link.link)}
                >
                  {link.name}
                </p>
              ))}
            </div>
          </Fade>
        )}
      </div>
    </nav>
  )
}

export default Navbar
