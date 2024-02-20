import Navbar from './components/Navbar'
import "./App.css"
import "./index.css"
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from "./components/Testimonials"
import KeynoteSpeaker from './components/KeynoteSpeaker'
import ScheduleTable from './components/ScheduleTable'
import EventVenue from './components/EventVenue'
import Hotel from './components/Hotel'
import Sponsers from './components/Sponsers'

const App = () => {
  return (
    <>
    <Navbar/> 
    <Hero/>
    <About/>
    <Testimonials/>
    <KeynoteSpeaker/>
    <ScheduleTable/>
    <EventVenue/>
    <Hotel/>
    <Sponsers/>
    </>
  )
}

export default App