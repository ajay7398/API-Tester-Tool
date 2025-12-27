import { useState } from "react";
import { MdCopyAll } from "react-icons/md";
function ResponseViewer({ response, loading }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (response && response.data) {
      navigator.clipboard.writeText(JSON.stringify(response.data, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };
  if (loading) return <p>Loading...</p>;
  if (!response) return null;

  return (
    <div className="pt-2 relative">
      <h3>Response</h3>

      {response.error ? (
        <p style={{ color: "red" }}>{response.error}</p>
      ) : (
        <>
          <p className="bg-green-500 inline-block px-3 py-1 rounded my-2">
            Status: {response.status}
          </p>
          <div className="relative p-2 bg-black border">
            <p className="absolute right-2 top-2 text-xl">
              {copied ? "copied!" : <MdCopyAll onClick={handleCopy} />}
            </p>
            <pre className="break-words whitespace-pre-wrap mt-4 ">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        </>
      )}
    </div>
  );
}

export default ResponseViewer;
