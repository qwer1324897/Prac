package stm.controller;

import stm.iomanager.IoManager;
import stm.service.Service;

public class Controller {

    private Service service = new Service();

    public void run() {
        welcome();
        while(true) {
            showMainMenu();
            String command = userInputCommand();
            if (commandIsExit(command)) {
                break;
            }
            showSubMenu(command);
            pause();
        }
        programExit();
        System.exit(0);
    }


    private void welcome() {
        IoManager.print("*************************");
        IoManager.print("    학생 관리 프로그램     ");
        IoManager.print("       Version.4         ");
        IoManager.print("      2025.11.09        ");
        IoManager.print("*************************");
    }

    private String userInputCommand() {
        return IoManager.printAndInputString("원하시는 항목을 입력해 주세요. > ");
    }

    private boolean commandIsExit(String command) {
        return command.equals("0".trim());
    }

    private void showMainMenu() {
        IoManager.print("\n*[ Main ]\n");
        IoManager.print("1. 학생 정보 등록");
        IoManager.print("2. 학생 정보 목록");
        IoManager.print("3. 학생 정보 검색");
        IoManager.print("4. 학생 정보 삭제");
        IoManager.print("5. 학생 정보 통계");
        IoManager.print("\n0. 프로그램 종료\n");
    }

    private void showSubMenu(String command) {
        if (command.equals("1")) {
            
        }
        if (command.equals("2")) {

        }
        if (command.equals("3")) {

        }
        if (command.equals("4")) {

        }
        if (command.equals("5")) {

        }
        else {
            IoManager.print("\n유효하지 않은 값입니다.");
            IoManager.print("다시 입력해주세요. > ");
        }
    }

    private void programExit() {
        IoManager.print("\n이용해 주셔서 감사합니다.");
        IoManager.print("\n프로그램을 종료합니다.");
    }

    private void pause() {
        IoManager.pause();
    }






// 주제: 학생 정보 관리 프로그램

//         // 기능: 학생 정보 등록, 목록, 검색, 삭제, 수정...

//         // 한 명의 학생의 데이터: 이름, 나이, 성적

}
