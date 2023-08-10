import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FiArrowUp } from 'react-icons/fi'
function ScrollToTop() {
  const { pathname } = useLocation()
  const [scroll, setScroll] = useState(false)

  const handleScroll = () => {
    const scrollY = window.scrollY

    // Adjust the value (e.g., 100) to set when to show the scroll-to-top button
    setScroll(scrollY > 200)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use smooth scrolling for a nicer effect
    })
  }

  useEffect(() => {
    scrollToTop()
  }, [pathname])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return scroll ? (
    <button
      onClick={() => scrollToTop()}
      className="fixed bottom-5 z-50 cursor-pointer shadow-lg text-xl text-white right-5 bg-[#1D1D1D] h-10 w-10 rounded-full flex justify-center items-center"
    >
      <FiArrowUp></FiArrowUp>
    </button>
  ) : null
}

export default ScrollToTop
