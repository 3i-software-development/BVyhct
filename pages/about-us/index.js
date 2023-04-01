import React from 'react'
import style from './style.module.scss';
import classNames from "classnames/bind";
import Image from "next/image";
import YHDT from "@/public/introduce/yhdt.jpg";
import YHCY from "@/public/introduce/yhcy.jpg";
import BannerImg from "@/components/Banner/BannerImg.js";

const cx = classNames.bind(style);

const index = () => {
  return (
    <div className={cx('container')}>
        <BannerImg title="Giới thiệu"/>
        <h4>Bệnh viện Y học cổ truyền Hà Đông</h4>
        <Image src= {YHDT} alt="YHDT" width='1000' height='500' className={cx('image')}/>
        
        <p>Bệnh viện Y học cổ truyền (YHCT) Hà Đông tiền thân là Bệnh viện Đông y tỉnh Hà Tây thành lập theo Quyết định số 1021/TCCB ngày 20 tháng 5 năm 1968 của Ủy ban Hành chính tỉnh Hà Tây.</p>
        <p>Thời điểm này cuộc kháng chiến chống Mỹ cứu nước đang sôi sục với khí thế của Chiến dịch Mậu Thân (1968); đánh bại cuộc chiến tranh phá hoại miền Bắc lần thứ nhất của Mỹ và chuẩn bị đương đầu với không quân Mỹ ra miền Bắc lần thứ hai… Bệnh viện Đông y Hà Tây ra đời với nhiệm vụ kế thừa và phát huy vốn quý của Đông y, kết hợp với Tây y để chăm sóc sức khỏe nhân dân, cán bộ chiến sĩ trên địa bàn, phục vụ sản xuất và phục vụ chiến đấu.</p>
        <p>Trong lúc đất nước gặp muôn vàn khó khăn, thiếu thốn, từ thuốc men, trang thiết bị y tế, cũng như các điều kiện khác để thực hiện nhiệm vụ khám bệnh, chữa bệnh cho nhân dân và chiến sỹ. Việc ra đời cơ sở khám, chữa bệnh bằng phương pháp Y học cổ truyền là hết sức cần thiết, với nhiệm vụ kế thừa, phát huy những bài thuốc hay những phương pháp chữa bệnh độc đáo của nhân dân. Việc mời các lương y có nhiều kinh nghiệm khám chữa bệnh và các lương y có các bài thuốc gia truyền độc đáo đến bệnh viện truyền thụ để tiếp thu, chỉnh lý và áp dụng vào điều trị là yếu tố đảm bảo cho bệnh viện hoạt động hiệu quả.</p>
        <p>Ngày đầu thành lập Bệnh viện Đông y Hà Tây chỉ có quy mô 50 giường bệnh, đặt tại Khoa nhi của Bệnh viện Sơn Tây (Thị xã Sơn Tây) với 35 cán bộ, trong đó duy nhất 1 bác sĩ và 1 dược sĩ đại học, 2 lương y, 4 y sỹ, 1 dược sỹ trung học và một số cán bộ khác&#8230; Tuy lực lượng mỏng, cơ sở vật chất cực kỳ thiếu thốn, việc sử dụng YHCT để chăm sóc sức khỏe lúc đó còn hạn chế song Bệnh viện luôn cố gắng hoàn thành tốt nhiệm vụ được giao, liên tục được Ty Y tế tỉnh Hà Tây đánh giá là đơn vị hoàn thành tốt nhiệm vụ được giao.</p>
        <p><strong>Thời kỳ thuộc tỉnh Hà Sơn Bình (1976 -1991)</strong></p>
        <Image src={YHCY} alt="YHCY" width='1000' height='500' className={cx('image')}/>
        <p><strong>Giai đoạn 1976-1982</strong></p>
        <p>Sau khi thành lập tỉnh Hà Sơn Bình bệnh viện vẫn đóng trên địa bàn Thị xã Sơn Tây; trong khi Thị xã Sơn Tây đã sáp nhập vào Thành phố Hà Nội. Thời kỳ này bệnh viện gặp rất nhiều khó khăn, từ tiếp nhận bệnh nhân, lương thực, thực phẩm, thuốc men đều tiếp nhận từ các huyện xa, phương tiện đi lại, vận chuyển chủ yếu bằng xe đạp. Cơ sở vật chất thiếu thốn, nhà cửa xuống cấp, chưa được cải tạo sửa chữa kịp thời, điều kiện làm việc hạn chế khiến tư tưởng cán bộ chưa thực sự yên tâm, ảnh hưởng không nhỏ tới hoạt động của bệnh viện. Tuy vậy, cấp ủy Đảng và lãnh đạo bệnh viện đã cố gắng thực hiện tốt vai trò lãnh đạo, tổ chức thực hiện hoàn thành nhiệm vụ chính trị của đơn vị.</p>
        <p><strong>Giai đoạn 1982-1991</strong></p>
        <p>Tháng 2/1982 bệnh viện được chuyển trụ sở về số 80 Quang Trung Thị xã Hà Đông (Văn phòng Sở Y tế cũ), đến tháng 5/1989 bệnh viện được chuyển trụ sở về số 99 Nguyễn Viết Xuân phường Quang Trung Hà Đông.</p>
        <p>Lúc này địa bàn của tỉnh rất rộng lớn với nhiều huyện miền núi, vùng sâu, vùng xa, nơi bà con dân tộc sinh sống, đòi hỏi Bệnh viện phải rất nỗ lực để đảm bảo hoạt động, hoàn thành nhiệm vụ chính trị. Tuy vậy, bệnh viện cũng khai thác được nhiều thế mạnh như bài thuốc cổ truyền của đồng bào dân tộc các vùng miền, vận dụng vào thực tế chuyên môn, làm phong phú thêm và nâng cao năng lực y, dược học cổ truyền của đơn vị.</p>
        <p><strong>Thời kỳ tái lập tỉnh Hà Tây (1991 – 2008)</strong></p>
        <p>Là thời kỳ Bệnh viện có bước phát triển nhanh chóng và khá toàn diện. Cơ sở tuy chật hẹp nhưng được đầu tư cải tạo, nâng cấp khang trang hơn; trang thiết bị dần được bổ sung tương thích với yêu cầu chẩn đoán, điều trị và sản xuất thuốc cho quy mô 120 giường bệnh. Đội ngũ thầy thuốc được tăng cường với 19 bác sĩ (3 bác sĩ CK II, 8 bác sĩ CK I); 1 dược sĩ CK I; 6 cử nhân và cao đẳng điều dưỡng; 31 cán bộ trung cấp y, 8 cán bộ trung cấp dược. Bệnh viện đã xây dựng được 8 khoa, phòng chức năng, trở thành tuyến khám chữa bệnh bằng YHCT cao nhất của tỉnh thực hiện các nhiệm vụ khám, chữa bệnh; kế thừa, nghiên cứu khoa học; đào tạo chuyên môn; chỉ đạo tuyến; phòng, chống dịch; tuyên truyền giáo dục sức khỏe cho cộng đồng; bào chế thuốc YHCT cho hoạt động của bệnh viện; quản lý kinh tế và hợp tác quốc tế.</p>
        <p><strong>Trong đội hình Y tế Thủ đô (từ 2008 đến nay)</strong></p>
        <p>Đây cũng là khoảng thời gian Bệnh viện YHCT Hà Đông có bước phát triển vượt bậc về chiều sâu và mở rộng quy mô bệnh viện; tiếp nhận thêm cơ sở 23 Nguyễn Viết Xuân, nâng quy mô bệnh viện từ 120 lên 200 giường bệnh. Nâng hạng bệnh viện từ Bệnh viện hạng III lên bệnh viện hạng II, là một trong 2 bệnh viện đầu ngành về YHCT của TP Hà Nội và là tuyến khám chữa bệnh bằng Y học cổ truyền cao nhất của Thủ đô. Trang thiết bị hiện đại được tăng cường cho phép kết hợp Đông y và Tây y ở trình độ cao trong hoạt động chuyên môn. Từ năm 2009 bệnh viện đã được bổ sung nhiệm vụ khám bệnh đa khoa, đăng ký khám chữa bệnh ban đầu cho bệnh nhân có thẻ Bảo hiểm y tế. Bệnh viện đã được UBND TP Hà Nội giao bổ sung nhiệm vụ khám, chữa bệnh cho cán bộ thuộc diện quản lý của Ban bảo vệ sức khỏe Thành phố. Kết quả thực hiện chức năng này đã được cán bộ và người bệnh đánh giá cao, chất lượng khám chữa bệnh ngày một nâng cao. Bệnh viện luôn thực hiện tốt công tác nghiên cứu khoa học, bệnh viện tham gia nhiều đề tài nghiên cứu khoa học cấp Bộ Y tế, cấp Thành phố Hà Nội, nhiều đề tài nghiên cứu khoa học cấp cơ sở. Các đề tài này đã được nghiệm thu và được áp dụng có hiệu quả tại bệnh viện. Đội ngũ thầy thuốc hiện có 175 người, được đào tạo bài bản và nâng cao, trong đó có 55 bác sĩ (4 bác sĩ CKII; 11 Thạc sỹ, 11 CKI); 04 dược sĩ đại học (01dược sỹ CKI); 17 cử nhân, cao đẳng ĐD; 8 cử nhân kinh tế; 95 cán bộ trung học và cán bộ khác. Bệnh viện hiện có 11 khoa, phòng; làm chủ nhiều kỹ thuật, áp dụng nhiều phương pháp công nghệ cao trong chẩn đoán và điều trị như phẫu thuật trĩ bằng điện cao tần (máy ZZ2D); Điều trị trĩ bằng phương pháp khâu treo triệt mạch; Phục hồi chức năng cho bệnh nhân tai biến mạch máu não bằng điều trị và phục hồi chức năng; điều trị các bệnh tiểu đường, mỡ máu, gout…bằng kết hợp YHCT với YHHĐ. Triển khai khoa phục hồi chức năng thực hiện nhiều kỹ thuật mới như: Xung kích điều trị, Laser nội mạch, Laser chiếu ngoài, từ trường điều trị, siêu âm điều trị, kéo giãn cột sống, điện xung, điện phân điều trị, Chôn chỉ, bó parafin… Đã triển khai sản xuất một số dạng thuốc cao, đơn, hoàn, tán phục vụ cho công tác điều trị được bệnh nhân tín nhiệm.</p>
            
      
    </div>
  )
}

export default index