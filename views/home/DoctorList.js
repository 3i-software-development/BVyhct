import { React } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { ListDoctor } from '@/public/data';
import DoctorCard from "@/components/DoctorCard/DoctorCard";

const cx = classNames.bind(style);

function DoctorList() {
    return (
        // <div>
        //     <section className={cx('team-area')}>
        //         <div className='container'>
        //             <div className={cx('sec-title')}>
        //                 <h1>Danh sách bác sĩ</h1>
        //             </div>
        //             <div className='row'>

        //             </div>
        //         </div>
        //     </section>
        // </div>
        <div className={cx('news-container')}>
            <h2>Danh sách bác sĩ
                <hr />
            </h2>
            <div className={cx('news-list')}>
                {ListDoctor.map((d, i) =>
                    <div className={cx('news-item-container')} key={i} >
                        <DoctorCard data={d} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default DoctorList;