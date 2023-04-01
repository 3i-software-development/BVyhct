import React from 'react';
import style from "./style.module.scss";
import classNames from "classnames/bind";
import {FaCalendarAlt} from 'react-icons/fa';
import {BsFillSendFill} from 'react-icons/bs';

const cx = classNames.bind(style);

const Formadvise = () => {
  return (
    <div className={cx('form')}>
    <div className={cx('left')}>
        <FaCalendarAlt/>
        Để lại nhu cầu khám
    </div>
    <div className={cx('main')}>
        <input placeholder='Họ tên'/>
        <input placeholder='Số điện thoaị'/>
        <input placeholder='Ngày sinh'/>
        <input placeholder='Khu vực'/>
    </div>
    <button className={cx('right')}><BsFillSendFill/></button>
</div>
  )
}

export default Formadvise