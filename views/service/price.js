import React from 'react'
// import { GetPriceTable } from '@/pages/api/callAPI'
import { serviceList } from '@/public/service_data'
import style from "./style.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const Price = () => {
    // const priceTable = GetPriceTable()
    // console.log(priceTable);

    const data = JSON.parse(serviceList);
    console.log('data',data);

    return (
        <div className={cx('service-container')}>
            <table className={cx('service-table')}>
            <thead className={cx('service-head')}>
                <tr>
                    <th>STT</th>
                    <th>nhóm</th>
                    <th>chuyên ngành kĩ thuật</th>
                    <th>giá</th>
                </tr>
            </thead>
            <tbody className={cx('service-body')}>
                {data.map((item, index) =>
                    <tr className={cx('service-row')}>
                        <td>{index + 1}</td>
                        <td>{item.ninja_column_1}</td>
                        <td>{item['2']}</td>
                        <td>{item.gia_dvkt}</td>
                    </tr>
                )}
            </tbody>
        </table>
        </div>
    )
}

export default Price