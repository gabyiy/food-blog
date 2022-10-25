import Carusel from "../../components/carusel/Carusel";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./SearchAllRecipes.css";

//recipes.length === 4 ? setPage(Number(page) + 1) : setPage(1)
//setPage(page == 1 ? page == 1 : page - 1)}>

const SearchAllRecipes = () => {
  return (
    <div>
      <Header />
      <div className="searchAllMoreRecipes">
        <p>
          <i class="fa fa-thin fa-list-ul"></i>
        </p>
        <h1>All recipes</h1>
      </div>
      <div className="lol">
        <Carusel />

        <Footer />
      </div>
    </div>
  );
};

export default SearchAllRecipes;
