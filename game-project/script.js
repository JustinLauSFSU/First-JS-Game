//Defining all global variables from the html
var bottomRow = document.getElementById('bottomRow');
var stats = document.getElementsByClassName('stats');
var tyranitarStats = document.getElementById('tyranitarStats');
var tyranitarHP = document.getElementById('tyranitarHP');
var mechaHP = document.getElementById('mechaHP');
var tyranitarMoves = document.getElementById('tyranitarMoves');

//Defines HP
var tyranitarHP = 100;
var mechaHP = 100;

//calls play function
function play(){
    //once the button is pressed, you show this text now
    bottomRow.innerHTML = "Pick the attack you want Tyranitar to use by clicking one of the attacks.";
    //as long as x is between 0 and the length of stats run this
    //this will show the stats of both sides
    //for loop as it's more efficient to do this than call it individually
    for(var x=0; x<stats.length; x++){
        //makes it visible once the button is called
        stats[x].style.visibility = "visible";
    }
}

//the attack mecha tyranitar will use
/*fuction mechaAttack(){
    //chooses 2 choices for an attack
    var attackChoice = Math.ceil(Math.random()*3);
    //if choice is 1 run this
    if (attackChoice ==1 ){
        //This will generate a number between 1 and 100, and will round to the nearest integrer
        var accuracy = Math.round(Math.random()*100);
        //This is intended to make the attack 95% accurate with a chance to miss
        if(accuracy <=95){
        //this will make the damage dealt between 5 and 15
        var damage = Math.round(Math.random()*10)+5;
        //reduces mechaHP once tackle is called
        tyranitarHP -= damage;
        //incase the enemy's HP somehow ends negative, set it to 0
        if (tyranitarHP < 0){
            mechaHP = 0;
        }
        //tells the user they hit
        bottomRow.innerHTML += "Mecha Tyranitar used Tackle! <br> You took " + damage + " damage. You now have " + tyranitarHP + " HP.";
        //variable for HP width
        var tyranitarHPBarWidth = (tyranitarHP/100)*300;
        //new width
        tyranitarHP.style.width = tyranitarHPBarWidth + "px";
    }
        else{
            bottomRow.innerHTML += "Mecha Tyranitar's attack missed";
        }
    }
    //if choice is 2 run this
    else if (attackChoice ==2){
        //This will generate a number between 1 and 100, and will round to the nearest integrer
        var accuracy = Math.round(Math.random()*100);
        //This is intended to make the attack 65% accurate with a chance to miss
        if(accuracy <=65){
        //this will make the damage dealt between 26 and 41
        var damage = Math.round(Math.random()*15)+26;
        //reduces mechaHP once tackle is called
        tyranitarHP -= damage;
        //incase the enemy's HP somehow ends negative, set it to 0
        if (tyranitarHP < 0){
            mechaHP = 0;
        }
        //tells the user they hit
        bottomRow.innerHTML = "Mecha Tyranitar used Metal Punch! <br> You took " + damage + " damage. You now have " + tyranitarHP + " HP.";
        //variable for HP width
        var tyranitarHPBarWidth = (tyranitarHP/100)*300;
        //new width
        tyranitarHP.style.width = tyranitarHPBarWidth + "px";
    }
        else{
        bottomRow.innerHTML += "Mecha Tyranitar's attack missed";
        }
    }
    //if choice is 3 run this
    else{
        //This will generate a number between 1 and 100, and will round to the nearest integrer
        var accuracy = Math.round(Math.random()*100);
        //This is intended to make the attack 45% accurate with a chance to miss
        if(accuracy <=45){
        //this will make the damage dealt between 50 and 60
        var damage = Math.round(Math.random()*10)+50;
        //reduces mechaHP once tackle is called
        tyranitarHP -= damage;
        //incase the enemy's HP somehow ends negative, set it to 0
            if (tyranitarHP < 0){
                mechaHP = 0;
            }
        //tells the user they hit
        bottomRow.innerHTML += "Mecha Tyranitar used Mecha Beam! <br> You took " + damage + " damage. You now have " + tyranitarHP + " HP.";
        //variable for HP width
        var tyranitarHPBarWidth = (tyranitarHP/100)*300;
        //new width
        tyranitarHP.style.width = tyranitarHPBarWidth + "px";
        }
        else{
        bottomRow.innerHTML += "Mecha Tyranitar's attack missed";
        }
    }
}*/

//the function to call tackle
function tackle(){
    
    //This will generate a number between 1 and 100, and will round to the nearest integrer
    var accuracy = Math.round(Math.random()*100);
    //This is intended to make the attack 95% accurate with a chance to miss
    if(accuracy <=95){
        //this will make the damage dealt between 5 and 15
        var damage = Math.round(Math.random()*10)+5;
        //reduces mechaHP once tackle is called
        mechaHP -= damage;
        //incase the enemy's HP somehow ends negative, set it to 0
        if (mechaHP < 0){
            mechaHP = 0;
        }
        //tells the user they hit
        bottomRow.innerHTML = "Tyranitar used Tackle! <br> Your Tackle did " + damage + " damage. Mecha Tyranitar now has " + mechaHP + " HP.";
        //variable for HP width
        var mechaHPBarWidth = (mechaHP/100)*300;
        //new width
        mechaHP.style.width = mechaHPBarWidth + "px";

        //if the enemy HP is 0, it tells the user they won
        if (mechaHP == 0){
            //the reason for += is because we want to see the damage done before the win message shows
            bottomRow.innerHTML += "<br> You succesfully defeated Mecha Tyranitar! You win!";
            //bbuttons go away once you win
            tyranitarMoves.style.visibility = "hidden";
        }
    }
    else{
        bottomRow.innerHTML = "Your attack missed";
    }
    //if the enemy HP is 0, it tells the user they won
    /*if (mechaHP == 0){
        //the reason for += is because we want to see the damage done before the win message shows
        bottomRow.innerHTML += "<br> You succesfully defeated Mecha Tyranitar! You win!";
        //bbuttons go away once you win
        tyranitarMoves.style.visibility = "hidden";
    }*/
    /*else{
        mechaAttack();
    }*/
}

//calls the move protect
//like protect in pokemon this is intended to protect you from damage
function protect(){
    bottomRow.innerHTML = "Tyranitar used protect! <br> Mecha Tyranitar's attack missed! You took no damage."
}

//calls the move head smash
function headSmash(){
    //This will generate a number between 1 and 100, and will round to the nearest integrer
    var accuracy = Math.round(Math.random()*100);
    //This is intended to make the attack 80% accurate with a chance to miss
    if(accuracy <=80){
        //this will make the damage dealt between 30 and 45
        var damage = Math.round(Math.random()*15)+30;
        //the recoil damage when calling this move is 1/3 of the damage dealt
        var recoil = Math.round((damage/3));
        //reduces mechaHP once tackle is called
        mechaHP -= damage;
        //the recoil damage dealt
        tyranitarHP -= recoil;
        //incase the enemy's HP somehow ends negative, set it to 0
        if (mechaHP < 0){
            mechaHP = 0;
        }
        //if your HP is negative, make it 0
        if (tyranitarHP < 0){
            tyranitarHP = 0;
        }
        //tells the user they hit
        //also includes recoil message
        bottomRow.innerHTML = "Tyranitar used Head Smash! <br> Your Head Smash did " + damage + " damage. Mecha Tyranitar now has " + mechaHP + " HP. <br> You took " +recoil + " damage due to recoil. You have "+ tyranitarHP + " left.";
        //variable for HP width
        var mechaHPBarWidth = (mechaHP/100)*300;
        //new width
        mechaHP.style.width = mechaHPBarWidth + "px";
    }
    else{
        bottomRow.innerHTML = "Your attack missed";
    }
    //if the enemy HP is 0, it tells the user they won
    if (mechaHP == 0){
        //the reason for += is because we want to see the damage done before the win message shows
        bottomRow.innerHTML += "<br> You succesfully defeated Mecha Tyranitar! You win!";
        //bbuttons go away once you win
        tyranitarMoves.style.visibility = "hidden";
    }
    if (tyranitarHP == 0){
        //the reason for += is because we want to see the damage done before the lose message shows
        bottomRow.innerHTML += "<br> You have been defeated!";
        //bbuttons go away once you lose
        tyranitarMoves.style.visibility = "hidden";
    }
}

//This calls the move explosion, will always result in a loss
function explosion(){
    //This will generate a number between 1 and 100, and will round to the nearest integrer
    var accuracy = Math.round(Math.random()*100);
    //this will do between 50 to 100 damage
    var damage = Math.round(Math.random()*50)+50;
    //reduces mechaHP once tackle is called
    mechaHP -= damage;
    //using explosion results in instant death
    tyranitarHP -= tyranitarHP;
    //incase the enemy's HP somehow ends negative, set it to 0
    if (mechaHP < 0){
        mechaHP = 0;
    }
    //if your HP is negative, make it 0
    if (tyranitarHP < 0){
        tyranitarHP = 0;
    }
    //tells the user they hit
    //tells the user they have 0HP left
    bottomRow.innerHTML = "Tyranitar used Explosion! <br> Your Explosion did " + damage + " damage. Mecha Tyranitar now has " + mechaHP + " HP. <br> You have 0 HP left";
    //tells the user they lose
    bottomRow.innerHTML += "<br> You have been defeated!" 
    //variable for HP width
    var mechaHPBarWidth = (mechaHP/100)*300;
    //new width
    mechaHP.style.width = mechaHPBarWidth + "px";
    
}