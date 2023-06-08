import './App.css';
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import Header from './components/Headers/Headers';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;