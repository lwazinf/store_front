import type { NextPage } from 'next'
import Navigation_ from '../components/navigation_'
import Stats_ from '../components/stats_'
import Scribble_ from '../components/scribble_'
import Video_ from '../components/video_'

import Masonry from 'react-masonry-css'
import { useRecoilState } from 'recoil'
import { modalState } from '../components/atoms/AtomTemp_'

const Home: NextPage = () => {
  const [modal_, setModal_] = useRecoilState(modalState)
  return (
    <div className={`flex flex-col items-center justify-center transition-all duration-200`}>
      <div
        className={`flex h-screen w-full flex-col items-center ${
          modal_ ? 'justify-center' : 'justify-start'
        }`}
      >
        <img
          className="my-[30px] h-[200px] opacity-90 transition-all duration-200 md:hidden"
          src="/assets/logo.png"
        />
        {/* <div className={`fixed top-0 glassEffect z-10 flex items-center justify-center w-full h-full transition-all duration-200 ${!modal_ ?? 'hidden'} ${modal_ ? 'opacity-100' : 'opacity-0 '}`} > */}
        <div
          className={`fixed top-[250px] z-0 flex h-[200px] w-[400px] rotate-3 self-center  rounded-md bg-transparent shadow-none transition-all duration-200 md:h-[450px] md:w-[620px]   ${
            modal_ ? 'opacity-100' : 'opacity-50 '
          } `}
          onClick={() => {
            // setModal_(false)
          }}
        >
          <img
            className="relative left-[-150px] top-[-50px] hidden h-[280px] rotate-[-100deg] opacity-40 transition-all duration-200 md:flex"
            src="/assets/logo.png"
          />
          <img
            className="relative right-[150px] top-[180px] hidden h-[200px] -rotate-45 opacity-20 transition-all duration-200 md:flex"
            src="/assets/logo.png"
          />
          <img
            className="relative right-[60px] top-[-20px] hidden h-[100px] rotate-[-5deg] opacity-10 transition-all duration-200 md:flex"
            src="/assets/logo.png"
          />
          <img
            className="relative right-[80px] top-[0px] hidden h-[400px] rotate-[30deg] opacity-30 transition-all duration-200 md:flex"
            src="/assets/logo.png"
          />
          <img
            className="relative left-[-640px] top-[-120px] hidden h-[180px] rotate-[-200deg] opacity-60 transition-all duration-200 md:flex"
            src="/assets/logo.png"
          />

          <div
            className={`absolute top-0 flex h-[135px] w-[400px] flex-col items-center justify-center md:h-[450px] md:w-[620px]`} onClick={() => {
              setModal_(!modal_)
            }}
          >
            {/* <p className={`text-[15px] font-bold`}>
            Where do you think you'll be selling the most merch?
          </p> */}
            <img
              className="relative top-[-20px] mb-[10px] hidden h-[170px] -rotate-3 transition-all duration-200 md:flex"
              src="/assets/logo.png"
            />
          </div>
        </div>
        {/* </div> */}
        <div
          className={`flex flex-col items-center justify-center transition-all duration-300 ${
            modal_ ? 'opacity-0 pt-[50%]' : 'opacity-100 pt-[0%]'
          }`}
        >
          <Masonry
            breakpointCols={{
              default: 3,
              1298: 2,
              860: 1,
            }}
            className={`my-masonry-grid z-10 my-[100px] rotate-[-0.5deg] ${modal_ ? 'hidden' : 'visible'}`}
            columnClassName="my-masonry-grid_column"
          >
            <Scribble_ label="video" type="image" />
            <Scribble_ label="video" type="text" />
            <Scribble_ label="video" type="image" />
            <Scribble_ label="video" type="text" />
            <Scribble_ label="video" type="image" />
            <Scribble_ label="video" type="image" />
            <Scribble_ label="video" type="video" />
          </Masonry>
        </div>
      </div>
    </div>
  )
}

export default Home
