import {Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/mainPage/MainPage";
import {CreatePage} from "./pages/createPage/CreatePage";
import {SecondCreatePage} from "./pages/secondCreatePage/SecondCreatePage";
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/create' element={<CreatePage/>}/>
      <Route path='/second-create' element={<SecondCreatePage/>}/>
    </Routes>

  );
}

export default App;
