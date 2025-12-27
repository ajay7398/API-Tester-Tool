import { useState, useEffect } from "react";

function RequestForm({ setResponse, setLoading, uri, history, setHistories,histories }) {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (uri) {
      setUrl(uri);
    }
  }, [uri]);

  const sendRequest = async () => {
    if (!url.trim()) {
      alert("Please enter an API URL");
      return;
    }

    try {
      setLoading(true);
      const options = {
        method,
        headers: {},
      };

      // Validate JSON body for POST / PUT
      if ((method === "POST" || method === "PUT") && body.trim()) {
        try {
          const parsedBody = JSON.parse(body);
          options.body = JSON.stringify(parsedBody);
          options.headers["Content-Type"] = "application/json";
        } catch {
          alert("Invalid JSON body. Please use valid JSON format.");
          setLoading(false);
          return;
        }
      }

      // Save URL history safely (no duplicates, max 10)
      if (!histories.includes(url)) {
        const updatedHistory = [url, ...histories];
        setHistories(updatedHistory);
        localStorage.setItem("apiHistory", JSON.stringify(updatedHistory));
      }

      const res = await fetch(url, options);
      const data = await res.json();

      setResponse({
        status: res.status,
        data,
      });
    } catch (error) {
      setResponse({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <div className="w-full border border-gray-300 flex rounded overflow-hidden">
        <select
          className="bg-slate-800 text-green-500 px-3 outline-none"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>

        <input
          className="flex-1 px-3 outline-none bg-transparent"
          placeholder="Enter API URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button onClick={sendRequest} className="bg-green-800 px-6 text-white">
          Send
        </button>
      </div>

      {/* Request Body */}
      {(method === "POST" || method === "PUT") && (
        <textarea
          className="w-full border border-gray-300 rounded p-2 outline-none"
          placeholder={`{\n  "key": "value"\n}`}
          value={body}
          rows={7}
          onChange={(e) => setBody(e.target.value)}
        />
      )}

    </div>
  );
}

export default RequestForm;
