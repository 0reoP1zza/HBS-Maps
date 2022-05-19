import logo from './logo.svg';
import './App.css';
import GFG from "./componenten/GFG";
import { ReactP5Wrapper } from "react-p5-wrapper";

function App() {
  return (
      <body>
        <div className="App">
            <head>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js"></script>
                <link rel="stylesheet" type="text/css" href="style.css">
                    <meta charSet="utf-8"/>

            </head>
          <GFG positionKl={"Start Klasse"} positionGe={"Start Gebäude"}/>
          <GFG positionKl={"Ziel Klasse"} positionGe={"Ziel Gebäude"}/>
          <button type={"submit"}>weiter schicken</button>
            <button type={"reset"}> resetten </button>
            <input style={{marginLeft: "10px"}}/>
        </div>
      </body>

  );
}

export default App;
