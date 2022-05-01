import React from 'react'
import Navigation_ from './navigation_'

interface Video_Props {}

const Video_ = ({}: Video_Props) => {
  return (
    <div className={`flex flex-col h-full w-full rounded-md bg-white overflow-hidden relative z-0`}>
      <video
        autoPlay
        loop
        muted
        src="/assets/rain.mp4"
        className={`w-full h-full object-cover`}
      />
    </div>
  )
}

export default Video_
