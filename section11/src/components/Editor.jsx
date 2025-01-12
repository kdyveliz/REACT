import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./Editor.css";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      return;
    }
    onCreate(content);
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 To do ..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
