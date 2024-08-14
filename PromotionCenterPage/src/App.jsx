import "./App.css";
import Buttons from "./Components/Buttons";
import FooterBtn from "./Components/FooterBtn";
import HeaderP from "./Components/HeaderP";
import InvitationLink from "./Components/InvitationLink";

import Tables from "./Components/Tables";

function App() {
  return (
    <>
      <center>
        <HeaderP />

        <Tables />
        <InvitationLink />
        <Buttons />
        <FooterBtn />
      </center>
    </>
  );
}

export default App;
