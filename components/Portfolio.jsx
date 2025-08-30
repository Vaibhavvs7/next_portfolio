import About from './About'
import Contacts from './Contacts'
import Experience from './Experience'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contacts/>
    </>
  )
}
