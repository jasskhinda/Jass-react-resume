import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
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
        <ThemeToggle />
        <main className="max-w-4xl mx-auto p-4">
          <Title />
          <Summary />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certificates />
          <References />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
