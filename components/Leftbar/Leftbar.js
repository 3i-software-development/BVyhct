import React from 'react'
import style from "./style.module.scss";
import classNames from "classnames/bind";
import { MenuLink } from '@/public/data';
import Link from "next/link";
import { MdPhoneInTalk } from "react-icons/md";
import {SlLocationPin} from 'react-icons/sl';

const cx = classNames.bind(style);

const Leftbar = () => {
    console.log(MenuLink, 11465);
    return (
        <div className={cx('container')}>
            <div className={cx('departments')}>
                <h5>Danh sách chuyên khoa</h5>
                {MenuLink[1].list.map((item, index) =>
                    <Link href={item.link} key={index}>{item.title}</Link>
                )}
            </div>
            <div className={cx('opening-hours')}>
                <h5>Danh mục</h5>
                <div className={cx('hours-list')}>
                    <div className={cx('hours-item')}>
                        <p className={cx('day')}>Thứ 2 - Thứ 6  </p>
                        <p>8:00 - 10:00</p>
                    </div>
                    <div className={cx('hours-item')}>
                        <p className={cx('day')}>Thứ 7  </p>
                        <p>8:00 - 10:00</p>
                    </div>
                    <div className={cx('hours-item')}>
                        <p className={cx('day')}>Chủ nhật  </p>
                        <p>8:00 - 10:00</p>
                    </div>
                </div>
            </div>
            <div className={cx('contact')}>
                <h5>Liên lạc nhanh</h5>
                <div className={cx("item-contact")}>
                    <MdPhoneInTalk className={cx("icon-header")} />
                    <div className={cx("text-contact")}>
                        <p className={cx("text-title")}>Hotline</p>
                        <p className={cx("text-p")}>02433.822.766</p>
                    </div>
                </div>

                <div className={cx("item-contact")}>
                    <SlLocationPin className={cx("icon-header")} />
                    <div className={cx("text-contact")}>
                        <p className={cx("text-title")}>23 - 99 Nguyễn Viết Xuân</p>
                        <p className={cx("text-p")}>Quang Trung, Hà Đông, Hà Nội</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftbar