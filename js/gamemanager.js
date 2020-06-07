let GameManager = {
  setGameStart: function(rapStyle) {
    this.resetRapper(rapStyle);
    this.setPreBattle();
  },
  resetRapper: function(rapStyle) {
    switch (rapStyle) {
      case "Marlon Craft":
        rapper = new Rapper(rapStyle, 100, 50, 25, 50, 75);
        break;
      case "J Cole":
        rapper = new Rapper(rapStyle, 200, 100, 75, 100, 75);
        break;
      case "Andre 3000":
        rapper = new Rapper(rapStyle, 150, 100, 50, 100, 100);
        break;
    }
    //grab interface so we can change it upon rapper selection
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="img/avatar-rapper/' + rapStyle.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + rapStyle + '</h3><p class="hp-rapper">HP: ' + rapper.hp + '</p><p>Special: ' + rapper.special + '</p><p>Strength: ' + rapper.strength + '</p><p>Wordplay: ' + rapper.wordplay + '</p><p>Delivery: ' + rapper.delivery + '</p></div>';
  },
  setPreBattle: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getStage = document.querySelector(".stage");

    getHeader.innerHTML = '<p>Task: Find a rap foe!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prebattle" onclick="GameManager.setBattle()">Search for rap foe.</a>';
    getStage.style.visibility = "visible";
  },
  setBattle: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getFoe = document.querySelector(".foe");
    // need to create enemy
    let foeZero = new Foe("Papa Doc", 100, 25, 50, 50, 80);
    let foeOne = new Foe("Lil B", 150, 75, 65, 55, 60);
    let chooseRandomFoe = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomFoe) {
      case 0: 
        foe = foeZero;
        break;
      case 1: 
        foe = foeOne;
        break;
    }
    getHeader.innerHTML = '<p onload="onload()">Task: Start Rapping!</p><audio id="audio" src="audio/shook.mp3" autoplay="autoplay">';
    getActions.innerHTML = '<a href="#" class="btn-prebattle" onclick="RapperMoves.calcAttack()">Spit Your Bars!</a> <audio id="audio" src="audio/shook.mp3"></audio>';
    getFoe.innerHTML = '<img src="img/avatar-foes/' + foe.rapStyle.toLowerCase() + '.png" alt="' + foe.rapStyle + '" class="img-avatar"><div><h3>' + foe.rapStyle + '</h3><p class="hp-foe">HP: ' + foe.hp + '</p><p>Special: ' + foe.special + '</p><p>Strength: ' + foe.strength + '</p><p>Wordplay: ' + foe.wordplay + '</p><p>Delivery: ' + foe.delivery + '</p></div>';
  }
}