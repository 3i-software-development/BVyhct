import React, { useEffect, useState, useRef } from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import { MdMeetingRoom } from 'react-icons/md';
import DatePick from "@/components/DatePicker/DatePicker";
import { DatePicker, Button } from 'antd';
import { ListTimeBook,ListDateBook } from "@/public/data";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const cx = classNames.bind(style);

const Form = () => {

    const [visible, setVisible] = useState(false);
    const [datevalue, setDatevalue] = useState(null);
    const [show,setShow] = useState(true);
    const [pickdate,setPickdate] = useState(null);
    const [pickhour,setPickhour] = useState(null);

    const handleButtonClick = () => {
        setVisible(!visible);
    };
    const onChange = (date, dateString) => {
        setVisible(false);
        setDatevalue(dateString);
        setShow(false);
    };

    const disabledDate = (current) => {
        console.log(dayjs().endOf('day'))
        // Can not select days before today and today
        return current && current.add(-2, 'day') < dayjs().endOf('day');
      };
    // const handleDatePickerChange = (value, dateString) => {
    //   setVisible(false);
    // };

    return (
        <div className={cx('form')}>
            <div className={cx('form-left')}>
                <h5>Lịch khám</h5>
                <div className={cx('form-item')}>
                    <MdMeetingRoom />
                    <select id='department' name="department" >
                        <option value='' >Chuyên khoa khám</option>
                        <option value='' >Tai</option>
                        <option value='' >Tai</option>
                    </select>

                </div>

                <p className={cx('title')}>Ngày khám (*)</p>
                <div className={cx('date-container')}>
                    {/* {datevalue ? <p className={cx('value-date')} onClick={()=>{setShow(true);setVisible(true)}}>{datevalue}</p> : */}

                        <div className={cx('list-date')}>
                      {ListDateBook.map((item,index)=>
                       <div onClick={()=>setPickdate(index)} className={cx('item-date',pickdate==index&&'active')} key={index}>
                       <p>{item.date}</p>
                       <p>{item.text}</p>
                   </div>
                      )}
                       

                            {/* <div onClick={(e)=>setPickdate(e.key)} className={cx('item-date',pickdate==key&&'active')} key={0}>
                                <p>{dayjs().format('D/M')}</p>
                                <p>Hôm nay</p>
                            </div>
                            <div onClick={(e)=>setPickdate(e.key)} className={cx('item-date')} key={1}>
                                <p>{dayjs().add(1, 'day').format('D/M')}</p>
                                <p>Ngày mai</p>
                            </div>
                            <div onClick={(e)=>setPickdate(e.key)} className={cx('item-date')} key={2}>
                                <p>{dayjs().add(2, 'day').format('D/M')}</p>
                                <p>Ngày kia</p>
                            </div> */}
                            <label className={cx('item-date',pickdate==4&&'active')} onClick={(e) => {handleButtonClick();setPickdate(4)}} >
                                <p>{datevalue?datevalue:'+'}</p>
                                <p>Ngày khác</p>

                            </label>
                        </div>
                    {/* } */}
                <DatePicker
                format="D/M"
                disabledDate={disabledDate}
                                onChange={onChange}
                                className={cx('datepick')}
                                open={visible}
                            />
                </div>
                <p className={cx('title')}>Giờ khám (*)</p>
                <div className={cx('list-hour')}>
                    {ListTimeBook.map((item,index)=>
                    <p className={cx(pickhour==index&&'active')} onClick={()=>setPickhour(index)}>{item}</p>
                    )}

                </div>

            </div>
            <div className={cx('form-right')}>
                <h5>Thông tin người khám</h5>
                <div className={cx('form-item')}>
                    <input placeholder="Họ tên *" />
                    <MdMeetingRoom />
                </div>
                <div className={cx('form-item')}>
                    <input placeholder="Điện thoại *" />
                    <MdMeetingRoom />
                </div>
                <div className={cx('form-item')}>
                    <input placeholder="Email" />
                    <MdMeetingRoom />
                </div>
                <div className={cx('check')}>
                    <label>Nam</label><input type='radio' />
                    <label>Nữ</label><input type='radio' />
                </div>
                <textarea rows={4} placeholder='Triệu chứng bệnh' className={cx('text-area')}></textarea>
                <button className={cx('button')}>Đăng kí</button>
            </div>

        </div>
    )
}

export default Form