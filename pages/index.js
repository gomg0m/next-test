import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../src/components/Layout'



function index() {
  const linkStyle = {
    marginRight: '1rem',
  };

  return (
    <Layout>
      {/* next/head를 사용해서 현재 탭의 이름을 변경할 수 있다. */}
      <Head>
        <title>Index 페이지</title>
      </Head>
      <h1>안녕</h1>
      <h2>
        {/* 해당 소개글을 누루면 about로 이동하며 CSR로 작동한다 */}
        <Link href="/About">
          <a style={linkStyle}>소개글</a>
        </Link>
        <Link href="/card">
          <a>카드</a>
        </Link>
      </h2>
    </Layout>
  );
}
export default index;