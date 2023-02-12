import { Route, Routes } from "react-router-dom";
import NewsPages from "./pages/NewsPages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPages />} />
      <Route path="/:category" element={<NewsPages />} />
    </Routes>
  );
};

export default App;
