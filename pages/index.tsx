import type { NextPage } from 'next'
import Navigation_ from '../components/navigation_'
import Stats_ from '../components/stats_'
import Video_ from '../components/video_'

const Home: NextPage = () => {
  
  return (
    <div className={`min-h-0 min-w-0`}>
      <Navigation_/>
      {/* <Video_/> */}
      {/* <Stats_/> */}
    </div>
  )
}

export default Home
