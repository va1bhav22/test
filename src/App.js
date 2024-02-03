import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Posts from "./pages/Posts";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";
import SearchPosts from "./pages/postingSerch";
function App() {
  return (
    <>
      <Provider store={store}>
        <Toaster
          containerStyle={{
            inset: "0px",
          }}
          toastOptions={{
            duration: 3000,
            className: "w-full",
            style: {
              zIndex: 999999,
            },
          }}
        ></Toaster>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/search" element={<SearchPosts />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
