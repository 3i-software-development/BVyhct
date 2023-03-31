import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from '@/styles/Home.module.css';
import classNames from "classnames/bind";
import Banner from '@/components/Banner/Banner';
import Introduce from '@/views/home/Introduce';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deapartments from '@/views/home/Deapartments';
import News from '@/views/home/News';
import Introduce2 from '@/views/home/Introduce2';
import Logo from '@/public/assets/logo.png';
import Price from '@/views/service/price';

const cx = classNames.bind(style);

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
    <title>Bệnh viện y học cổ truyền Hà Đông</title>
      <meta name="description" content="Tận tâm - Thân thiện - Trách nhiệm - hiệu quả" />
      {/* <link rel="icon" href={Logo.src} /> */}
      {/* <link rel="icon" type="image/png" sizes="20x20" href='/logo.png' /> */}
      <link rel="icon" href="/logo.png"/>
    </Head>
     <div className={cx('container')}>
      <Banner/>
      <Introduce2/>
      <Introduce/>
      <Deapartments/>
      <News/>
      <Price />
     </div>
    </>
  )
}
