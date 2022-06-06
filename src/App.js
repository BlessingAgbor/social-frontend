import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Components/Header/Header"
import HomeScreen from "./Components/Home/HomeScreen"
function App() {
  return (
    <BrowserRouter>
    <Header />
    <HomeScreen />
    <Routes>
      <Route />
    </Routes>
    </BrowserRouter>
        
    
  );
}

export default App;
