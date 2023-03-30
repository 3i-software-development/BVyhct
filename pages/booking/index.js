import React from 'react'
import style from "@/views/booking/style.module.scss";
import classNames from "classnames/bind";
import Image from 'next/image';
import Form from '@/views/booking/Form';

const cx = classNames.bind(style);

const booking = () => {
  return (
    <div className={cx('container')}>
      <h3>ĐĂNG KÍ KHÁM</h3>
      <Form/>
    </div>
  )
}

export default booking