import { startScreenItems } from "../utils/startScreen";
import { store } from "../store";

class StartScreen {
  constructor({ menuItems = startScreenItems } = {}) {
    this.menuItems = menuItems;
    this.carretPos = 0;
    setTimeout(() => {
      document.addEventListener("keydown", (e) => {
        if (!store.isStartScreen) return;
        switch (e.code) {
          case "Space": {
            this.select();
          }
        }
      });
      if (store.controls.active) {
        store.controls.shootButton.addEventListener("touchstart", () => {
          if (!store.isStartScreen) return;
          this.select();
        });
      }
    });
  }
  select() {
    this.menuItems[this.carretPos].fn();
  }
}

export default StartScreen;
