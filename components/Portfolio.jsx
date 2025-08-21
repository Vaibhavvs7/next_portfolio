import About from './About'
import Contacts from './Contacts'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Contacts/>
    </>
  )
}
