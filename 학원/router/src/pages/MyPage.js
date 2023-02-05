import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false;
  //isLoggedIn false면 login페이지로 이동하고 현재페이지 기록에 남기지 않음
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
    //마이페이지에 대한 기록이 있으면 안 됨
  }
  return <div>마이페이지</div>;
};

export default MyPage;
