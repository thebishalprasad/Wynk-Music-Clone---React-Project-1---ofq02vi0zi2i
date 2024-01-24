import React from 'react'
import Carousel from '../components/Carousel'
import Header from '../components/Header.jsx'
import MusicCard from '../components/Songs/MusicCard.jsx'
import ArtistCard from '../components/ArtistCard.jsx'
import NewRelease from '../components/NewRelease.jsx'
import MoodSongs from '../components/MoodSongs.jsx'
import TrendingSongs from '../components/Songs/TrendingSongs.jsx'
import Top20ThisWeek from '../components/Songs/Top20ThisWeek.jsx'
import SoulSoother from '../components/Songs/SoulSoother.jsx'
import EvergreenMelodies from '../components/Songs/EvergreenMelodies.jsx'
import Top50ThisMonth from '../components/Songs/Top50ThisMonth.jsx'


const Home = () => {

  return (
    <div>
      <Header />
      <Carousel />
      <NewRelease />
      <TrendingSongs />
      <MoodSongs />
      <ArtistCard />
      <Top20ThisWeek />
      <MusicCard/>
      <SoulSoother />
      <EvergreenMelodies />
      <Top50ThisMonth />
    </div>
  )
}

export default Home