import Game from './components/Game';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SharedLayout from "./Pages/SharedLayout";
import Home from "./Pages/Home";
import {AppProvider} from "./contexts/AppContext";

function App() {
  return(
      // <>
      //     <header >
      //         <h1>Cook</h1>
      //         <p>Move the ingredients to the pot </p>
      //     </header>
      //     <Game />
      // </>
      <AppProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<SharedLayout />} >
                     <Route index element={<Home />} />
                     <Route path="/game" element={<Game />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </AppProvider>
  )
}

export default App;
