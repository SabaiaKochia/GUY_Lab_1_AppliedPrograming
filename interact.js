<!--Saba Kochadze
    May 28, 2023
    Lab 1 GUI Website

    Range Slider update 6/11/2024
-->

<!DOCTYPE html>
<html lang="en">
</html>
<script src="interact.js"></script>
<link rel="stylesheet" href="main.css"> <!--Import Css into HTML-->
<header id="warp">


    <body>
        <p> Enter Number 1 </p>
        <input id="input_1" type="number"></input>
        <p>Enter Number 2</p>   
        <input id="input_2" type="number"> </input>
        <p>Enter Your Unit</p>   
        <input id="unit_input" type="text"> </input>
        <p></p>

        <!--    Create range -10 - 10   -->

        -10<input id="slider1" type="range" type="number" min="-10" max="10" oninput="range_disp1()"></input>10
        <p></p>
        -10<input id="slider2" type="range" type="number" min="-10" max="10"></input>10
        <p id="range_value1">Slider Value: </output></p>
        <p></p>


            <div><br />
                <input type="radio" onclick="add()" id="rad1">+</input> <br />
                <input type="radio" onclick="sub()" id="rad2">-</input> <br />
                <input type="radio" onclick="mult()" id="rad3">x</input> <br />
                <input type="radio" onclick="div()" id="rad4">/</input> <br /><br />
                <!--                <button  onclick= "clear()">
                    CLEAR
                </button>-->

                <button  onclick= "oporation()">
                    CALCULATE
                </button>
                <p id="Calc-integer" style="font-size: 50px;"></p>
                <p id="Calc-slider" style="font-size: 50px;"></p>
            </div>
    </body>


</header>


<head>
<h1>

</h1>
</head>
