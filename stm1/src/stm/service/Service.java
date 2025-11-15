package stm.service;

import java.util.List;

import stm.dto.StudentDto;
import stm.iomanager.IoManager;
import stm.repository.Repository;

public class Service {

    private Repository repository = new Repository();

    public void addStudent() {
        IoManager.print("============== 학생 정보 등록 ==============\n");
        String name = IoManager.printAndInputString("등록하실 학생의 이름을 입력하세요 > ");
        int age = IoManager.printAndInputInteger("나이를 입력해 주세요. > ");
        int score = IoManager.printAndInputInteger("성적을 입력해 주세요. > ");
        StudentDto dto = new StudentDto(name, age, score);
        repository.save(dto);
        IoManager.print(dto.getName() + " 학생의 정보가 등록되었습니다.");
    }

    public void listStudent() {
        IoManager.print("============== 학생 정보 목록 ==============\n");
        List<StudentDto> list = repository.findAll();
        for (StudentDto dto : list) {
            String text = "";
            text += "이름: " + dto.getName();
            text += "나이: " + dto.getAge();
            text += "성적: " + dto.getScore();
            IoManager.print(text);
        }
        IoManager.print("============= 총 " + list.size() + "명이 존재합니다.\n");
    }

    public void searchStudent() {
        IoManager.print("============== 학생 정보 검색 ==============\n");
        IoManager.print("찾으시는 학생의 이름을 입력해주세요.");
        List<StudentDto> list = repository.findByNameContaining(IoManager.printAndInputString("> "));
        for (StudentDto dto : list) {
            String text = "";
            text += "이름: " + dto.getName();
            text += "\n나이: " + dto.getAge();
            text += "\n성적: " + dto.getScore();
            IoManager.print(text);
        }
        IoManager.print("검색된 학생은 총" + list.size() + "명 입니다.");
    }

    public void removeStudent() {
        IoManager.print("============== 학생 정보 삭제 ==============\n");
        String removeName = IoManager.printAndInputString("삭제할 학생의 이름을 입력하세요 > ");
        repository.removeByName(removeName);
        IoManager.print(removeName + " 학생의 정보가 삭제되었습니다.");
    }

    public void stats() {
        IoManager.print("============== 학생 정보 통계 ==============\n");
        List<StudentDto> list = repository.findAll();
        Integer avgScore = 0;
        for (StudentDto dto : list) {
            avgScore += dto.getScore();
        }
        double avg = avgScore/(double)list.size();
        IoManager.print("총 인원: " + list.size());
        IoManager.print("평균: " + avg);
    }
}
