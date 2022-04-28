import React from 'react'
import Navigation_ from './navigation_'

interface Video_Props {}

const Video_ = ({}: Video_Props) => {
  return (
    <div className={`flex flex-col h-[350px] w-[600px] rounded-md bg-white shadow-md overflow-hidden relative`}>
      <video
        autoPlay
        loop
        muted
        src="/assets/rain.mp4"
        className={`h-full object-cover`}
      />
    </div>
  )
}

export default Video_
