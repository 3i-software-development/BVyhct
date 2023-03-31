import React, {useState} from 'react'
// import { GetPriceTable } from '@/pages/api/callAPI'
import { serviceList } from '@/public/service_data'
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Pagination from '@/components/Pagination';

const cx = classNames.bind(style);

const Price = () => {
    // const priceTable = GetPriceTable()
    // console.log(priceTable);

    const data = JSON.parse(serviceList);
    console.log('data', data);

    const [page, setPage] = useState(1);
    const lastIndex = page * 25
    const firstIndex = lastIndex - 25;

    return (
        <div className={cx('service-container')} id="list">
            <table className={cx('service-table')}>
                <thead className={cx('service-head')}>
                    <tr>
                        <th>STT</th>
                        <th>Nhóm</th>
                        <th>Chuyên ngành kĩ thuật</th>
                        <th>Giá (vnđ)</th>
                    </tr>
                </thead>
                <tbody className={cx('service-body')}>
                    {data.slice(firstIndex, lastIndex).map((item, index) =>
                        <tr className={cx('service-row')}>
                            <td>{(page-1)*25 + index + 1}</td>
                            <td>{item.ninja_column_1}</td>
                            <td className={cx('title')}>{item['2']}</td>
                            <td>{Number(item.gia_dvkt).toLocaleString()}</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <Pagination totalPosts={data.length} postPerPage={25} setPage={setPage} pageIndex={page} />
        </div>
    )
}

export default Price