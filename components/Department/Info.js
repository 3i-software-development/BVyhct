import React from 'react';
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from 'next/image';
import img from '@/public/assets/tab-content-2.jpg';
import DoctorList from '@/views/home/DoctorList';

const cx = classNames.bind(style);

const DepartmantInfo = () => {
  return (
    <div className={cx('info-container')}>
      <div className={cx('info-description')}>
        <h5>Chức năng, nhiệm vụ :</h5>
        <Image src={img} width='800' height='400' alt='department-description' />
        <ul className={cx('info-text')}>
          <li>
            Khoa XN&CĐHA là khoa cận lâm sàng có chức năng thực hiện các kỹ thuật xét nghiệm, chẩn đoán hình ảnh và thăm dò chức năng để chẩn đoán và theo dõi kết quả điều trị bệnh nhân. Phục vụ cho nhu cầu khám và chữa bệnh
          </li>
          <li>
            Thực hiện các kỹ thuật xét nghiệm chẩn đoán hình ảnh và thăm dò chức năng bằng các thiết bị máy sinh hóa, huyết học, nước tiểu, máu lắng, máy xquang, siêu âm, điện tim điện não, loãng xương, nội soi.
          </li>
          <li>
            Thực hiện các kỹ thuật xét nghiệm chẩn đoán hình ảnh và thăm dò chức năng trả kết quả ngay đối với trường hợp cấp cứu, kết quả thường quy trả trong ngày có sổ giao nhận.
          </li>
          <li>
            Trước khi thực hiện các kỹ thuật phải kiểm tra đối chiếu giấy chỉ định của các bác sĩ lâm sàng.
          </li>
          <li>
            Thực hiện các kỹ thuật phải chính xác trung thực, tiết kiệm vật tư hóa chất.
          </li>
          <li>
            Kết quả phải được ghi rõ ràng đầy đủ vào phiếu chỉ định   và vào sổ lưu theo quy định.Trước khi trả kết quả phải được trưởng khoa hoặc PTK ký duyệt kiểm soát.
          </li>
          <li>
            Nghiêm túc thực hiện quản lý hóa chất và thuốc thử theo đúng quy chế.
          </li>
          <li>
            Định kì nội kiểm chuẩn  xét nghiệm hằng ngày để đảm bảo chính xác các xét nghiệm.Tham gia gói ngoại kiểm hóa sinh , huyết học hàng tháng từ trung tâm kiểm chuẩn ĐHY Hà Nội
          </li>
          <li>
            Liên hệ chặt chẽ với các khoa lâm sàng thu nhận và xử lí các thông tin về chuyên môn kĩ thuật nhằm nâng cao chất lượng xét nghiệm, chẩn đoán hình ảnh  và thăm dò chức năng.
          </li>
          <li>
            Có kế hoạch mua sắm trang thiết bị , hoá chất , vật tư tiêu hao và các sinh phẩm để phục vụ cho công tác xét nghiệm, chẩn đoán hình ảnh và thăm dò chức năng trình Giám Đốc Bệnh viện phê duyệt.
          </li>
        </ul>
      </div>
      <div className={cx('info-technique')}>
        <h5>Các kĩ thuật thực hiện tại khoa</h5>
        <table className={cx('technique-table')}>
          <thead className={cx('technique-title')}>
            <tr>
              <th>Chẩn đoán hình ảnh</th>
              <th>Thăm dò chức năng</th>
              <th>Xét nghiệm</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={cx('technique-list')}>
            <tr className={cx('technique-item')}>
              <td>Siêu âm ổ bụng</td>
              <td>Điện não đồ</td>
              <td>Glucose</td>
              <td>Acid uric</td>
            </tr>
            <tr className={cx('technique-item')}>
              <td>Siêu âm ổ bụng</td>
              <td>Điện não đồ</td>
              <td>Glucose</td>
              <td>Acid uric</td>
            </tr>
            <tr className={cx('technique-item')}>
              <td>Siêu âm ổ bụng</td>
              <td>Điện não đồ</td>
              <td>Glucose</td>
              <td>Acid uric</td>
            </tr>
            <tr className={cx('technique-item')}>
              <td>Siêu âm ổ bụng</td>
              <td>Điện não đồ</td>
              <td>Glucose</td>
              <td>Acid uric</td>
            </tr>
            <tr className={cx('technique-item')}>
              <td>Siêu âm ổ bụng</td>
              <td>Điện não đồ</td>
              <td>Glucose</td>
              <td>Acid uric</td>
            </tr>
            <tr className={cx('technique-item')}>
              <td>Siêu âm ổ bụng</td>
              <td>Điện não đồ</td>
              <td>Glucose</td>
              <td>Acid uric</td>
            </tr>
            <tr className={cx('technique-item')}>
              <td>Siêu âm ổ bụng</td>
              <td>Điện não đồ</td>
              <td>Glucose</td>
              <td>Acid uric</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={cx('info-docter')}>
        <h5>Các bác sĩ trong khoa</h5>
        <DoctorList clas='info'/>
      </div>
    </div>
  )
}

export default DepartmantInfo