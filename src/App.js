import React, { useState } from "react";
import { Route, Switch } from "react-router";

import "./App.css";

import Notice from "./components/common/notice/Notice";
import Header from "./components/common/header/Header";
import Home from "./pages/Home";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  //console.log(scrollPosition)
  //! header 변경 함수
  //! window.scrollY : 문서가 수직으로 얼마나 스크롤 됐는지 픽셀 단위로 반환한다
  //! document.documentElement.scrollTop : y축 방향으로 스크롤한 거리
  // const updateScroll = () => {
  //   setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  // };
  //console.log(scrollPosition)

  // useEffect(() => {
  //   window.addEventListener('scroll', updateScroll);
  // });

  return (
    <>
      <Notice />
      <Header
        scrollPosition={scrollPosition}
        setScrollPosition={setScrollPosition}
      />

      <Home />
      {/* <Switch>
        <Route exact path='/basic'>
            <SearchOfBasic  scrollPosition={scrollPosition} setScrollPosition={setScrollPosition}/>
        </Route>
        <Route exact path='/experience'>
            <SearchOfExprience scrollPosition={scrollPosition} setScrollPosition={setScrollPosition}/>
        </Route>
      </Switch> */}
    </>
  );
}

export default App;
