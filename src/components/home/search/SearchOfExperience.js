import React from "react";
import "./Search.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//className={scrollPosition < 60 ? '' : 'search_none'}

function SearchOfExperince() {
  return (
    <>
      <div className="search">
        <div className="search_in">
          <div className="search_location">
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

          <div className="search_location2">
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

export default SearchOfExperince;
