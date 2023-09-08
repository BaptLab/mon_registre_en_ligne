import TextInput from "../components/Inputs/TextInput/TextInput";
import SideNav from "../layout/SideNav/SideNav";
import Header from "../layout/header/Header";

const Introduction = () => {
  return (
    <>
      <Header />
      <main>
        <SideNav />
        <section id="introduction-form" className="form">
          <TextInput
            label="Nom du traitement"
            placeholder="Fichier client"
            id="traitmentName"
          />
        </section>
      </main>
    </>
  );
};

export default Introduction;
