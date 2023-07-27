import React from 'react'
import { personalInfo } from '../data'
import parse from 'html-react-parser';

const info = () => {
  return (
     <>
     {personalInfo.map(({title, description}, index) => {
         return(
          <li className="info__item" key={index}>
            <span className="info__title">{parse(title)}</span>
            <span className="info__description">{parse(description)}</span>
          </li>
         )

     })}
     </>
  )
}

export default info