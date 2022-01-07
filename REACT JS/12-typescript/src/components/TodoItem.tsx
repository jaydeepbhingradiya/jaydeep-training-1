import React from "react";
import "./TodoItem.css";

const TodoItem: React.FC<{ item: string; onRemoveTodo: () => void }> = (
  props
) => {
  const deleteHandler = () => {};
  return (
    <li onClick={props.onRemoveTodo} className="item">
      {props.item}
    </li>
  );
};

export default TodoItem;
