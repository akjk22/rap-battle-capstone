let rapper;
// available on global scope

function Rapper(rapStyle, hp, special, strength, wordplay, delivery) { 
  this.rapStyle = rapStyle;
  this.hp = hp;
  this.special = special;
  this.strength = strength;
  this.wordplay = wordplay;
  this.delivery = delivery;
}

let RapperMoves = {
  calcAttack: function() {
    // who will attack first?
    let getRapperSpecial = rapper.special;
    let getFoeSpecial = foe.special;
    // rapper attacks/spits bars
    let rapperAttack = function() {
    let calcBaseDamage;
    if (rapper.wordplay > 0 ) {
      calcBaseDamage = rapper.strength * rapper.wordplay / 1000;
    } else {
      calcBaseDamage = rapper.strength * rapper.delivery / 1000;
    }
    let offsetDamage = Math.floor(Math.random() * Math.floor(10));
    let calcOutputDamage = calcBaseDamage + offsetDamage; 
  }
  }
 
}