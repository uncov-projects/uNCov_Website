

import CardCarouselParent from '@/components/homeCards/CardCarouselParent'

import TemplateCard from '@/components/homeCards/TemplateCard'
import ThemeChange from '@/components/homeCards/ThemeChange'
import HeroContent from '@/components/landingPage/HeroContent'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/landingPage/Footer'
import React from 'react'
import GiftCardSection from '@/components/landingPage/GiftCardSection.tsx'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <GiftCardSection />
      <CardCarouselParent />
      <Footer />

    </div>
  )
}

export default page