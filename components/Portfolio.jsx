import About from './About'
import Background from './Background'
import Contacts from './Contacts'
import Experience from './Experience'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import ScrollProgressRail from './ScrollProgressRail'
import Skills from './Skills'

export default function Portfolio() {
  return (
    <>
      <Background />
      <Navbar />
      <ScrollProgressRail />
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contacts/>
    </>
  )
}
