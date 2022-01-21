import Link from "next/link";

const linkStyled = {
    marginRight: '1rem',
  };
  
  function Header() {
    return (
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/About">
          <a>소개</a>
        </Link>
        <Link href="/ssr-csr-test">
          <a>SSR 테스트</a>
        </Link>
      </div>
    );
  }
  
  export default Header;