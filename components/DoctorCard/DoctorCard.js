import React from 'react'
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import { FiMail, FiPhone } from "react-icons/fi";


const cx = classNames.bind(style);

const DoctorCard = ({ data }) => {
    return (
        <Link href="" className={cx("doctor-item")} >

            <div>

                <div className={cx("img")}>
                    <Image src={data.img} width="500" height="500" alt={data.title} />
                </div>

                <div className={cx('overlay-style')}>

                    <div className={cx('box')}>
                        <div className={cx('top')}>
                            <h4>Chuyên khoa</h4>
                        </div>

                        <hr style={{width:"70px"}}/>
                        
                        <div className={cx('bottom')}>
                            <p><FiPhone/> 012.345.678</p>
                            <p><FiMail/> yhct@yhct.com</p>
                        </div>
                    </div>

                </div>

                <div className={cx('text-holder')}>
                    <h4>{data.title}</h4>
                    <p>{data.city}</p>
                </div>

            </div>

            {/* <div className={cx('text-holder')}>
                <h4>{data.title}</h4>
                <p>{data.city}</p>
            </div> */}

        </Link>
    );
};

export default DoctorCard;
