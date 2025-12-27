import React, { useEffect } from "react";

function History({ setUri, history,uri,histories, setHistories }) {


  useEffect(() => {
    const saved = localStorage.getItem("apiHistory");
    if (saved) {
      setHistories(JSON.parse(saved));
    }
  }, [history]);

  return (
    <div
      className={`${
        histories ? "block" : "hidden"
      } overflow-y-auto h-full bg-slate-800 p-4`}
    >
      <h1 className="text-center my-2">History</h1>
      <hr className="border-gray-600 border mb-4" />
      {histories.length > 0 && (
        <div className="text-xs text-gray-400">
          <ul className="space-y-1">
            {histories.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:text-white truncate ${uri===item?'text-white font-bold':''}`}
                onClick={() => setUri(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default History;
