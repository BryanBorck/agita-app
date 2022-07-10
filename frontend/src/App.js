// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Chatbot from "./components/Chatbot";
// import GlobalStyle from "./components/GlobalStyle";
// import Login from "./components/Login";
// import Profile from "./components/Profile";
// import Start from "./components/Start";
// import Store from "./components/Store";
// import WhoWeAre from "./components/WhoWeAre";
// import useToken from './components/useToken';
// import Header from './components/Header';

// function App() {
//   const { token, removeToken, setToken } = useToken();

//   return (
//     <BrowserRouter>
//       <GlobalStyle className="App"/>
//         <Header token={removeToken}/>
//         {!token && token!=="" &&token!== undefined?  
//         <Login setToken={setToken} />
//         :(
//           <>
//             <Routes>
//               <Route exact path="/profile" element={<Profile token={token} setToken={setToken}/>}></Route>
//               <Route path="/home"  element={<Start/>} />
//               <Route path="/"  element={<Login/>} />
//               <Route path="/quemsomos"  element={<WhoWeAre/>} />
//               <Route path="/converse"  element={<Chatbot/>} />
//               <Route path="/loja"  element={<Store/>} />
//             </Routes>
//           </>
//         )}
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import GlobalStyle from "./components/GlobalStyle";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Start from "./components/Start";
import Store from "./components/Store";
import WhoWeAre from "./components/WhoWeAre";
import useToken from './components/useToken';
import Header from './components/Header';


function App() {
  const { token, removeToken, setToken } = useToken();

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
          <Route path="/home"  element={<Start/>} />
          <Route path="/quemsomos"  element={<WhoWeAre/>} />
          <Route path="/converse"  element={<Chatbot/>} />
          <Route path="/loja"  element={<Store/>} />
      </Routes>
      <div className="App">
        <Header token={removeToken}/>
        {!token && token!=="" &&token!== undefined?  
        <Login setToken={setToken} />
        :(
          <>
            <Routes>
              <Route exact path="/profile" element={<Profile token={token} setToken={setToken}/>}></Route>
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;