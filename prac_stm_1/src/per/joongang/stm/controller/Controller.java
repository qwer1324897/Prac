package per.joongang.stm.controller;

import per.joongang.stm.ui.UI;

public class Controller {
    
    UI ui = new UI();

    public void run() {
        ui.welcome();
        while (true) {
            ui.showMainMenu();
            int userSelectedCommand = ui.selectCommand();
            if(ui.commandIsExit(userSelectedCommand)) {
                break;
            } else ui.showSubMenu(userSelectedCommand);
        }
        ui.exitProgram();
    }
}
