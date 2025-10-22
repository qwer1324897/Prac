package per.joongang.stm.ui;

import per.joongang.stm.service.Service;
import per.joongang.stm.util.IoManager;

public class UI {

    private Service service = new Service();

    public void welcome() {
        IoManager.print("******* 학생 관리 프로그램 *******");
        IoManager.print("           Ver.1.0.1            ");
        IoManager.print("       개발자: qwer1324897       ");
        IoManager.print("*********************************");
    }

    public void showMainMenu() {
        IoManager.print("\n======= 메인 메뉴 =======\n");
        IoManager.print("1. 학생 정보 등록");
        IoManager.print("2. 학생 정보 목록");
        IoManager.print("3. 학생 정보 검색");
        IoManager.print("4. 학생 정보 삭제");
        IoManager.print("5. 학생 정보 수정");
        IoManager.print("6. 학생 정보 통계");
        IoManager.print("\n0. 프로그램 종료");
    }

    public int selectCommand() {
        int userInputCommand = IoManager.printAndInputInteger("\n원하시는 메뉴의 번호를 입력해주세요. > ");
        return userInputCommand;
    }

    public void showSubMenu(int userInputCommand) {
        if(userInputCommand==1) {
            service.addStudent();
        } else if(userInputCommand==2) {
            service.listStudent();
        } else if(userInputCommand==3) {

        } else if(userInputCommand==4) {

        } else if(userInputCommand==5) {

        } else if(userInputCommand==6) {

        } else if(userInputCommand==7) {

        } 
        
    }

    public boolean commandIsExit(int userSelectCommand) {
        return userSelectCommand==0;
    }

    public void exitProgram() {
        IoManager.print("\n프로그램을 종료합니다. 이용해주셔서 감사합니다.");
        System.exit(0);
    }
}
