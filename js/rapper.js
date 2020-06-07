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
    //get rapper and foe HP to change later
    let getRapperHp = document.querySelector(".hp-rapper");
    let getFoeHp = document.querySelector(".hp-foe");
    //initiate attacks
    if (getRapperSpecial >= getFoeSpecial) {
      let rapperAttackValues = rapperAttack();
      let totalDamage = rapperAttackValues[0] * rapperAttackValues[1];
      foe.hp = foe.hp - totalDamage;
      alert("You hit " + rapperAttackValues[0] + " damage " + rapperAttackValues[1] + " times.");
      if (foe.hp <= 0) {
        alert("You have won the battle! Refresh the browser to play again."); 
        getRapperHp.innerHTML = 'HP: ' + rapper.hp;
        getFoeHp.innerHTML = 'HP: 0';
      } else {
        getFoeHp.innerHTML = 'HP: ' + foe.hp;
        // foe attacks
        let foeAttackValues = foeAttack();
        let totalDamage = foeAttackValues[0] * foeAttackValues[1];
        rapper.hp = rapper.hp - totalDamage;
        alert("Foe hit " + foeAttackValues[0] + " damage " + foeAttackValues[1] + " times.");
        if (rapper.hp <= 0) {
          alert("You have lost the battle! Refresh the browser to rap again."); 
          getRapperHp.innerHTML = 'HP: 0';
          getFoeHp.innerHTML = 'HP: ' + foe.hp;
        } else {
          getRapperHp.innerHTML = 'HP: ' + rapper.hp;
        }
      }
    } else if (getFoeSpecial >= getRapperSpecial) {
        let foeAttackValues = foeAttack();
        let totalDamage = foeAttackValues[0] * foeAttackValues[1];
        rapper.hp = rapper.hp - totalDamage;
        alert("Enemy hit " + foeAttackValues[0] + " damage " + foeAttackValues[1] + " times.");
        if (rapper.hp <= 0) {
          alert("You have lost the battle! Refresh the browser to play again."); 
          getFoeHp.innerHTML = 'HP: ' + foe.hp;
          getRapperHp.innerHTML = 'HP: 0';
        } else {
          getRapperHp.innerHTML = 'HP: ' + rapper.hp;
          // rapper attacks
          let rapperAttackValues = rapperAttack();
          let totalDamage = rapperAttackValues[0] * rapperAttackValues[1];
          foe.hp = foe.hp - totalDamage;
          alert("You hit " + rapperAttackValues[0] + " damage " + rapperAttackValues[1] + " times.");
          if (foe.hp <= 0) {
            alert("You have won the battle! Refresh the browser to rap again."); 
            getFoeHp.innerHTML = 'HP: 0';
            getRapperHp.innerHTML = 'HP: ' + rapper.hp;
          } else {
            getFoeHp.innerHTML = 'HP: ' + foe.hp;
          }
        }
      }
  } 
}