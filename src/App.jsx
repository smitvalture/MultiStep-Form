import { Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import MultiStepForm from "./pages/MultiStepForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MultiStepForm />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;