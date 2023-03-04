import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Works from "./components/Works.jsx";
import Contact from "./components/Contact.jsx";
import styled from "styled-components";
import './index.css';

const Container = styled.div`
  height: 100vh;
  color: white;
  background: url("/image/bg.jpeg");
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Works />
      <Contact />
    </Container>
  )
}

export default App
