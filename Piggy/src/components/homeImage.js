import React from "react"
import HomePageImage from "../assets/images/home_page_illustration.svg"
import piggy from './Piggy.png'

export default function homeImage() {
  return (
    <div>
      <img src={piggy} width="800vw" height="550vh"/>
    </div>
  )
}