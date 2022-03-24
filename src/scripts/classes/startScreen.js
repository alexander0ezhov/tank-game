import { startScreenItems } from "../utils/startScreen";
import { store } from "../store";

class StartScreen {
  constructor({ menuItems = startScreenItems } = {}) {
    this.menuItems = menuItems;
    this.carretPos = 0;
    document.addEventListener("keydown", (e) => {
      if (store.isStartScreen) {
        switch (e.code) {
          case "Space": {
            this.select();
          }
        }
      }
    });
  }
  select() {
    console.log(this.menuItems[this.carretPos].fn());
  }
}

export default StartScreen;
