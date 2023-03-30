import React from 'react';
import style from "@/views/orther/style.module.scss";
import classNames from "classnames/bind";
import BannerImg from '@/components/Banner/BannerImg';


const cx = classNames.bind(style);

const Orther = () => {
    return (
        <div className={cx('news-container')}>
            <BannerImg title='Quy trình khám chữa bệnh' />
            <div className={cx('news-main')}>

                {/* <div className={cx('news-list')}>
            {ListNews.slice(firstIndex, lastIndex).map((item,index)=>
             <div className={cx('news-item-container')} key={index}>
               <Newscard data={item}/>
             </div>
            )}
            <Pagination totalPosts={ListNews.length} postPerPage={6} setPage={setPage} pageIndex={page} />
          </div>
  
          <div className={cx('right-bar')}>
              <Rightbar/>
          </div> */}

                <p><b>Bước 1: Bàn hướng dẫn khoa Khám bệnh</b> <br/>

                – Lấy số thứ tự chờ đến lượt vào đăng ký khám sức khỏe tại cây bấm số tự động.<br/>

                – Xuất trình ảnh chân dung cỡ 04cm x 06cm chụp trên nền trắng để nhân viên y tế đối chiếu ảnh trong hồ sơ khám sức khỏe với người khám sức khỏe. <br/>

                – Đối với các trường hợp quy định tại khoản 3 điều 4 thông tư 14/2013 TT-BYT thì người giám hộ của người khám sức khỏe phải xuất trình CMND hoặc hộ chiếu để kiểm tra đối chiếu.<br/>

                <b>Bước 2: Phòng 103</b><br/>

                – Làm thủ tục hành chính, đo chiều cao cân nặng, tính chỉ số BMI.<br/>

                – Khám tai mũi họng.<br/>

                <b>Bước 3: Phòng 102</b><br/>

                – Đếm mạch, đo huyết áp.<br/>

                – Khám và chỉ định cận lâm sàng (Tùy vào mục đích sử dụng của giấy khám sức khỏe và yêu cầu của người đến khám).<br/>

                – Lập bảng kê chi phí khám sức khỏe theo quy định.<br/>

                – Khám da liễu.<br/>

                <b>Bước 4: Phòng 105</b><br/>

                – Khám mắt.<br/>

                – Khám răng hàm mặt.<br/>

                Bước 5: Phòng 106 khám tâm thần.<br/>

                Bước 6: Phòng 108 thanh toán chi phí khám sức khỏe.<br/>

                Bước 7: Khám cận lâm sàng (nếu có) tại khoa xét nghiệm và CĐHA<br/>

                – Phòng 202: Làm xét nghiệm máu, xét nghiệm nước tiểu.<br/>

                – Phòng 203: Siêu âm.<br/>

                – Phòng 204: Điện tim, Điện não.<br/>

                – Phòng 113: Chụp Xquang.<br/>

                Bước 8: Phòng 210 khoa Ngoại phụ khám ngoại khoa, sản phụ khoa.<br/>

                Bước 9: Phòng 310 khoa Nội khám tuần hoàn, hô hấp, tiêu hóa, cơ xương khớp, thần kinh.<br/>

                Bước 10: Phòng 202 khoa xét nghiệm và CĐHA  nhận kết quả khám cận lâm sàng (nếu có).<br/>

                Bước 11: Phòng 103 chờ kết luận, nhân bản (nếu có yêu cầu). Kết thúc khám.
                </p>
            </div>
        </div>
    )
}
export default Orther;