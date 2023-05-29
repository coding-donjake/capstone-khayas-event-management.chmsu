import React, { ReactNode } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ClassicButtonProps {
  icon: ReactNode;
  text: string;
}

export function ClassicButton(props: ClassicButtonProps) {
  return (
    <button className='classic-button'>
      <span className="icon">{props.icon}</span>
      <span>{props.text}</span>
    </button>
  )
}
