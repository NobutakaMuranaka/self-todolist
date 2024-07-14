import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-5xl mb-8 font-bold">Todoリスト with Typescript</h1>
      <div>
        <input className="border border-black py-2 rounded-lg px-1.5"></input>
        <button className="border border-black">作成</button>
      </div>
      <div className="my-5">
        <input className="border border-black py-2 rounded-lg px-1.5 mr-2"></input>
        <input type="checkbox" className="mr-2"></input>
        <button className="border border-black p-1">削</button>
      </div>
    </>
  );
}

export default App;
