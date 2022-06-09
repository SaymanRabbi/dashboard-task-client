import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Update from "./Components/Update/Update";
import Users from "./Components/Users/Users";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from "react-query";
import AddUser from "./Components/AddUser/AddUser";
import { useEffect, useState } from "react";
import DesktopView from "./Components/DesktopView/DesktopView";
import 'aos/dist/aos.css';
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  // function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //   return windowSize;
  console.log(windowSize);
  // }
  const { data, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/employee').then(res => res.json()))
  if (isLoading) {
    return
  }
  return (
    <div>
      <ToastContainer />
      <Navbar></Navbar>
      <Routes>
        {
          windowSize.width <= 800 ? <Route path='/' element={<Users data={data}></Users>}></Route> : <Route path='/' element={<DesktopView data={data}></DesktopView>}></Route>
        }
        <Route path='dashboard' element={<Dashboard dashboarddata={data}></Dashboard>}></Route>
        <Route path='/update/:id' element={<Update refetch={refetch}></Update>}></Route>
        <Route path='/aduser' element={<AddUser refetch={refetch}></AddUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
