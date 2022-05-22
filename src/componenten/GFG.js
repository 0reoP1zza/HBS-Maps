import * as React from "react";

const GFG = (props) => {
    /** "wahl" hält die gerade ausgewählten Array
     * vom Klassenraum
     */
    const [wahl, setWahl] = React.useState("");

    /** hier wird angegeben das wahl nur verändert
     * wird sobald der raum verändert wird
     */
    const changeSelectOptionHandler = (event) => {
        setWahl(event.target.value);
    };

    /** Different arrays for different dropdowns */
    let aArray = ["A101|a101", "A102|a102", "A103|a103", "A104|a104", "A105|a105"];
    let bArray = ["B101|b101", "B102|b102", "B103|b103", "B104|b104", "B105|b105"];
    let cArray = ["C101|c101", "C102|c102", "C103|c103", "C104|c104", "C105|c105"];
    let dArray = ["D101|d101", "D102|d102", "D103|d103", "D104|d104", "D105|d105"];
    let eArray = ["E101|e101", "E102|e102", "E103|e103", "E104|e104", "E105|e105"];
    let fArray = ["F101|f101", "F102|f102", "F103|f103", "F104|f104", "F105|f105"];

    /** Hier wird klasseArray kreirt mit dem null wert der später wichtig wird */
    let klasseArray = null;

    /** Hier wird optionen kreirt.*/
    let optionen = null;

    /** Hier wird die Gebäude wahl mit der dazugehörigen Klasse verbunden */
    if (wahl === "A") {
        klasseArray = aArray;
    } else if (wahl === "B") {
        klasseArray = bArray;
    } else if (wahl === "C") {
        klasseArray = cArray;
    } else if (wahl === "D") {
        klasseArray = dArray;
    } else if (wahl === "E") {
        klasseArray = eArray;
    } else if (wahl === "F") {
        klasseArray = fArray;
    }

    //typeArray = aArray;

    /** Der if operator löst nur aus sobald klasseArray
     * nicht null ist.
     */
    if (klasseArray) {
        console.log(klasseArray);

        var nArray = ["test"];
        let i = 0;
        klasseArray.forEach(function (item) {
            //console.log(item);
           var pair = item.split("|");
           //console.log(pair);
           nArray[i] = <option className={"optn"} value={pair[1]} key={pair[0]}>{pair[0]}</option>;
           i++;
           //console.log(nArray);
        })

        optionen = nArray;
        //options = typeArray.map((el) => <option key={el}>{el}</option>);
        //console.log(nArray);
    }
    return(
        <div
            style={{
                padding: "16px",
                margin: "1px",
            }}
        >
            <form>
                <div>
                    {/** Der onChange operator wird immer ausgelöst sobald eine
                     * neue option ausgewählt wird.
                     */}
                    <select className={"selct"} onChange={changeSelectOptionHandler} required>
                        <option className={"optn"} value={""} selected>{props.positionGe}</option>
                        <option className={"optn"}>A</option>
                        <option className={"optn"}>B</option>
                        <option className={"optn"}>C</option>
                        <option className={"optn"}>D</option>
                        <option className={"optn"}>F</option>
                    </select>
                </div>
                <div>
                    <select className={"selct"} required>
                        <option value={""} selected>{props.positionKl}</option>
                        {
                            /** Hier werden die Klassen eingefügt */
                            optionen
                        }
                    </select>
                </div>
            </form>
        </div>
    );
};

export default GFG;