import React, { useEffect, useState } from "react";

import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faGlobe,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchOfBasic from "../../home/search/SearchOfBasic";
import SearchOfExperince from "../../home/search/SearchOfExperience";

function Header({ scrollPosition, setScrollPosition }) {
  const [button, setButton] = useState(0);

  const handleClickButton = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === "숙소") {
      setButton(0);
    }
    if (e.target.innerText === "체험") {
      setButton(1);
    }
  };

  //! header 변경 함수
  //! window.scrollY : 문서가 수직으로 얼마나 스크롤 됐는지 픽셀 단위로 반환한다
  //! document.documentElement.scrollTop : y축 방향으로 스크롤한 거리
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <>
      <div className={scrollPosition < 60 ? "header" : "header_change"}>
        {scrollPosition < 60 ? (
          button === 0 ? (
            <SearchOfBasic />
          ) : (
            <SearchOfExperince />
          )
        ) : null}
        <div className="header_in">
          <div style={{ textDecoration: "none" }} className="header_logo_group">
            <FontAwesomeIcon
              className={
                scrollPosition < 60 ? "header_logo" : "header_logo_red"
              }
              icon={faAirbnb}
            />
            <span
              className={
                scrollPosition < 60 ? "header_logoname" : "header_logoname_red"
              }
            >
              airbnb
            </span>
          </div>

          {scrollPosition < 60 ? (
            <div className="header_button_group">
              <div style={{ textDecoration: "none" }}>
                <div className="header_button_group_in">
                  <span onClick={handleClickButton} className="header_button">
                    숙소
                  </span>
                  <span
                    className={
                      button === 0 ? "header_underbar_black" : "header_underbar"
                    }
                  ></span>
                </div>
              </div>

              <div style={{ textDecoration: "none" }}>
                <div className="header_button_group_in">
                  <span onClick={handleClickButton} className="header_button">
                    체험
                  </span>
                  <span
                    className={
                      button === 1 ? "header_underbar_black" : "header_underbar"
                    }
                  ></span>
                </div>
              </div>
              <div
                onClick="location.href='/online/experience';"
                className="header_button_group_in"
              >
                <span className="header_button">온라인 체험</span>
                <span className="header_underbar"></span>
              </div>
            </div>
          ) : (
            <div className="header_button_group">
              <div className="header_scroll_search">
                <span className="header_scroll_search_text">검색 시작하기</span>
                <span className="header_scroll_search_button">
                  <FontAwesomeIcon
                    className="header_scroll_search_icon"
                    icon={faSearch}
                  />
                </span>
              </div>
            </div>
          )}

          <div className="header_user_group">
            <span className="header_host">호스트 되기</span>
            <FontAwesomeIcon className="header_globe" icon={faGlobe} />
            <span className="header_user">
              <FontAwesomeIcon className="header_burger" icon={faBars} />
              <FontAwesomeIcon
                className="header_usercircle"
                icon={faUserCircle}
              />
            </span>
          </div>
        </div>
      </div>

      <div className="search_app_padding">
        <div className="search_app">
          <FontAwesomeIcon className="search_appicon" icon={faSearch} />
          <input
            className="search_appinputtext"
            type="text"
            placeholder="어디로 여행가세요?"
          ></input>
        </div>
      </div>
    </>
  );
}

export default Header;
