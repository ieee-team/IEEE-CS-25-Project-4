import Experience from "./Experience"
import Features from "./Features"
import Global from "./Global"
import Leaderships from "./Leaderships"
import Main from "./Main"
import Mission from "./Mission"
import SubAbout from "./SubAbout"

function AllAbout() {
  return (
    <div className="container w-full bg-[#E2E4EB]">
        <SubAbout />
        <Experience/>
        <Features/>
        <Mission/>
        <Global/>
        <Leaderships/>
        <Main/>
         
    </div>
  )
}

export default AllAbout
