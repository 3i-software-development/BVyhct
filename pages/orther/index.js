import React, { useState } from 'react';
import style from "@/views/service/style.module.scss";
import classNames from "classnames/bind";
import BannerImg from '@/components/Banner/BannerImg';
import { FiChevronsRight } from "react-icons/fi";
import Link from 'next/link';
import Price from '@/views/service/price';


const cx = classNames.bind(style);

const Orther = () => {

    let [buttonOrther, setButton] = useState(1);

    return (
        <div className={cx('news-container')}>
            <BannerImg title="Dịch vụ" />
            <div className={cx('news-main')}>

                <div className={cx('orther-button')}>
                    <ul style={{ paddingLeft: "0" }}>
                        <li style={{ paddingLeft: "0" }}><button className={cx(buttonOrther == 1 && 'button-click')} onClick={() => setButton(1)} >Quy trình khám chữa bệnh</button></li>
                        {/* <li><FiChevronsRight/></li> */}
                        <li><button className={cx(buttonOrther == 2 && 'button-click')} onClick={() => setButton(2)}>Mức hưởng BHYT</button></li>
                        {/* <li><FiChevronsRight/></li> */}
                        <li><button className={cx(buttonOrther == 3 && 'button-click')} onClick={() => setButton(3)}>Giá dịch vụ kỹ thuật</button></li>
                    </ul>
                </div>

                <div>

                    {
                        buttonOrther == 1 && <div className={cx('orther-bottom')}>
                            <h3><b>Bước 1: Bàn hướng dẫn khoa Khám bệnh</b></h3>
                            <p>
                                – Lấy số thứ tự chờ đến lượt vào đăng ký khám sức khỏe tại cây bấm số tự động.<br />

                                – Xuất trình ảnh chân dung cỡ 04cm x 06cm chụp trên nền trắng để nhân viên y tế đối chiếu ảnh trong hồ sơ khám sức khỏe với người khám sức khỏe. <br />

                                – Đối với các trường hợp quy định tại khoản 3 điều 4 thông tư 14/2013 TT-BYT thì người giám hộ của người khám sức khỏe phải xuất trình CMND hoặc hộ chiếu để kiểm tra đối chiếu.<br />
                            </p>

                            <h3><b>Bước 2: Phòng 103</b></h3>
                            <p>
                                – Làm thủ tục hành chính, đo chiều cao cân nặng, tính chỉ số BMI.<br />

                                – Khám tai mũi họng.
                            </p>

                            <h3><b>Bước 3: Phòng 102</b></h3>
                            <p>
                                – Đếm mạch, đo huyết áp.<br />

                                – Khám và chỉ định cận lâm sàng (Tùy vào mục đích sử dụng của giấy khám sức khỏe và yêu cầu của người đến khám).<br />

                                – Lập bảng kê chi phí khám sức khỏe theo quy định.<br />

                                – Khám da liễu.<br /></p>

                            <h3><b>Bước 4: Phòng 105</b></h3>
                            <p>
                                – Khám mắt.<br />

                                – Khám răng hàm mặt.<br />
                            </p>

                            <h3><b>Bước 5: Phòng 106 khám tâm thần.</b></h3>
                            <h3><b>Bước 6: Phòng 108 thanh toán chi phí khám sức khỏe.</b></h3>
                            <h3><b>Bước 7: Khám cận lâm sàng (nếu có) tại khoa xét nghiệm và CĐHA</b></h3>
                            <p>
                                – Phòng 202: Làm xét nghiệm máu, xét nghiệm nước tiểu.<br />

                                – Phòng 203: Siêu âm.<br />

                                – Phòng 204: Điện tim, Điện não.<br />

                                – Phòng 113: Chụp Xquang.
                                </p>
                            <h3><b>Bước 8: Phòng 210 khoa Ngoại phụ khám ngoại khoa, sản phụ khoa.</b></h3>
                            <h3><b>Bước 9: Phòng 310 khoa Nội khám tuần hoàn, hô hấp, tiêu hóa, cơ xương khớp, thần kinh.</b></h3>
                            <h3><b>Bước 10: Phòng 202 khoa xét nghiệm và CĐHA  nhận kết quả khám cận lâm sàng (nếu có).</b></h3>
                            <h3><b>Bước 11: Phòng 103 chờ kết luận, nhân bản (nếu có yêu cầu). Kết thúc khám.</b></h3>

                        </div>
                    }
                    {buttonOrther == 2 && <div>
                        <p><b>Khám bệnh, chữa bệnh đúng tuyến</b> <br /></p>
                        <div className={cx('orther-table')}>
                            <table >
                                <tbody>
                                    <tr style={{height:"40px"}}>
                                        <th  className='col-md-1'>STT</th>
                                        <th className='col-md-3'>Quyền lợi hưởng</th>
                                        <th className='col-md-8'>Đối tượng hưởng</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>100% Chi phí khám chữa bệnh</td>
                                        <td>
                                            – Trẻ em dưới 6 tuổi <br />

                                            – Đối với người có công với cách mạng <br />

                                            – Đối tượng đang công tác trong lực lượng Công an nhân dân, Quân đội nhân dân<br />

                                            – Đối tượng khám bệnh, chữa bệnh tại tuyến xã<br />

                                            – Trong trường hợp tổng chi phí 1 lần khám chữa bệnh thấp hơn 15%mức lương cơ sở<br />

                                            – Đối tượng tham gia BHYT liên tục 5 năm trở lên tính từ thời điểm đi KCB đúng tuyến và có số tiền cùng chi trả chi phí KCB BHYT lũy kế  trong năm lớn hơn 6 tháng lương cơ sở. Người bệnh có trách nhiệm lưu giữ chứng từ thu phần chi phí cùng chi trả làm căn cứ để cơ quan BXHH cấp “Giấy chứng nhận không cùng chi trả trong năm”
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>95% Chi phí khám chữa bênh</td>
                                        <td>
                                            – Đối với người đang hưởng lương hưu, người thuộc diện hưởng trợ cấp bảo trợ xã hội, trợ cấp mất sức lao động hàng tháng.<br />

                                            – Người thuộc hộ gia đình nghèo<br />

                                            – Người dân tộc thiểu số đang sinh sống tại vùng có điều kiện kinh tế – xã hội khó khăn, đặc biệt khó khăn<br />

                                            – Thân nhân của liệt sỹ (bố, mẹ, vợ, con đẻ)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>80% Chi phí khám chữa bệnh</td>
                                        <td>
                                            – Đối với các đối tượng tham gia BHYT khác không thuộc đối tượng hưởng trên (bao gồm cả NLĐ tham gia BHYT bắt buộc và tự nguyện).
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h3>
                                <b>– Khám bệnh, chữa bệnh không đúng tuyến (trái tuyến, vượt tuyến) như sau:</b>
                        
                            </h3>
                            <p>
                                + KCB tại bệnh viện tuyến huyện: 100% chi phí khám, chữa bệnh theo phạm vi và mức hưởng quy định;<br />

                                + KCB tại bệnh viện tuyến tỉnh: Mức hưởng bằng 60% chi phí điều trị nội trú theo phạm vi và mức hưởng quy định;<br />

                                + KCB tại bệnh viện tuyến trung ương: Mức hưởng bằng 40% chi phí điều trị nội trú theo phạm vi và mức hưởng quy định;

                            </p>
                            <h3><b>Lưu ý:</b></h3>
                            <p>

                                – Đối với các trường hợp trong tình trạng cấp cứu được hưởng 100%chi phí điều trị nội trú.<br />

                                – Trường hợp một người thuộc nhiều đối tượng tham gia BHYT thì được hưởng quyền lợi BHYT theo đối tượng có quyền lợi cao nhất.<br />

                                – Từ ngày 01/01/2016, thông tuyến KCB xã, huyện trong cùng địa bàn tỉnh: người tham gia BHYT đăng ký khám bệnh, chữa bệnh ban đầu tại trạm y tế tuyến xã hoặc phòng khám đa khoa hoặc bệnh viện tuyến huyện được quyền khám bệnh, chữa bệnh bảo hiểm y tế tại trạm y tế tuyến xã hoặc phòng khám đa khoa hoặc bệnh viện tuyến huyện trong cùng địa bàn tỉnh có được chi trả theo mức hưởng đúng tuyến<br />

                                – Người thuộc hộ gia đình nghèo; người dân tộc thiểu số đang sinh sống tại vùng có điều kiện kinh tế – xã hội khó khăn, người đang sinh sống tại vùng có điều kiện kinh tế – xã hội đặc biệt khó khăn; người tham gia BHYT đang sinh sống tạ xã đảo, huyện đảo khi tự đi KCB không đúng tuyến được quỹ BHYT thanh toán chi phí KCB đối với bênh viện tuyến huyện, điều trị nội trú với bệnh viện tuyến tỉnh, tuyến trung ương và có mức hưởng 100% chi phí khám, chữa bệnh.<br />

                                – Đối với các trường hợp đi KCB chưa có thẻ BHYT cấp lại do mất, hỏng,…thì đối tượng tham gia BHYT thực hiện thanh toán như trường hợp thông thường qua giấy hẹn của cơ quan BHXH cung cấp, hồ sơ theo hướng dẫn <a><b>tại đây</b></a><br />
                            </p>
                        </div>
                    </div>}
                    {buttonOrther == 3 && <div>
                        <Price/>
                        </div>}

                </div>



            </div>

        </div >
    )
}
export default Orther;