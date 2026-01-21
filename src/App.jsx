import { useState } from 'react'
import SectionWrapper from './components/common/SectionWrapper'
import Navbar from './components/navigation/Navbar'
import Home from './sections/Home'
import WebProjects from './sections/WebProjects'
import Photography from './sections/Photography'
import Cooking from './sections/Cooking'
import Messages from './sections/Messages'
import RongCrochet from './pages/RongCrochet'
import ReelRoom from './pages/ReelRoom'

function App() {
  const [showRongCrochet, setShowRongCrochet] = useState(false)
  const [showReelRoom, setShowReelRoom] = useState(false)

  if (showRongCrochet) {
    return (
      <div>
        <Navbar />
        <SectionWrapper id="rongcrochet">
          <RongCrochet onBack={() => setShowRongCrochet(false)} />
        </SectionWrapper>
      </div>
    )
  }

  if (showReelRoom) {
    return (
      <div>
        <Navbar />
        <SectionWrapper id="reelroom">
          <ReelRoom onBack={() => setShowReelRoom(false)} />
        </SectionWrapper>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <SectionWrapper id="home">
        <Home />
      </SectionWrapper>
      <SectionWrapper id="web-projects">
        <WebProjects 
          onNavigateToRongCrochet={() => setShowRongCrochet(true)}
          onNavigateToReelRoom={() => setShowReelRoom(true)}
        />
      </SectionWrapper>
      <SectionWrapper id="photography">
        <Photography />
      </SectionWrapper>
      <SectionWrapper id="cooking">
        <Cooking />
      </SectionWrapper>
      <SectionWrapper id="messages">
        <Messages />
      </SectionWrapper>
    </div>
  )
}

export default App

