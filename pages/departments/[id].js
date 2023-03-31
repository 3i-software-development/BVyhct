import React from 'react'
import style from "@/views/department/style.module.scss";
import classNames from "classnames/bind";
import BannerImg from '@/components/Banner/BannerImg';
import Leftbar from '@/components/Leftbar/Leftbar';
import DepartmantInfo from '@/components/Department/Info';

const cx = classNames.bind(style);

const Department = () => {
    return (
        <div className={cx('department-container')}>
            <BannerImg title='Chuyên ngành' />
            <div className={cx('department-main')}>

                <div className={cx('menu-left')}>
                    <Leftbar />
                </div>

                <div className={cx('department-info')}>
                    <DepartmantInfo />
                </div>

            </div>
        </div>
    )
}

export default Department