import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
      <Outlet />
    </div>
  );
};

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: "tomato",
    fontSize: 21,
  };

  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        //백틱처리시 객체처리해야(변수처럼 묶어줘여 됨)
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;
