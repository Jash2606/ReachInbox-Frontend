import { useEffect } from 'react';
import { useSelector , useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TopOnebox from './components/topOneBox';
import LeftBar from './components/leftBar';
import Center from './components/center';
import MainGround from './components/mainGround/mainGround';
import './App.css';

function App() {
  const selectedUrl = useSelector((state) => state.counter.url);
  const navigate = useNavigate();
  
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");
  const localStorageToken = localStorage.getItem("token");

  useEffect(() => {
    if (!token && !localStorageToken) {
      navigate("/login");
    } else {
      if (token) {
        localStorage.setItem("token", `Bearer ${token}`);
      }
    }
  }, [token, localStorageToken, navigate]);

  return (
    <div>
      <TopOnebox />
      <LeftBar />
      { selectedUrl === "/inbox" ? <MainGround /> : <Center />}
    </div>
  );
}

export default App;
