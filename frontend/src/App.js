import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login2 from "../src/pages/login/Login2";
import Recipe from "./pages/recipe/Recipe";
import UserProfile from "./pages/UserProfile";
import { ToastContainer } from "react-toastify";
import HowToMakeRecipe from "./pages/howToMakeRecipe/HowToMakeRecipe";
import SearchScreen from "./pages/searchScreen/SearchScreen";
import SearchAllRecipes from "./pages/searchAllRecipes.js/SearchAllRecipes";
import RecoverPassword from "./pages/recoverPassword/RecoverPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <ToastContainer position="bottom-center" limit={1} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:name" element={<Recipe />} />
          <Route path="/login" element={<Login2 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/recipes/howIsMade/:_id" element={<HowToMakeRecipe />} />
          <Route path='search' element={<SearchScreen/>}/>
          <Route path="/recover" element={<RecoverPassword/>}/>
          <Route path="reset" element={<ResetPassword/>}/>
<Route path="/searchAll" element={ <SearchAllRecipes/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
