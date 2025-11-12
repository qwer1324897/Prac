package stm.dto;

public class StudentDto {

    private String name;
    private Integer age;
    private Integer score;

    public StudentDto(String name, Integer age, Integer score) {
        this.name = name;
        this.age = age;
        this.score = score;
    }

    public StudentDto() {}

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getAge() {
        return age; 
    }

    public void setScore(Integer score) {
        this.score = score;
    }
    
    public Integer getScore() {
        return score;
    }

}
