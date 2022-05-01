import { atom } from 'recoil'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAdd,
} from '@fortawesome/free-solid-svg-icons'

export const navState = atom({
    key: 'navState', // unique ID (with respect to other atoms/selectors)
    default: faAdd, // default value (aka initial value)
  });

  export const modalState = atom({
    key: 'modalState', // unique ID (with respect to other atoms/selectors)
    default: true, // default value (aka initial value)
  });