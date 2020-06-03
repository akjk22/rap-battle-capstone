let GameManager = {
  setGameStart: function(rapStyle) {
    this.resetRapper(rapStyle);
    this.setPreBattle();
  },
  resetRapper: function(rapStyle) {
    switch (rapStyle) {
      case "Marlon":
        rapper = new Rapper(rapStyle, 100, 50, 25, 50, 75);
        break;
      default:

    }
  },
  setPreBattle: function() {

  }
}