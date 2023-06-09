import {Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/mainPage/MainPage";
import {CreatePage} from "./pages/createPage/CreatePage";
import {SecondCreatePage} from "./pages/secondCreatePage/SecondCreatePage";
import {FinalPage} from "./pages/finalPage/FinalPage";
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
