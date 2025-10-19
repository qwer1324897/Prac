package controller;

import ioManager.IoManager;

/* 지금은 전체 흐름을 담당
 * 나중(스프링)에는 사용자 입출력(IO) 담당.
 */

public class Controller {
    
    private void run() {
        wellcome();
        while (true) {
            showMainMenu();
            sellectCommand();
            if (1);
                break;
            
            showSubMenu();
        }

        exitProgram();
    }

    private void wellcome() {}

    private void showMainMenu() {}

    private void sellectCommand() {

    }

    private void showSubMenu() {}

    private void exitProgram() {
        IoManager.print("\n프로그램을 종료합니다. 이용해주셔서 감사합니다.");
        
    }

    private void pause() {}



}
