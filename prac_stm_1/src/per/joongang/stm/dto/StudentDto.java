package per.joongang.stm.dto;

public class StudentDto {
    private String name;
    private int age;
    private int score;

    public StudentDto(String name, int age, int score) {
        this.name = name;
        this.age = age;
        this.score = score;
    }

    public StudentDto() {}

    public void setName(String name) {
        this.name = name;
    }   // 난 처음에 여기다가 Iomanager을 넣어서 입력받을 때 쓰고싶었지만, 그러면 IO원칙? 대충 추상화레벨에 어긋나서 가독성이 떨어진다고 한다.
        // 그래서 나는 세터는 그럼 대체 언제 써? 라는 의문이 들었지만 나중에 수정 변경 업데이트 시 필요하단다. 그니까 이렇게 만들어 놓는게 무조건 맞다고 한다. (gpt 피셜)

    public String getName() {
        return name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getScore() {
        return score;
    }    
}
