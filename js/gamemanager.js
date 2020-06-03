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
    getInterface.innerHTML = '<img src="">';
  },
  setPreBattle: function() {

  }
}