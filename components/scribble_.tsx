import React from 'react'

interface Scribble_Props {
  children: JSX.Element
  label: string
}

const Scribble_ = ({ children, label }: Scribble_Props) => {
  return (
    <div className={`mt-14 neumorphism relative flex min-h-[50px] w-[80%] md:w-[700px] flex-col transition-all duration-200`}>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center transition-all duration-200">
        { children }
      </div>
      <div className={`absolute top-[-35px] w-[200px] h-[30px]`}>
          <p className={`text-md font-semibold opacity-80`}>{ label }</p>
      </div>
    </div>
  )
}

export default Scribble_
