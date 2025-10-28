package per.joongang.stm.repository;
import per.joongang.stm.dto.StudentDto;

public class Repository {
    private StudentDto[] list = new StudentDto[5];
    private int count = 0;

    public void save(StudentDto studentDto) {
        list[count] = studentDto;
        count ++; 
    }

    public StudentDto[] findAll() {
        // 복사
        StudentDto[] newList = new StudentDto[count];

        /* 하단 내용은 필요한 만큼의 배열을 복사해서 리턴하는 내용 
        */
        for(int i = 0; i < count ; i++) {
            String name = list[i].getName();
            int age = list[i].getAge();
            int score = list[i].getScore();
            
            StudentDto studentDto = new StudentDto(name, age, score);
            newList[i] = studentDto;
        }
        return newList;
    }

    public StudentDto[] findByNameContaining(String searchWord) {
        int searchCount = 0;
        for(int i = 0 ; i < count ; i++) {
            if(list[i].getName().contains(searchWord)) {
                searchCount++;  
            }
        }
        StudentDto[] newList = new StudentDto[searchCount];
        int newListCount = 0;
        for(int i = 0 ; i < count ; i++) {
            if(list[i].getName().contains(searchWord)){
                String name = list[i].getName();
                int age = list[i].getAge();
                int score = list[i].getScore();
                StudentDto studentDto = new StudentDto(name, age, score);
                newList[newListCount] = studentDto;
            }
        }
        return newList;
    }

    public int removeByName(String removeName) {
        int removeCount = 0;

        for(int i = 0 ; i < count; i ++) {
            if(list[i].getName().equals(removeName)) {
                for(int x = i ; x < count ; x++) {
                    list[x] = list[x+1];
                }
                count --;
                i --;
                removeCount++;
            }
        }

        return removeCount;
    }

}
