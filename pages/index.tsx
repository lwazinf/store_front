import type { NextPage } from 'next'
import Navigation_ from '../components/navigation_'
import Stats_ from '../components/stats_'
import Scribble_ from '../components/scribble_'
import Video_ from '../components/video_'

const Home: NextPage = () => {
  return (
    <div className={`flex h-screen w-full flex-col items-center justify-start`}>
        <img
          className="h-[200px] mt-[100px] mb-[20px] opacity-90 transition-all duration-200"
          src="/assets/logo.png"
        />
        <Scribble_ label='Name'>
         <input type='text' placeholder='enter your name..' className={`h-full w-[90%] bg-transparent mx-auto text-gray-500`} />
        </Scribble_>
        <Scribble_ label='Email'>
         <input type='email' placeholder='enter your email..' className={`h-full w-[90%] bg-transparent mx-auto text-gray-500`} />
        </Scribble_>
        <Scribble_ label='age'>
         <input type='date' className={`h-full w-[90%] bg-transparent mx-auto text-gray-500`} />
        </Scribble_>
    </div>
  )
}

export default Home
