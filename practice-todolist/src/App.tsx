import { useState } from "react";
import "./App.css";

function App() {
  // タスクのリストを管理するステート
  const [tasks, setTasks] = useState([]);
  // 現在のタスク入力を管理するステート
  const [text, setText] = useState("");

  // 入力の変化を処理するハンドラー
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // タスクを追加するハンドラー
  const handleAddTask = () => {
    if (text.trim()) {
      setTasks([...tasks, text]);
      setText(""); // タスク追加後に入力をクリア
    }
  };

  // タスクを削除するハンドラー
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1 className="text-5xl mb-8 font-bold">Todoリスト with Typescript</h1>
      <div>
        <input
          type="text"
          className="border border-black py-2 rounded-lg px-1.5"
          value={text}
          onChange={handleChange}
        />
        <button
          type="button"
          className="border border-black"
          onClick={handleAddTask}
        >
          作成
        </button>
      </div>
      <div className="my-5">
        {tasks.length === 0 ? (
          <p>タスクはありません</p>
        ) : (
          tasks.map((task, index) => (
            <div key={index} className="mb-2">
              <input
                readOnly
                className="border border-black py-2 rounded-lg px-1.5 mr-2"
                value={task}
              />
              <input type="checkbox" className="mr-2" />
              <button
                type="button"
                className="border border-black p-1"
                onClick={() => handleDeleteTask(index)}
              >
                削除
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
