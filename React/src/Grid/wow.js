var zeile = 100; //1,2,3,4,5 oder hoch
var spalte = 100; //a,b,c,d,e oder breit
var raster = new Array(zeile);



//höhe und breite von der leinwand
var hoch = 1000;
var breit = 1000;

//höhe und breite von dem raster
var h, b;
b = breit / spalte;
h = hoch / zeile;

//welche raster welche farbe haben sollen
var farbeX;
var farbeY;
//let setFarbeX = var farbeX => this.farbeX = farbeX;
//let getFarbeX = () => return this.farbeX;


//2d Array erstellen
for (var i = 0; i < zeile; i++){
    raster[i] = new Array(spalte);

    function Punkt(x, y) {

        this.show = function (col) {
            fill(col)
            rect(b*x, h*y, b, h);
        }
    }
}
function setup() {
    createCanvas(breit, hoch);

    /*
    for (var x = 0; x < spalte; x++) {
        for (var y = 0; y < zeile; y++) {
            Punkt(x, y);
        }
    }
     */

}

function draw() {
    background(220);

    //hier werden die zeilen spalten verarbeitet
    for (var x = 0; x < spalte; x++) {
        for (var y = 0; y < zeile; y++) {
            raster[x][y] = new Punkt(x, y);
            raster[x][y].show(color(255,75,0));
        }
    }

    /*for (var x = 0; x < spalte; x++) {
        for (var y = 0; y < zeile; y++) {
            raster[x][y].show(color(255,75,0));
        }
    }*/


    farbeX=9; farbeY=2;


    const smiley=()=>{
        //left eye
        this.raster[6][6].show(color(0,0,255));
        this.raster[6][7].show(color(0,0,255));
        this.raster[7][6].show(color(0,0,255));
        this.raster[7][7].show(color(0,0,255));

        //right eye
        this.raster[18][6].show(color(0,0,255));
        this.raster[17][6].show(color(0,0,255));
        this.raster[18][7].show(color(0,0,255));
        this.raster[17][7].show(color(0,0,255));

        //smile
        this.raster[4][15].show(color(0,0,255));
        this.raster[5][15].show(color(0,0,255));
        this.raster[6][16].show(color(0,0,255));
        this.raster[7][16].show(color(0,0,255));
        this.raster[8][17].show(color(0,0,255));
        this.raster[9][17].show(color(0,0,255));
        this.raster[10][17].show(color(0,0,255));
        this.raster[11][17].show(color(0,0,255));
        this.raster[12][17].show(color(0,0,255));
        this.raster[13][17].show(color(0,0,255));
        this.raster[14][17].show(color(0,0,255));
        this.raster[15][17].show(color(0,0,255));
        this.raster[16][17].show(color(0,0,255));
        this.raster[17][16].show(color(0,0,255));
        this.raster[18][16].show(color(0,0,255));
        this.raster[19][15].show(color(0,0,255));
        this.raster[20][15].show(color(0,0,255));


    }

    /*fill(0,0,255);
    rect(10, 30, 50, 40);*/

}
