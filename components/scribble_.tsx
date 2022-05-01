import React from 'react'
import Video_ from './video_'

interface Scribble_Props {
  label: string
  type: string
}

const Scribble_ = ({ label, type }: Scribble_Props) => {
  return (
    <div className={`m-2 mb-[10px] flex min-h-[20px] w-[400px]`}>
      {type == 'video' ? (
        <VideoElement_ />
      ) : type == 'image' ? (
        <ImageElement_ />
      ) : (
        <TextElement_ />
      )}
    </div>
  )
}

export default Scribble_

interface VideoElement_Props {}

const VideoElement_ = ({}: VideoElement_Props) => {
  return (
    <div
      className={`flex h-[400px] w-full flex-col rounded-lg bg-[#fcfffc] p-2 shadow-md`}
    >
      <div className={`h-[60%] w-[100%]`}>
        <Video_ />
      </div>
      <div
        className={`m-0 mt-6 flex min-h-[20px] w-full flex-row items-center justify-center`}
      >
        <p className={`text-[15px] font-bold`}>Welcome to your dashboard</p>
      </div>
      <div
        className={`relative m-0 mx-auto mt-2 flex min-h-[20px] w-[250px] flex-row items-center justify-center`}
      >
        <p className={`text-center text-[14px] font-light`}>
          Where do you think you'll be selling the most merch?
        </p>
      </div>
      <div
        className={`relative m-0 mx-auto mt-2 flex min-h-[20px] w-[250px] flex-row items-center justify-center`}
      >
        <div className={`neumorphism absolute top-0 cursor-pointer`} />
      </div>
    </div>
  )
}

interface ImageElement_Props {}

const ImageElement_ = ({}: ImageElement_Props) => {
  return (
    <div
      className={`flex h-[400px] w-full flex-col rounded-lg bg-[#fcfffc] p-2 shadow-md`}
    >
      <div className={`h-[60%] w-[100%] bg-gray-200`}></div>
      <div
        className={`m-0 mt-6 flex min-h-[20px] w-full flex-row items-center justify-center`}
      >
        <p className={`text-[15px] font-bold`}>Welcome to your dashboard</p>
      </div>
      <div
        className={`m-0 mx-auto mt-2 flex min-h-[20px] w-[250px] flex-row items-center justify-center`}
      >
        <p className={`text-center text-[14px] font-light`}>
          Where do you think you'll be selling the most merch?
        </p>
      </div>
    </div>
  )
}

interface TextElement_Props {}

const TextElement_ = ({}: TextElement_Props) => {
  return (
    <div
      className={`flex h-[200px] w-full flex-col items-center justify-center rounded-lg bg-[#fcfffc] p-2 shadow-md`}
    >
      <div
        className={`m-0 mt-2 flex min-h-[20px] w-full flex-row items-center justify-center`}
      >
        <p className={`text-[15px] font-bold`}>Welcome to your dashboard</p>
      </div>
      <div
        className={`m-0 mx-auto mt-2 flex min-h-[20px] w-[250px] flex-row items-center justify-center`}
      >
        <p className={`text-center text-[14px] font-light`}>
          Where do you think you'll be selling the most merch?
        </p>
      </div>
    </div>
  )
}
