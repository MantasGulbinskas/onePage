import React from 'react';
import '../../scss/Header.scss'

export default function Button (props) {

  return(
    <button className={props.class ?? ''}>{props.text}</button>
  )
}