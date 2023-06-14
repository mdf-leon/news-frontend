import React from "react";
// import { ChevronLeftIcon, PersonIcon } from "@primer/octicons-react";
// import { useRecoilState } from "recoil";
// import { ReactComponent as ArrowBack } from "../assets/svg/arrow-back.svg"; 

function TopNav() {  

  return (
    <header className="sticky top-0 min-h-[3.125rem] border align-middle flex content-center align-center items-center justify-between">
      <ul>
        <li>
          <a className="mx-1" href="/home">home</a>
          <a className="mx-1" href="/register">register</a>
          <a className="mx-1" href="/login">login</a>
          <a className="mx-1" href="/news">Articles</a>
          <a className="mx-1" href="/news/CreateArticle">CreateArticle</a>
        </li>
      </ul>
    </header>
  );
}

export default TopNav;
