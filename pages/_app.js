import '../styles/globals.css'
import Top from '../src/components/Top'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
    </div>
    )
}

export default MyApp
