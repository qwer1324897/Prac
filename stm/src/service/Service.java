package service;

import ioManager.IoManager;
import studentDto.StudentDto;

public class Service {

    StudentDto dto = new StudentDto(null, 0, 0);

    public void addStudent() {
        IoManager.print("====== 학생 정보 등록 ======");
        IoManager.printAndInputString("\n등록하실 학생의 이름을 입력해 주세요.\n이름 : ");
        IoManager.printAndInputInteger("\n등록하실 학생의 나이를 입력해 주세요.\n나이 : ");
        IoManager.printAndInputInteger("\n등록하실 학생의 성적을 입력해 주세요.\n성적 : ");
        IoManager.print("\"" + dto.getName() + "\"" + "");

    }

    public void studentList() {
        
    }

    public void searchStudentInfo() {

    }

    public void deleteStudentInfo() {

    }

    public void updateStudentInfo() {

    }

    public void studentStats() {
        
    }




}
