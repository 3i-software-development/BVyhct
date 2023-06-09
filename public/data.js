import { CiStethoscope } from "react-icons/ci";
import { MdAirlineSeatLegroomExtra} from "react-icons/md";
import { GiHeartOrgan,GiTripleNeedle,GiSkeletalHand,GiMedicines} from "react-icons/gi";
import { IoNutritionOutline} from "react-icons/io";
import { FaStethoscope } from "react-icons/fa";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export const MenuLink = [
  {
    title: "Trang chủ",
    link: "/",
  },
  {
    title: "Chuyên khoa",
    list: [
      {
        title: "Khoa Khám bệnh",
        link: "/departments/1",
      },
      {
        title: "Khoa Ngoại phụ",
        link: "/departments/2",
      },
      {
        title: "Khoa Nội tổng hợp",
        link: "/departments/3",
      },
      {
        title: "Khoa Châm cứu - PHCN",
        link: "/departments/4",
      },
      {
        title: "Khoa Xét nghiệm & Chẩn đoán hình ảnh.",
        link: "/departments/5",
      },
      {
        title: "Khoa Dược",
        link: "/departments/6",
      },
      {
        title: "Khoa Dinh dưỡng",
        link: "/departments/7",
      },
    ],
  },
  {
    title: "Bác sĩ",
    link: "/",
  },
  {
    title: "Tuyển dụng",
    link: "/",
  },
  {
    title: "Tin tức",
    link: "/news",
  },
  {
    title: "Khác",
    link: "/orther",
  },
];

export const ListNews = [
  {
    title: "THƯ MỜI CHÀO GIÁ",
    description:
      "Bệnh viện Y học cổ truyền Hà Đông đang có kế hoạch thực hiện gói thầu : Thu gom, vận chuyển, lưu giữ và xử lý chất thải nguy hại năm 2023. Kính đề nghị các đơn vị/nhà cung cấp quan tâm và có đủ điều kiện kinh doanh theo quy định của pháp luật, đủ kinh nghiệm tham gia gửi báo giá.",
    img: "/banner/doctor.jpeg",
    date: "March 21, 2023",
  },
  {
    title:
      "MỜI BÁO GIÁ CUNG CẤP DỊCH VỤ TƯ VẤN LỰA CHỌN NHÀ THẦU CUNG ỨNG THUỐC",
    description:
      "Bệnh viện Y học cổ truyền Hà Đông đang có kế hoạch thực hiện gói thầu : Thu gom, vận chuyển, lưu giữ và xử lý chất thải nguy hại năm 2023. Kính đề nghị các đơn vị/nhà cung cấp quan tâm và có đủ điều kiện kinh doanh theo quy định của pháp luật, đủ kinh nghiệm tham gia gửi báo giá.",
    img: "/banner/doctor.jpeg",
    date: "February 18, 2023",
  },
  {
    title:
      "Quyết định: Phê duyệt kế hoạch lựa chọn nhà thầu gói thầu ” Thu gom, vận chuyển, lữu giữ và xử lý chất thải nguy hại”",
    description:
      "Bệnh viện Y học cổ truyền Hà Đông đang có kế hoạch thực hiện gói thầu : Thu gom, vận chuyển, lưu giữ và xử lý chất thải nguy hại năm 2023. Kính đề nghị các đơn vị/nhà cung cấp quan tâm và có đủ điều kiện kinh doanh theo quy định của pháp luật, đủ kinh nghiệm tham gia gửi báo giá.",
    img: "/banner/doctor.jpeg",
    date: "January 19, 2023",
  },
  {
    title: "HỘI NGHỊ TỔNG KẾT CÔNG TÁC BỆNH VIỆN NĂM 2022 – KẾ HOẠCH NĂM 2023",
    description:
      "Bệnh viện Y học cổ truyền Hà Đông đang có kế hoạch thực hiện gói thầu : Thu gom, vận chuyển, lưu giữ và xử lý chất thải nguy hại năm 2023. Kính đề nghị các đơn vị/nhà cung cấp quan tâm và có đủ điều kiện kinh doanh theo quy định của pháp luật, đủ kinh nghiệm tham gia gửi báo giá.",
    img: "/banner/doctor.jpeg",
    date: "January 16, 2023",
  },
  {
    title: "THƯ MỜI CHÀO GIÁ",
    description:
      "Bệnh viện Y học cổ truyền Hà Đông đang có kế hoạch thực hiện gói thầu : Thu gom, vận chuyển, lưu giữ và xử lý chất thải nguy hại năm 2023. Kính đề nghị các đơn vị/nhà cung cấp quan tâm và có đủ điều kiện kinh doanh theo quy định của pháp luật, đủ kinh nghiệm tham gia gửi báo giá.",
    img: "/banner/doctor.jpeg",
    date: "March 21, 2023",
  },
  {
    title:
      "MỜI BÁO GIÁ CUNG CẤP DỊCH VỤ TƯ VẤN LỰA CHỌN NHÀ THẦU CUNG ỨNG THUỐC",
    description:
      "Bệnh viện Y học cổ truyền Hà Đông đang có kế hoạch thực hiện gói thầu : Thu gom, vận chuyển, lưu giữ và xử lý chất thải nguy hại năm 2023. Kính đề nghị các đơn vị/nhà cung cấp quan tâm và có đủ điều kiện kinh doanh theo quy định của pháp luật, đủ kinh nghiệm tham gia gửi báo giá.",
    img: "/banner/doctor.jpeg",
    date: "February 18, 2023",
  },
  {
    title:
      "Quyết định: Phê duyệt kế hoạch lựa chọn nhà thầu gói thầu ” Thu gom, vận chuyển, lữu giữ và xử lý chất thải nguy hại”",
    description:
      "Bệnh viện Y học cổ truyền Hà Đông đang có kế hoạch thực hiện gói thầu : Thu gom, vận chuyển, lưu giữ và xử lý chất thải nguy hại năm 2023. Kính đề nghị các đơn vị/nhà cung cấp quan tâm và có đủ điều kiện kinh doanh theo quy định của pháp luật, đủ kinh nghiệm tham gia gửi báo giá.",
    img: "/banner/doctor.jpeg",
    date: "January 19, 2023",
  },
  {
    title: "HỘI NGHỊ TỔNG KẾT CÔNG TÁC BỆNH VIỆN NĂM 2022 – KẾ HOẠCH NĂM 2023",
    description:
      "Bệnh viện Y học cổ truyền Hà Đông đang có kế hoạch thực hiện gói thầu : Thu gom, vận chuyển, lưu giữ và xử lý chất thải nguy hại năm 2023. Kính đề nghị các đơn vị/nhà cung cấp quan tâm và có đủ điều kiện kinh doanh theo quy định của pháp luật, đủ kinh nghiệm tham gia gửi báo giá.",
    img: "/banner/doctor.jpeg",
    date: "January 16, 2023",
  },
];

export const Categories = [
    {
        title: "Hoạt động bệnh viện",
        amount:80
    },
    {
        title: "Thông tin y học trong nước",
        amount:25
    },
    {
        title: "Thông tin y học nước ngoài",
        amount:81
    },
    {
        title: "Nghiên cứu khoa học",
        amount:45
    },
    {
        title: "Đào tạo – Tập huấn",
        amount:55
    }
]
export const departments = [
    {
        id:1,
        name: "Khoa Khám bệnh",
        description:[
            "Khám chữa bệnh đa khoa, kết hợp y học cổ truyền với y học hiện đại.",
            "Khám cấp giấy chứng nhận sức khỏe.",
            "Hợp đồng khám sức khỏe cho các cơ quan, doanh nghiệp, trường học,…",
            "Khám các chuyên khoa: Răng hàm mặt, tai mũi họng, mắt, phụ khoa, …"
        ],
        icon:<CiStethoscope/>,
    },
    {
        id:2,
        name: "Khoa Ngoại phụ",
        description:[
            "Điều trị bệnh hậu môn, trực tràng.",
            "Bệnh phụ khoa, nam khoa, vô sinh hiếm muộn.",
            "Bệnh hệ sinh dục, tiết niệu, da liễu.",
            "Bệnh ngũ quan, chấn thương.",
            "Bệnh cơ xương khớp."
        ],
        icon:<MdAirlineSeatLegroomExtra/>,
    },
    {
        id:3,
        name: "Khoa Nội tổng hợp",
        description:[
            "Các bệnh lý tim mạch.",
            "Bệnh lý xương khớp.",
            "Bệnh rối loạn chuyển hóa.",
            "Các bệnh đường tiêu hóa.",
            "Các bệnh về thần kinh."
        ],
        icon:<GiHeartOrgan/>,
    },
    {
        id:4,
        name: "Khoa Châm cứu - PHCN",
        description:[
            "Di chứng liệt (Di chứng tai biến mạch máu não, chấn thương cột sống, chấn thương sọ não).",
            "Mất chức năng vận động sau tai nạn giao thông, tai nạn sinh hoạt.",
            "Thoát vị đĩa đệm, thoái hóa cột sống cổ, cột sống thắt lưng.",
        ],
        icon:<GiTripleNeedle/>,
    },
    {
        id:5,
        name: "Khoa Xét nghiệm & Chẩn đoán hình ảnh",
        description:[
            "Chẩn đoán hình ảnh: Siêu âm ổ bụng,Siêu âm thai,Siêu âm Dopler mạch,…",
            "Thăm dò chức năng: Điện não đồ, Loãng xương, điện tim, nội soi dạ dày,…",
            "Xét nghiệm: Glucose, cholesterol, Nhóm máu, Acid uric,…",
        ],
        icon:<GiSkeletalHand/>,
    },
    {
        id:6,
        name: "Khoa Dược",
        description:[
            "Bào chế , sản xuất thuốc cổ truyền, thuốc dược liệu.",
            "Cơ sở thực hành của các trường Đại học, Cao đẳng và Trung học về dược.",
        ],
        icon:<GiMedicines/>,
    },
    {
        id:7,
        name: "Khoa Dinh dưỡng",
        description:[
            "Tư vấn và điều trị bằng chế độ dinh dưỡng.",
            "Truyền thông về dinh dưỡng và an toàn thực phẩm,…",
        ],
        icon:<GiMedicines/>,
    },

]
// ];

export const ListTimeBook = [
  '8:00','8:30','9:00','9:30','10:00','10:30','13:30','14:00','14:30','15:00','15:30','16:00'
]
export const ListDateBook = [
  {
    date:dayjs().format('D/M'),
    text:'Hôm nay'
  },
  {
    date:dayjs().add(1, 'day').format('D/M'),
    text:'Ngày mai'
  },
  {
    date:dayjs().add(2, 'day').format('D/M'),
    text:'Ngày kia'
  }
]

export const ListDoctor = [
  {
    img: "/banner/doctor.jpeg",
    title: "Tên bác sĩ 1",
    city: "Hà nội"
  },
  {
    img: "/banner/doctor.jpeg",
    title: "Tên bác sĩ 2",
    city: "Hà nội"
  },
  {
    img: "/banner/doctor.jpeg",
    title: "Tên bác sĩ 3",
    city: "Hà nội"
  },
  {
    img: "/banner/doctor.jpeg",
    title: "Tên bác sĩ 4",
    city: "Hà nội"
  }
]
