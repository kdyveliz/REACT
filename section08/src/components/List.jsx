import "./List.css";
import TodoItem from "./Todoitem";

const List = ({ todos }) => {
  return (
    <div className="List">
      <h4>To do List 🌱</h4>
      <input placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {todos.map((todo) => {
          return <TodoItem {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
