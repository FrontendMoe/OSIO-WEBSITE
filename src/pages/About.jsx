import Join from '../components/Join'

function About() {
  return (
    <div>
      <section className="sectionPadding py-[100px]  topSection bg-[#EBE1C7] space-y-[30px] flex flex-col justify-center">
        <p className="sectionTitle font-[900] lg:w-[700.984px]">
          OUR SPORT <br /> IS OURS.
        </p>
        <p className="mdText font-[400] lg:w-[750px]">
          Create a profile in OSIO to engage the cheer community, offer coaching
          services to our network of athletes and create a profile{' '}
        </p>
      </section>
      <section className="sectionPadding py-[100px]  topSection bg-[#E2D9C0] space-y-[30px] flex flex-col justify-center">
        <p className="sectionTitle font-[900] lg:w-[700.984px]">
          PLACEHOLDERAWAITING COPY/CONTENT FEEDBACK FROM OSIO TEAM
        </p>
      </section>
      <Join></Join>
    </div>
  )
}

export default About
