import { MdAddCircle } from "react-icons/md";

import "./TodoInsert.scss";

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요." />
      <button type="submit">
        <MdAddCircle />
      </button>
    </form>
  );
};

export default TodoInsert;
