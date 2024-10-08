import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem nisi, sint veniam possimus nobis ratione et dicta. Quibusdam, tempore iste. Minus libero autem recusandae alias in necessitatibus, ad eveniet'
  },
  {
    avatar: AVTR2,
    name: 'Tina snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem nisi, sint veniam possimus nobis ratione et dicta. Quibusdam, tempore iste. Minus libero autem recusandae alias in necessitatibus, ad eveniet'
  },
  {
    avatar: AVTR3,
    name: 'Tina snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem nisi, sint veniam possimus nobis ratione et dicta. Quibusdam, tempore iste. Minus libero autem recusandae alias in necessitatibus, ad eveniet'
  },
  {
    avatar: AVTR4,
    name: 'Tina snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem nisi, sint veniam possimus nobis ratione et dicta. Quibusdam, tempore iste. Minus libero autem recusandae alias in necessitatibus, ad eveniet'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

     {/* generate this dynamically */}
      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
                  <SwiperSlide key={index} className="testimonial" >
                    <div className='client__avatar'>
                      <img src={avatar} alt="Avatar one" />
                    </div>
                  <h5 className='client__name'> {name} </h5>
                      <small className="client__review">{review}</small>
                </SwiperSlide>
            )
          })
        }
      

        

      </Swiper>
    </section>
  )
}

export default Testimonials
