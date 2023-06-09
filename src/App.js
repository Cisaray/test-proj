import {Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/mainPage/MainPage";
import {PageLayout} from "./pages/pageLayout";
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/create' element={<PageLayout/>}/>
    </Routes>

  );
}

export default App;
