import logo from './logo.svg';
import './App.css';
import GFG from "./componenten/GFG";
import Grid from "./Grid/rep5";
import Sketch from "react-p5";

function App() {
  return (
      <body>
        <div className="App">
            <div>
                <link rel="stylesheet" type="text/css" href="style.css"></link>
                    <meta charSet="utf-8"/>
                </div>

          <GFG positionKl={"Start Klasse"} positionGe={"Start Gebäude"}/>
          <GFG positionKl={"Ziel Klasse"} positionGe={"Ziel Gebäude"}/>
          <button type={"submit"}>weiter schicken</button>
            <button type={"reset"}> resetten </button>
            <input style={{marginLeft: "10px"}}/>
        </div>
        <br/><br/>
        <div>
            <p>Hier würd das Raster sein</p>
            <Grid/>
        </div>
      </body>

  );
}

export default App;
