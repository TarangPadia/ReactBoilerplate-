import React from "react";
import { 
  Footer, 
  Header, 
  Homepage
} from "../Children";
import "../../../Assets/Themes/Base/Root/main.scss"

export const App = () => {
  return (
    <div>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}
