import React, { useState } from "react";

import "./Search.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchLocation from "../searchSub/SearchLocation";
import CheckDate from "../searchSub/CheckDate";
import Personal from "../searchSub/Personal";

function SearchOfBasic() {
  //! useState
  const [searchModal, setSearchModal] = useState("");

  const handleClickLocaion = (num) => {
    setSearchModal(num);
  };

  return (
    <>
      <div className="search_modal">
        {searchModal === 1 ? <SearchLocation /> : null}
        {searchModal === 2 ? <CheckDate /> : null}
        {searchModal === 3 ? <Personal /> : null}
      </div>
      <div className="search">
        <div className="search_in">
          <div
            value="위치"
            onClick={() => handleClickLocaion(1)}
            className="search_location"
          >
            <label>
              <div className="search_boldtext">위치</div>
              <input
                className="search_inputtext"
                type="text"
                placeholder="어디로 여행가세요?"
              ></input>
            </label>
          </div>

          <span className="search_bar"></span>

          <div
            onClick={() => handleClickLocaion(2)}
            value="체크"
            className="search_location"
          >
            <label>
              <div className="search_boldtext">체크인</div>
              <div className="search_inputtext">날짜 입력</div>
            </label>
          </div>

          <span className="search_bar"></span>

          <div
            onClick={() => handleClickLocaion(2)}
            value="체크"
            className="search_location"
          >
            <div>
              <label>
                <div className="search_boldtext">체크아웃</div>
                <div className="search_inputtext">날짜 입력</div>
              </label>
            </div>
          </div>

          <span className="search_bar"></span>

          <div
            onClick={() => handleClickLocaion(3)}
            value="인원"
            className="search_location"
          >
            <label className="search_button">
              <div className="search_boldtext">인원</div>
              <div className="search_inputtext">게스트 추가</div>
            </label>

            <span className="search_findbutton">
              <FontAwesomeIcon className="search_findicon" icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchOfBasic;
