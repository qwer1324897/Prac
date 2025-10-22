package per.joongang.stm.service;

import per.joongang.stm.dto.StudentDto;
import per.joongang.stm.repository.Repository;
import per.joongang.stm.util.IoManager;

public class Service {

    private Repository repository = new Repository();

    public void addStudent() {
    
        IoManager.print("\n======== 학생 정보 등록 ========\n");
        String name = IoManager.printAndInputString("이름 입력 > ");
        int age = IoManager.printAndInputInteger("\n나이 입력 > ");
        int score = IoManager.printAndInputInteger("\n점수 입력 > ");
        StudentDto studentDto = new StudentDto(name, age, score);
        repository.save(studentDto);
        IoManager.print("=========================================");
        IoManager.print("\n다음과 같은 학생의 정보가 저장되었습니다.\n");
        IoManager.print("이름 : " + studentDto.getName() +" 나이 : " + studentDto.getAge() +" 성적 : " + studentDto.getScore());
        IoManager.print("\n========================================");
        IoManager.pause();
    }
    public void listStudent() {
        IoManager.print("\n======= 학생 정보 목록 =======\n");
        StudentDto[] list = repository.findAll();
        
        for(StudentDto studentDto : list) {
            String text = "";
            text += "이름: " + studentDto.getName();
            text += " 나이: " + studentDto.getAge();
            text += " 성적: " +studentDto.getScore();
            IoManager.print(text);  
        }   
        IoManager.print("\n총 " + list.length + "명이 존재합니다.");
        IoManager.print("\n=============================");
        IoManager.pause();
    }









}
