import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { navState } from './atoms/AtomTemp_'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPowerOff,
  faCartShopping,
  faAdd,
  faInfoCircle,
  faCog,
  faUserFriends,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons'

interface Navigation_Props {}

const Navigation_ = ({}: Navigation_Props) => {
  const [nav, setNav] = useState([
    { icon: faAdd, route: '' },
    { icon: faCartShopping, route: '' },
    { icon: faInfoCircle, route: '' },
    { icon: faCog, route: '' },
  ])
  const [navArea, setNavArea] = useState(false)
  const [nav_, setNav_] = useRecoilState(navState)
  return (
    <div
      className={`noScrollY mx-auto flex ${
        navArea ? 'h-[200px] w-[470px]' : 'h-[70px] w-[70px]'
      } relative flex-col rounded-md bg-black/5 transition-all duration-200 hover:h-[200px]`}
    >
      <div
        className={`flex w-[70px] flex-col rounded-md px-[5px] transition-all duration-200 ${
          navArea
            ? 'pointer-events-none opacity-0 hidden'
            : 'pointer-events-auto opacity-100'
        }`}
      >
        {nav.map((item) => {
          return (
            <div
              className={`my-[4px] flex min-h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-sm bg-[ghostwhite] text-black/30 shadow-sm transition-all duration-200 hover:my-[6.5px] hover:mx-[2.5px] hover:min-h-[55px] hover:w-[55px] hover:bg-black/30 hover:text-[ghostwhite]`}
              onClick={() => {
                setNavArea(true)
                setNav_(item.icon)
              }}
            >
              <FontAwesomeIcon icon={item.icon} className="h-[25px] w-[25px]" />
            </div>
          )
        })}
      </div>
      <div
        className={`absolute top-[8px] left-[8px] my-[4px] flex min-h-[30px] w-[30px] cursor-pointer items-center justify-center transition-all duration-100 hover:ml-[8px] ${
          navArea
            ? 'pointer-events-auto opacity-30 hover:opacity-80 z-10'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => {
          setNavArea(false)
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} className="h-[20px] w-[20px]" />
      </div>
      <div className={`h-[200px] w-[470px] absolute top-0 flex items-center justify-center transition-all duration-300 ${
          navArea 
            ? 'pointer-events-auto opacity-30 hover:opacity-80'
            : 'pointer-events-none opacity-0'
        }`}>
          {
          nav_ == faCartShopping && 
          <div className={``}>
              Hello World
          </div>
        }
      </div>
    </div>
  )
}

export default Navigation_
