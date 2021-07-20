import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skill from './components/Skill';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skill />
      <Testimonials />
      <Contact />
   </main>
  );
}

export default App;
