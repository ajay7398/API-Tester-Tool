import { useEffect, useState } from "react";
import "./App.css";
import ResponseViewer from "./components/ResponseViewer.jsx";
import RequestForm from "./components/RequestForm.jsx";
import History from "./components/History.jsx";
function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiUrl, setApiUrl] = useState("");
  const [uri, setUri] = useState("");
  const [history, setHistory] = useState([]);
  const [histories, setHistories] = useState([]);
  useEffect(() => {
    setApiUrl(JSON.parse(localStorage.getItem("apiHistory")));
  }, [histories]);
  return (
    <div className="h-screen w-screen bg-slate-400 overflow-hidden px-6 flex">
      <div className="h-full w-[30%] px-6 py-2 bg-slate-700 text-white">
        <History setUri={setUri} history={history} uri={uri} histories={histories} setHistories={setHistories} />
      </div>

      <div
        className={`h-full ${
          histories ? "flex-1" : "w-[60%]"
        } mx-auto px-6 py-2 bg-slate-700 text-white flex flex-col`}
      >
        <h2 className="text-xl font-bold text-center my-2">API Tester Tool</h2>
        <RequestForm
          setResponse={setResponse}
          setLoading={setLoading}
          uri={uri}
          history={history}
          setHistory={setHistory}
          histories={histories}
          setHistories={setHistories}
        />
        <div className="flex-1 overflow-auto">
          <ResponseViewer response={response} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
