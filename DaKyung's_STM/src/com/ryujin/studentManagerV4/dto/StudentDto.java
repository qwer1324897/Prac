package com.ryujin.studentManagerV4.dto;

public class StudentDto {
    private String name;
    private int age;
    private int score;

    public StudentDto(String name, int age, int score) {
        this.name = name;
        this.age = age;
        this.score = score;
    }

    public StudentDto(String name, int age) {
        new StudentDto(this.name,this.age,0);
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public int getScore() {
        return score;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setScore(int score) {
        this.score = score;
    }

}
