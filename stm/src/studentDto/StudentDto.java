package studentDto;

import java.util.Scanner;

public class StudentDto {

    Scanner scanner = new Scanner(System.in);

    private String name;
    private int age;
    private int score;

    public StudentDto(String name, int age, int score) {
        this.name = name;
        this.age = age;
        this.score = score;
    }

    public void setName(String newName) {
        this.name = newName;
    }

    public String getName() {
        return name;
    }

    public void setAge(int newAge) {
        this.age = newAge;
    }

    public int getAge() {
        return age;
    }
    
    public void setScore(int newScore) {
        this.score = newScore;
    }

    public int getScore() {
        return score;
    }
}
