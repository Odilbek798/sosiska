import React from 'react'
import './Hero.scss'

const Hero = ({image,title,text}) => {
  return (
    <>
    <div className="hero">
        <div className="hero__wrap">
            <div className="first">
                <img  src={image} alt="" />
            </div>
            <div className="sceond">
                <h2>{title}</h2>

                <p>{text}</p>
                <button>click</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero