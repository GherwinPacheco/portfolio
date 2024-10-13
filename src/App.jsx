import { ThemeProvider } from "@/components/ui/theme-provider"
import Intro from "@/contents/intro"
import About from "@/contents/about"
import Projects from "@/contents/projects"

import Navbar from "@/layouts/navbar"
import Contact from "./contents/contact"
import { Toaster } from "./layouts/toaster"
import Footer from "./layouts/footer"

function App() {

  return (
    <ThemeProvider>
      <main className='bg-secondary text-foreground'>
        <Navbar/>

        <div id="content" className='container mx-auto px-3 pt-20 md:pt-10'>
          <Intro />
          <About />
          <Projects />
          
        </div>
        <Contact />
        <Footer/>
        


        

        
      </main>
      <Toaster />
    </ThemeProvider>
  )
}

export default App
