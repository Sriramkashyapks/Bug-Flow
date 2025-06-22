import axios from "axios";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  console.log(response);
  const handleClick = async() => {
    try {
      const result = await axios.get(
        `https://issues-tracker-backend-production.up.railway.app/api/hello`,
        {
          params: { input },
        }
      );
      console.log("API Call Result:", result);
      setResponse(result.data);
      // toast.success("Data fetched successfully");
    } catch (error) {
      console.error("API Call Failed:", error);
      setResponse("Error fetching data");
      // toast.error("Failed to fetch data from the API");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-gray-100">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-300 rounded p-2 mb-4"
        placeholder="Enter text here..."
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
      <div className="mt-4 p-4 bg-gray-200 rounded shadow w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">Response:</h2>
        <p className="text-lg font-semibold text-gray-700">{response}</p>
      </div>
    </div>
  );
}

export default App;
