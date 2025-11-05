import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { ArrowDown, Person } from 'react-bootstrap-icons'
import Avatar from '../../images/michael-njogu.jpg'   

const Hero = () => {

  // Smooth scroll to #my-work section
  const scrollToWork = (e) => {
    e.preventDefault()
    const section = document.querySelector("#my-work")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="hero">
      <Container>
        <Row className="align-items-center">
          <Col md={9}>
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
              className="hero-text"
            >
              <h1 className="hero-title">I turn complex ideas into practical solutions.</h1>
              <p className="mb-4">
                Strategic Product Designer crafting thoughtful experiences from complex beginnings.
              </p>

              <div className="hero-buttons">
                <Button 
                    variant="primary" 
                    onClick={scrollToWork}
                  >
                    View My Work
                    <span className="bootstrap-icon"><ArrowDown size={24} /></span>
                </Button>

                <Button 
                    as={Link} 
                    to="/about" 
                    variant="outline-secondary" 
                >
                  More About Me
                  <span className="bootstrap-icon ms-1"><Person size={24} /></span>
                </Button>                
              </div>
 
            </motion.div>
          </Col>

          <Col md={3}>
            <motion.img
              src={Avatar}
              alt="Michael Njogu"
              className="hero-image"
              loading="lazy"
              initial={{ opacity: 0, scale: 0.9, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            />
          </Col>
        </Row>
        <div className="divider"></div>
      </Container>
    </section>
  )
}

export default Hero
