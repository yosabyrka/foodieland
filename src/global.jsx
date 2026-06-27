import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import favicon96 from '@/assets/favicons/favicon-96x96.png'
import faviconSvg from '@/assets/favicons/favicon.svg'
import faviconIco from '@/assets/favicons/favicon.ico'
import appleTouchIcon from '@/assets/favicons/apple-touch-icon.png'
import manifest from '@/assets/favicons/site.webmanifest'

export default (props) => {
  const { children, title } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Foodieland | {title}</title>
        <script src="/src/main.js" type="module" />
        <link rel="icon" type="image/png" href={favicon96} sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href={faviconSvg} />
        <link rel="shortcut icon" href={faviconIco} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <meta name="apple-mobile-web-app-title" content="Foodieland" />
        <link rel="manifest" href={manifest} />
      </Head>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
