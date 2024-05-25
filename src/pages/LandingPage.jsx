import React from 'react'
import HeroSection from '../components/hero-section/HeroSection'
import VideoSection from '../components/video-section/VideoSection'
import WorshipPage from '../components/worship/WorsipPage'
import EventsSection from '../components/events/EventsSection'
import GestureSection from '../components/gesture/GestureSection'

export default function LandingPage() {
  return (
    <div>
        <HeroSection />
        <VideoSection />
        <WorshipPage />
        <EventsSection />
        <GestureSection />
    </div>
  )
}
