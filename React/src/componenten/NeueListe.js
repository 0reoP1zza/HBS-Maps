const NeueListe = () => {
    return(
        <div>
            <form>
                {/* Das hier ist der Startklassenraum */}
                <label htmlFor={"slct1"}>Wähle etwas aus:</label>
                <br/>
                <select style={{width: '150px'}} id={"slct1"}>
                    <option selected disabled value={""}>Haus auswählen</option>
                    <option value={"a"}>A</option>
                    <option value={"b"}>B</option>
                    <option value={"c"}>C</option>
                    <option value={"d"}>D</option>
                    <option value={"f"}>F</option>
                </select>
                <br/><br/>

                <label htmlFor={"slct2"}>Wähle noch was aus:</label>
                <br/>
                <select style={{width: '150px'}} id={"slct2"}>
                    <option selected disabled value={""}>Klasse auswählen</option>
                </select>
            </form>
        </div>
    );
}

let slct1 = document.getElementById("slct1");
let slct2 = document.getElementById("slct2");

let A = ["A101|a101", "A102|a102", "A103|a103", "A104|a104", "A105|a105"];
let B = ["B101|b101", "B102|b102", "B103|b103", "B104|b104", "B105|b105"];
let C = ["C101|c101", "C102|c102", "C103|c103", "C104|c104", "C105|c105"];
let D = ["D101|d101", "D102|d102", "D103|d103", "D104|d104", "D105|d105"];
let E = ["E101|e101", "E102|e102", "E103|e103", "E104|e104", "E105|e105"];
let F = ["F101|f101", "F102|f102", "F103|f103", "F104|f104", "F105|f105"];

slct1.onchange = function () {
    slct2.innerHTML = "<option></option>";

    {/*
    if (this.value === 'a') {
        addToSlct2(A)
    }


    const room = this.value;

    switch (room) {
        case 'a':
            addToSlct2(A);
            break;
        case 'b':
            addToSlct2(B);
            break;
        case 'c':
            addToSlct2(C);
            break;
        case 'd':
            addToSlct2(D);
            break;
        case 'e':
            addToSlct2(E);
            break;
        case 'f':
            addToSlct2(F);
            break;
    }*/}
}

addToSlct2(A);

function addToSlct2(arr) {
    arr.forEach(function (item){
        let option = document.getElementById("option");
        option.text = item;
        option.value = item;
        slct2.appendChild(option);
    })
}

export default NeueListe;