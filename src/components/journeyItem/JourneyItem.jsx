import React from 'react'
import "./journeyItem.css";

export default function JourneyItem({journeyInfo}) {
  return (
    <>
    <div className="journeyCard" key={journeyInfo.sn}>
     <span>({journeyInfo.sn})</span>
     <span>Hi, I'm {journeyInfo.name},</span>
     <span>and I'm going</span>
     <span>from = {journeyInfo.cityFrom}</span>
     <span>to = {journeyInfo.cityTo},</span>
     <span>would you like to come with me?</span>
    </div >
    </>
  )
}
