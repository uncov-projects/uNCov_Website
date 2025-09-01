

import CardCarouselParent from '@/components/homeCards/CardCarouselParent'



import HeroContent from '@/components/landingPage/HeroContent'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/landingPage/Footer'
import React from 'react'
import GiftCardSection from '@/components/landingPage/GiftCardSection.tsx'
import AwesomeWorks from '@/components/landingPage/AwesomeWorks'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <GiftCardSection />
      <AwesomeWorks />
      <CardCarouselParent />
      <Footer />

    </div>
  )
}

export default page