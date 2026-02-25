import Navbar from './Navbar'
import Hero from '../pages/Hero'
import About from '../pages/About'
import Education from '../pages/Education'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Footer from './Footer'

export default function Layout() {
  return (
    <div>
      <Navbar />
      <section id="home" ><Hero /></section>
      <section id="about" ><About /></section>
      <section id="education" ><Education /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  )
}
