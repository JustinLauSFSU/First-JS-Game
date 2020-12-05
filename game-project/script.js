//Defining all global variables from the html
var bottomRow = document.getElementById('bottomRow');
var stats = document.getElementsByClassName('stats');
var tyranitarStats = document.getElementById('tyranitarStats');
var tyranitarHPBar = document.getElementById('tyranitarHP');
var mechaHPBar = document.getElementById('mechaHP');
var tyranitarMoves = document.getElementById('tyranitarMoves');

let tyranitar;
let mechaTyranitar;

//calls play function
function play(){
    tyranitar = new Tyranitar();
    mechaTyranitar = new MechaTyranitar();
    //once the button is pressed, you show this text now
    bottomRow.innerHTML = "Pick the attack you want Tyranitar to use by clicking one of the attacks.";

    tyranitarHPBar.style.width = mechaHPBar.style.width = '300px'; 
    //as long as x is between 0 and the length of stats run this
    //this will show the stats of both sides
    //for loop as it's more efficient to do this than call it individually
    for(var x=0; x<stats.length; x++){
        //makes it visible once the button is called
        stats[x].style.visibility = "visible";
    }
}

function updateGameState() {

    bottomRow.innerHTML = "";
    this.showAttackMessages(tyranitar);
    this.showAttackMessages(mechaTyranitar);
    this.updateHealthBars();
    
    if(tyranitar.hp === 0 || mechaTyranitar.hp === 0) {
        tyranitarMoves.style.visibility = "hidden";
    }

    if(tyranitar.hp === 0 && mechaTyranitar.hp === 0) {
        this.bottomRow.innerHTML += "It was a draw!<br> <button onclick = 'restart()' class='buttonFormat'> Try Again? </button>";
    } else if(mechaTyranitar.hp === 0) {
        this.bottomRow.innerHTML += "Tyranitar wins!<br> <button onclick = 'restart()' class='buttonFormat'> Try Again? </button>";
    } else if(tyranitar.hp === 0) {
        this.bottomRow.innerHTML += "You have been defeated! <br> <button onclick = 'restart()' class='buttonFormat'> Try Again? </button>";
    }

}

function showAttackMessages(pokemon) {

    let missMessage = "";
    if(pokemon.moveMissed) {
        missMessage = " which missed! "
    } else {
        missMessage =  " and did " + pokemon.move.damage + " damage!"
    }
    bottomRow.innerHTML += pokemon.name + " used " + pokemon.move.name + missMessage + '<br>';

    if(pokemon.move.recoil > 0 && !pokemon.moveMissed) {
        bottomRow.innerHTML += pokemon.name + " was hit for " + pokemon.move.recoil + " by its own move!" + '<br>'
    }
}

function updateHealthBars() {

    let mechaHPBarWidth = (mechaTyranitar.hp/100)*300;
    mechaHPBar.style.width = mechaHPBarWidth + "px";

    let tyranitarHPBarWidth = (tyranitar.hp/100)*300;
    tyranitarHPBar.style.width = tyranitarHPBarWidth + "px";
}

//the attack mecha tyranitar will use
function mechaAttack(){
    let attack;
    //chooses 2 choices for an attack
    var attackChoice = Math.ceil(Math.random()*3);
    //if choice is 1 run this
    if (attackChoice === 1 ){
        attack = new Tackle();
    } else if (attackChoice === 2) {
        attack = new MechaMetalPunch();
    } else {
        attack = new MechaMetalBeam();
    }

    mechaTyranitar.updateMove(attack);
    mechaTyranitar.attack(tyranitar);
    this.updateGameState();
}

//the function to call tackle
function tackle(){
    tyranitar.updateMove(new Tackle());
    tyranitar.attack(mechaTyranitar);
    this.mechaAttack();
    this.updateGameState();
}

//calls the move protect
//like protect in pokemon this is intended to protect you from damage
function protect(){
    tyranitar.updateMove(new Protect());
    tyranitar.attack(mechaTyranitar);
    this.updateGameState();
}

//calls the move head smash
function headSmash(){
    tyranitar.updateMove(new HeadSmash());
    tyranitar.attack(mechaTyranitar);
    if(tyranitar.hp > 0) {
        this.mechaAttack();
    }
    this.updateGameState();
}

//This calls the move explosion, will always result in a loss
function explosion(){
    tyranitar.updateMove(new Explosion());
    tyranitar.attack(mechaTyranitar);
    if(tyranitar.hp > 0) {
        this.mechaAttack();
    }
    this.updateGameState();
}

//this will restart the game once the battle is finished
function restart(){
    //sets the character HP back to the default 100;
    tyranitar = new Tyranitar();
    mechaTyranitar = new MechaTyranitar();
    //will show attacks again
    tyranitarMoves.style.visibility = "visible";
    //will call the play function again
    play();
}

class Pokemon {
    constructor(name, move) {
        this.name = name;
        this.move = move;
        this.hp = 100;
        this.moveMissed = false;
    }

    updateMove(move) {
        this.move = move;
    }

    attack(target) {
        const randNum = Math.round(Math.random()*100);

        if(randNum <= this.move.accuracy) {
            this.moveMissed = false;
            target.hp -= this.move.damage;
            this.hp -= this.move.recoil;
        } else {
            this.moveMissed = true;
        }

        if(target.hp < 0) {
            target.hp = 0;
        }
    }
}

class Tyranitar extends Pokemon{
    constructor() {
        super("Tyranitar");
    }
}

class MechaTyranitar extends Pokemon {
    constructor() {
        super("Mecha Tyranitar");
    }

}

class PokemonMove {
    constructor(damage, accuracy, recoil, name) {
        this.damage = damage;
        this.accuracy = accuracy;
        this.recoil = recoil;
        this.name = name;
    }
}

class Tackle extends PokemonMove {
    constructor() {
        super(Math.round(Math.random()*10)+5, 95, 0, "Tackle");
    }
}

class Protect extends PokemonMove {
    constructor() {
        super(0, 100, 0, "Protect");
    }
}

class MechaMetalPunch extends PokemonMove {
    constructor() {
        super(Math.round(Math.random()*15)+26, 65, 0, "Metal Punch");
    }
}

class MechaMetalBeam extends PokemonMove {
    constructor() {
        super(Math.round(Math.random()*10)+50, 45, 0, "Metal Beam");
    }
}

class HeadSmash extends PokemonMove {
    constructor() {
        super(Math.round(Math.random()*15)+30, 80, 0, "Head Smash");
        this.recoil = Math.round((this.damage/3));
    }
}

class Explosion extends PokemonMove {
    constructor() {
        super(Math.round(Math.random()*50)+50, 100, 100, "Explosion");
    }
}