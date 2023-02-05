import React, { useCallback, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  //,[] 초기 랜더링 할 때 한 번만 읽음

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
      //preventDefault:기본동작 취소
    },
    [onInsert, value]
    /*
    setValue만 초기화하고 기본동작 취소
    onInsert, value 업데이트 되어야 함
    */
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      {/*onSubmit enter도 먹힘*/}
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAddCircle />
      </button>
    </form>
  );
};

export default TodoInsert;
