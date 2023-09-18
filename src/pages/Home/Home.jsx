import "./home.css";
import Header from "../../layout/header/Header";
import SideNav from "../../layout/SideNav/SideNav";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SideNav />
        <h1>Page d'accueil</h1>
      </main>
    </>
  );
};

export default Home;
