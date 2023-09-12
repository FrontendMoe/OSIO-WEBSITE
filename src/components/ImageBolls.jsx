import benifits from '../assets/Benifits.png'
import { BsArrowRight } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/functions'

function ImageBolls({
  image = benifits,
  title = (
    <>
      Cheer <br /> Athletes
    </>
  ),
  link = 'Athletes',
  setCurrentLink,
}) {
  const navigate = useNavigate(null)
  return (
    <div
      onClick={() => {
        setCurrentLink('Features')
        setTimeout(() => {
          scrollToSection(link)
        }, 200)
      }}
      className="-space-y-36 cursor-pointer  w-[345.399px]"
    >
      <img
        src={image}
        alt=""
        width={345}
        className="rounded-full  w-[345.399px] aspect-square"
      />
      <div className="w-fit relative overflow-hidden h-fit bg-[#68AF8D] rounded-full">
        <img
          src={benifits}
          alt=""
          className="rounded-full opacity-0 w-[345.399px] aspect-square"
        />
        <div className="absolute p-[70px] text-start flex flex-col justify-center border h-full text-[#FFF3D8] z-10 w-full top-0 left-0">
          <p className="text-[25px] font-[700]">{title}</p>
          <p>Create a profile in OSIO to engage the cheer community, offer </p>
          <div className="flex items-center mt-4 space-x-4">
            <p>Learn More</p>
            <BsArrowRight className="text-xl"></BsArrowRight>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageBolls
