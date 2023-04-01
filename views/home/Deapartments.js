import React from 'react'
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Head from 'next/head';
import { departments } from "@/public/data";
import Card from 'react-bootstrap/Card';
import { CiStethoscope } from "react-icons/ci";
import { MdAirlineSeatLegroomExtra} from "react-icons/md";
import { GiHeartOrgan,GiTripleNeedle,GiSkeletalHand,GiMedicines} from "react-icons/gi";
import { IoNutritionOutline} from "react-icons/io";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';

const cx = classNames.bind(style);

function Deapartments() {

  return (
    <div className={cx('news-container')}>
      <h2>Chuyên khoa
      <hr/>
      </h2>

<Swiper
className={cx('department')}
            modules={[Autoplay]}
            grabCursor={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView="auto"
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                800: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
                1600: {
                    slidesPerView: 4,
                },
            }}
        >
            {departments.map((item, index) => (
                <SwiperSlide key={index} className={cx('depart-item-slide')}>

                    <div className={cx('depart-item')}>
                      <div className={cx('depart-icon')}>
                        {item.icon}
                        </div>
                        <div className={cx('depart-item-main')}>
                          <h5>{item.name}</h5>
                          <p>Khoa Ngoại – Phụ là khoa lâm sàng thực hiện khám bệnh, chữa bệnh cho bệnh nhân nội trú bằng các phương pháp dùng thuốc, không dùng thuốc YHCT, YHHĐ kết hợp với thủ thuật,  phẫu thuật của YHHĐ</p>
                        </div>
                        <button className={cx('depart-btn')}>Xem thêm</button>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
       
    </div>
  
  );
}

export default Deapartments