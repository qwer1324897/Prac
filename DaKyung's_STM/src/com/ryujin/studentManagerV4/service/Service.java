package com.ryujin.studentManagerV4.service;

import com.ryujin.studentManagerV4.repository.Repository;
import com.ryujin.studentManagerV4.util.IoManager;

public class Service {
    Repository repository = new Repository();

    // --------------------------------------------------------- //
    // 실제 기능 코드 //
    public void welcom() {
        IoManager.print("-----------------------------------");
        IoManager.print("학생관리 프로그램에 오신것을 환영합니다.");
        IoManager.print(" 20251027 ver.4 ");
        IoManager.print(" Ryujin ");
        IoManager.print("-----------------------------------");
    }

    public void goodbye() {
        IoManager.print("학생관리 프로그램을 종료합니다.");
        IoManager.print("이용해 주셔서 감사합니다.");
    }

    /// 메인 메뉴 (main menu)
    /// - 학생 정보 관리 (studentInfoManege)
    /// - 학생 정보 등록 registerStudent
    /// - 학생 정보 수정 updateStudentInfo
    /// - 학생 정보 삭제 deleteStudentInfo
    /// - 학생 정보 조회 (viewStudentInfo)
    /// - 전체 학생 목록 listAllStudents
    /// - 학생 검색 searchStudent
    /// - 학생 통계 generateStudentStats
    /// - 학생 점수 통계 calculateScoreStats

    private void registerStudent() {

        IoManager.print("\n학생정보 신규등록을 시작합니다.");
        String name = IoManager.input("이름 > ");
        int age = Integer.parseInt(IoManager.input("나이 > "));
        int score = Integer.parseInt(IoManager.input("점수 > "));
        repository.save(name, age, score);
        System.out.println("등록 완료되었습니다. ");

    }

    private void updateStudentInfo() {
        IoManager.print("\n학생 수정을 시작합니다.");
        String searchWord = IoManager.input("검색어 > ");
        if (searchWord.equals("0")) {
            // updateStudentInfo 종료
            return;
        }

        if (searchWord == null || searchWord.equals("") || repository.findNameList(searchWord).size() <= 0) {
            IoManager.print("검색결과가 없습니다.");
            IoManager.print("0. 취소");
            updateStudentInfo();

        } else if (!(searchWord.equals("0"))) {
            IoManager.print("다음 학생의 정보를 수정합니다.");
            IoManager.printList(repository.findNameList(searchWord));

            String name = IoManager.input("이름 > ");
            int age = Integer.parseInt(IoManager.input("나이 > "));
            int score = Integer.parseInt(IoManager.input("점수 > "));

            repository.editStudentDtos(repository.findNameList(searchWord).get(0), name, age, score);
            System.out.println("등록 완료되었습니다. ");
        }
    }

    private void deleteStudent() {
        IoManager.print("\n학생정보 삭제를 시작합니다.");
        String searchWord = IoManager.input("검색어 > ");

        if (searchWord == null || searchWord.equals("") || repository.findNameList(searchWord).size() < 0) {
            IoManager.print("검색결과가 없습니다.");
            IoManager.print("0. 취소");
            deleteStudent();

        } else if (!(searchWord.equals("0"))) {
            IoManager.print("다음 학생의 정보가 삭제 완료 되었습니다.");
            IoManager.printList(repository.findNameList(searchWord));
        }
    }

    private void listAllStudents() {
        IoManager.print("\n전체학생목록 조회를 시작합니다.");
        if (repository.allList().size() == 0) {
            IoManager.print("현재 등록된 학생이 없습니다.");
        } else {
            IoManager.printList(repository.copyList(repository.allList()));
        }
    }

    private void searchStudent() {
        IoManager.print("\n학생 검색을 시작합니다.");
        if (repository.allList().size() == 0) {
            IoManager.print("현재 등록된 학생이 없습니다.");
        } else {
            String searchWord = IoManager.input("검색어 > ");
            IoManager.printList(repository.findNameList(searchWord));
        }
    }

    private void sortByScoreStudent() {
        IoManager.print("\n학생 성적순 조회를 시작합니다.");
        if (repository.allList().size() == 0) {
            IoManager.print("현재 등록된 학생이 없습니다.");
        } else {
            IoManager.printList(repository.sortByScore());
        }
    }

    private void calculateScoreStats() {
        IoManager.print("학생 정보 통계를 시작합니다.");
        if (repository.allList().size() == 0) {
            IoManager.print("현재 등록된 학생이 없습니다.");
        } else {
            IoManager.print("전체 학생의 평균 점수는 " + repository.averige() + "점 입니다.");
        }
    }

    private void testStudentAdd() {
        IoManager.print("\n테스트용 학생정보 등록 완료...");
        repository.save("김하나", 19, 58);
        repository.save("최두리", 21, 80);
        repository.save("박세리", 32, 60);
        repository.save("이네리", 24, 90);
        repository.save("임오리", 26, 92);
    }

    public void action() {
        Menu mainMenu = new Menu("학생관리 시스템 메인");
        Menu inforMenu = new Menu("학생정보 관리");
        Menu searchMenu = new Menu("학생 정보 조회");

        ActionCommend registerStudentAct = new ActionCommend("학생정보등록", this::registerStudent);
        ActionCommend updateStudentInfoAct = new ActionCommend("학생정보수정", this::updateStudentInfo);
        ActionCommend deleteStudentAct = new ActionCommend("학생정보삭제", this::deleteStudent);
        ActionCommend listAllStudentsAct = new ActionCommend("전체학생조회", this::listAllStudents);
        ActionCommend searchStudentAct = new ActionCommend("학생검색", this::searchStudent);
        ActionCommend sortByScoreStudentAct = new ActionCommend("성적순조회", this::sortByScoreStudent);
        ActionCommend calculateScoreStatsAct = new ActionCommend("성적평균조회", this::calculateScoreStats);
        ActionCommend testStudentAddAct = new ActionCommend("임시학생등록", this::testStudentAdd);

        mainMenu.add(inforMenu);
        mainMenu.add(searchMenu);

        inforMenu.add(registerStudentAct);
        inforMenu.add(updateStudentInfoAct);
        inforMenu.add(deleteStudentAct);
        inforMenu.add(testStudentAddAct);

        searchMenu.add(listAllStudentsAct);
        searchMenu.add(searchStudentAct);
        searchMenu.add(sortByScoreStudentAct);
        searchMenu.add(calculateScoreStatsAct);

        mainMenu.execute();

    }

    // --------------------------------------------------------- //
    // 실제 기능 실행 코드 //

    // Runnable 이라는 인터페이스가! run() 이라는 하나의 추상 메서드를 가지고 있기 때문에!!!
    // 추상메서드 하나니까 람다식 사용 가능.
    // ActionCommend register = new ActionCommend("학생 신규등록",new Runnable(){
    // public void run(){
    // addStudent();
    // }
    // });
    // register = new ActionCommend("학생 정보조회",()->this::allStudent);
    // 람다식: (매개변수목록) -> {실행할 코드}
    // Runnable 추상메서드 run() 하나, 매개변수 없음.
    // ActionCommend 는 두번째 파라미터가 Runnable 타입이기 때문에 Runnable runnable = new Runnable
    // .run() {}

}
