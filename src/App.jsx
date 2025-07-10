import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Navigation from './components/Navigation'
import ThemeToggle from './components/ThemeToggle'
import Title from './components/Title'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certificates from './components/Certificates'
import References from './components/References'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <ThemeToggle />
        <main className="max-w-4xl mx-auto px-4 pt-20">
          <Title />
          <section id="summary">
            <Summary />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="certificates">
            <Certificates />
          </section>
          <section id="references">
            <References />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
