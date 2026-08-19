import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Page composition. Section order here must match NAV_LINKS in Header.tsx
// and the section `id`s used for the anchor links / "#top" jump target.
export default function App() {
  return (
    <>
      {/* Visually hidden until focused — lets keyboard/screen-reader users
          jump past the header nav straight to the page content. */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
