import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
//http://localhost:3000/about?detail=true&mode=1
const About = () => {
  //   const location = useLocation(); //쿼리스트링
  //key value 값 버전 6 이상에서는 인식("react-router-dom": "^6.8.0",)
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  //get(key값)
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ detail: detail === "true" ? false : true, mode });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ detail, mode: nextMode });
  };
  return (
    <div>
      <h1>소개 합니다</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
      <p>detail :{detail}</p>
      <p>mode :{mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode +1</button>
    </div>
  );
};

export default About;
