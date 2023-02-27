import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useMediaQuery } from 'react-responsive'

const inter = Inter({ subsets: ['latin'] })

export default function Home(){

const isDesktopOrLaptop = useMediaQuery({
  query: '(min-width: 1001px)'
})
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })
const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })


  return (
    <>
      <Head>
        <title>Strive</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./strive.png" />
        <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className={styles.form}>
        <div className={styles.header}></div>
        
     
    <div>
      <img width="300px" src='./strive.png' alt=''/>
    </div>
    <div>
    {
      
isDesktopOrLaptop ?
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd3I-BbYrAr83lx6e2ORHroFdFYAcpyu_89rd_Hi87x9Kn7Ng/viewform?embedded=true" width="900" height="1006" >Loading…</iframe>

:
isPortrait ?
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd3I-BbYrAr83lx6e2ORHroFdFYAcpyu_89rd_Hi87x9Kn7Ng/viewform?embedded=true" width="320" height="1006" >Loading…</iframe>

:
isTabletOrMobile ?
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd3I-BbYrAr83lx6e2ORHroFdFYAcpyu_89rd_Hi87x9Kn7Ng/viewform?embedded=true" width="320" height="1006" >Loading…</iframe>

:null
    }

    </div>
       
      </div>
    </>
  )
}
