package controller;

import java.util.Scanner;

import ioManager.IoManager;

/* 지금은 전체 흐름을 담당
 * 나중(스프링)에는 사용자 입출력(IO) 담당.
 */

public class Controller {
    
    public void run() {
        welcome();
        while (true) {
            showMainMenu();
            String userSelectedCommand = selectCommand();
            if(commandIsExit(userSelectedCommand)) {
                break;
            }
            showSubMenu(userSelectedCommand);     
        }
        exitProgram();
    }

    private void welcome() {
        IoManager.print("******* 학생 관리 프로그램 *******");
        IoManager.print("           Ver.1.0.1            ");
        IoManager.print("       개발자: qwer1324897       ");
        IoManager.print("*********************************\n");

    }

    private void showMainMenu() {
        IoManager.print("1. 학생 정보 등록");
        IoManager.print("2. 학생 정보 목록");
        IoManager.print("3. 학생 정보 검색");
        IoManager.print("4. 학생 정보 삭제");
        IoManager.print("5. 학생 정보 수정");
        IoManager.print("6. 학생 정보 통계");
        IoManager.print("\n0. 프로그램 종료");
    }

    private String selectCommand() {
        String userInputCommand = IoManager.printAndInputString("선택 > ");
        return userInputCommand;
    }

    private void showSubMenu(String userSelectCommand) {
        if(userInputCommand.equals("1")) {

        } else if(userInputCommand.equals("2")) {

        } else if(userInputCommand.equals("3")) {

        } else if(userInputCommand.equals("4")) {

        } else if(userInputCommand.equals("5")) {

        } else if(userInputCommand.equals("6")) {

        } else if(userInputCommand.equals("0")) {

        } 
        
    }

    private boolean commandIsExit(String userSelectCommand) {
        return userSelectCommand.equals("0");
        
    }

    private void exitProgram() {
        IoManager.print("\n프로그램을 종료합니다. 이용해주셔서 감사합니다.");
        
    }

    private void pause() {}

}
