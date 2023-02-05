import { useState } from "react";
import axios from "../node_modules/axios/index";

function App() {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=654decd48abb43dd87155331046fe2bb"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}

      {/*&& if에 true만 넣은 것과 같음*/}
    </div>
  );
}

export default App;
