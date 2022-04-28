import React from 'react'

interface Stats_Props {
  // children: JSX.Element
}

const Stats_ = ({}: Stats_Props) => {
  return (
    <div className={`font-mono text-[5px] flex min-h-[0px] min-w-[0px] flex-row justify-center items-center`}>
      25 Items <p className='font-bold'> 1.5k Followers</p>
    </div>
  )
}

export default Stats_
