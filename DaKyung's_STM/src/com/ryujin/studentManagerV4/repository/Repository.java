package com.ryujin.studentManagerV4.repository;

import java.sql.PseudoColumnUsage;
import java.util.ArrayList;
import java.util.List;

import com.ryujin.studentManagerV4.dto.StudentDto;

public class Repository {
    private List<StudentDto> list = new ArrayList<>();
    int count;

    public void save(String name, int age, int score) {
        StudentDto student = new StudentDto(name, age, score);
        list.add(student);
        this.count = list.size();
    }

    public List<StudentDto> allList() {
        return new ArrayList<>(list);
    }

    public List<StudentDto> findNameList(String name) {
        List<StudentDto> copyList = new ArrayList<>();
        for (StudentDto studentDto : list) {
            if (studentDto.getName().equals(name)) {
                copyList.add(studentDto);
            }
        }
        return copyList;
    }

    public void editStudentDtos(StudentDto student, String name, int age, int score) {
        student.setName(name);
        student.setAge(age);
        student.setScore(score);
    }

    public void deleteStudentDtos(String name) {
        List<StudentDto> newList = new ArrayList<>();
        for (StudentDto studentDto : list) {
            if (!(studentDto.getName().equals(name))) {
                newList.add(studentDto);
            }
        }
        list = newList;
    }
   
    public List<StudentDto> sortByScore() {
        List<StudentDto> newList = copyList(list);
        for (int i = 0; i < newList.size() - 1; i++) {
            int minIdx = i;
            for (int x = i; x < newList.size(); x++) {
                if (newList.get(x).getScore() > newList.get(minIdx).getScore()) {
                    minIdx = x;
                }
            }
            if (minIdx != i) {
                StudentDto temp = newList.get(i);
                newList.set(i, newList.get(minIdx)); // minIdx의 요소를 i 위치로 이동
                newList.set(minIdx, temp);
            }
        }
        return newList;
    }

    public List<StudentDto> findIdList(int id) {
        List<StudentDto> copyList = new ArrayList<>();
        copyList.add(list.get(id - 1));
        return copyList;
    }

    public List<StudentDto> copyList(List<StudentDto> originList) {
        return new ArrayList<>(originList);
    }

    public int averige() {
        int sum = 0;
        for (StudentDto studentDto : list) {
            sum += studentDto.getScore();
        }
        return sum / count;
    }
}
