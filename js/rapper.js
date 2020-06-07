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
      // number of hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(rapper.delivery/10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues; 
    }
    //foe attacks
    let foeAttack = function() {
      let calcBaseDamage;
      if (foe.wordplay > 0 ) {
        calcBaseDamage = foe.strength * foe.wordplay / 1000;
      } else {
        calcBaseDamage = foe.strength * foe.delivery / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage; 
      // number of hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(foe.delivery/10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues; 
    }
    //get rapper and foe health to change later
    let getRapperHealth = document.querySelector(".health-rapper");
    let getFoeHealth = document.querySelector(".healh-foe");
    //initiate attacks
    if (getRapperSpecial >= getFoeSpecial) {
      let rapperAttackValues = rapperAttack();
      let totalDamage = rapperAttackValues[0] * rapperAttackValues[1];
      foe.health = foe.health - totalDamage;
      alert("You hit " + rapperAttackValues[0] + " damage " + rapperAttackValues[1] + " times.");
      if (foe.health <= 0) {
        alert("You have outrapped your foe! Refresh the browser to play again."); 
        getRapperHealth.innerHTML = 'HP: ' + rapper.health;
        getRapperHealth.innerHTML = 'HP: 0';
      } else {
        getFoeHealth.innerHTML = 'HP: ' + foe.health;
        // foe attacks
        let foeAttackValues = foeAttack();
        let totalDamage = foeAttackValues[0] * foeAttackValues[1];
        rapper.health = rapper.health - totalDamage;
        alert("Foe hit " + foeAttackValues[0] + " damage " + foeAttackValues[1] + " times.");
        if (rapper.health <= 0) {
          alert("You lose! Refresh the browser to rap again."); 
          getRapperHealth.innerHTML = 'HP: ' + rapper.health;
          getRapperHealth.innerHTML = 'HP: 0';
        } 
      }
    }
  } 
}