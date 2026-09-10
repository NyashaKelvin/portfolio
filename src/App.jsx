import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Architecture from './components/Architecture.jsx'
import Projects from './components/Projects.jsx'
import ProjectHistory from './components/ProjectHistory.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Architecture />
        <Projects />
        <ProjectHistory />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
