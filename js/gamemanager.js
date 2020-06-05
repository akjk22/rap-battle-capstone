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
      case "J. Cole":
        rapper = new Rapper(rapStyle, 200, 100, 75, 100, 75);
        break;
      case "Andre 3000":
        rapper = new Rapper(rapStyle, 150, 100, 50, 100, 100);
        break;
    }
    //grab interface so we can change it upon rapper selection
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="img/avatar/' + rapStyle.toLowerCase() + '.png" class="img-avatar"><div><h3>' + rapStyle + '</h3><p>HP: ' + rapper.hp + '</p><p>Special: ' + rapper.special + '</p><p>Strength: ' + rapper.strength + '</p><p>Wordplay: ' + rapper.wordplay + '</p><p>Delivery: ' + rapper.delivery + '</p></div>';
  },
  setPreBattle: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getStage = document.querySelector(".stage");

    getHeader.innerHTML = '<p>Task: Find a rap foe!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prebattle" onclick="GameManager.setBattle()">Search for rap foe.</a>';
    getStage.style.visibility = "visible";
  }
}