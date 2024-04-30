import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

  const slider = useRef()
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25
    }
    slider.current.style.transform = `translate(${tx}%)`
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25
    }
    slider.current.style.transform = `translate(${tx}%)`
  }

  const data = [
    { user_img: user_1, name: "William Jackson", country: "Edusity, USA", comment: "Choosing to pursue my degree at Edusity was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations." },
    { user_img: user_2, name: "William Jackson", country: "Edusity, USA", comment: "Choosing to pursue my degree at Edusity was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations." },
    { user_img: user_3, name: "William Jackson", country: "Edusity, USA", comment: "Choosing to pursue my degree at Edusity was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations." },
    { user_img: user_4, name: "William Jackson", country: "Edusity, USA", comment: "Choosing to pursue my degree at Edusity was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations." }
  ]

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          {
            data.map((d, i) => {
              return (
                <li key={i}>
                  <div className="slide">{console.log("tes")}
                    <div className="user-info">
                      <img src={d.user_img} alt="" />
                      <div>
                        <h3>{d.name}</h3>
                        <span>{d.country}</span>
                      </div>
                    </div>
                    <p>{d.comment}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
