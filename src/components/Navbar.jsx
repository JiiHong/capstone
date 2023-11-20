import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <Link to='/'>
        {/* TODO: logo, css 변경 */}
        <img className='w-32 h-16 bg-sky-200' src='/logo192.png' alt='로고' />
      </Link>
      <nav>
        <ul>
          <li>게시판</li>
          <li>
            <Link to='/diary'>건강수첩</Link>
          </li>
          <li>
            <Link to='/diagnosis'>AI 간편진단</Link>
          </li>
          <li>
            <Link to='/dictionary'>반려견 백과사전</Link>
          </li>
        </ul>
        <Link to='/login'>
          <button>로그인</button>
        </Link>
      </nav>
    </header>
  );
}
