package per.joongang.stm.util;
import java.util.Scanner;

public class IoManager {

    private static Scanner sc = new Scanner(System.in);

    private IoManager() {}  // static 이라서 IoManager a1 = new Iomanager(); 이거 안 해도 되는데 혹시 해서 꼬일까봐 미리 막아놓는 메서드

    public static void print(String text) {
        System.out.println(text);
    }

    public static String printAndInputString(String text) {
        System.out.print(text);
        String valueString = sc.nextLine();
        while(valueString.trim().isEmpty()) {
            System.out.print("\n이름은 공란일 수 없습니다. 다시 입력해주세요. \n > ");
            valueString = sc.nextLine();
        }
        return valueString.trim(); // 빈칸(유저가 스페이스바 입력할 경우) 삭제.
    }

    public static int printAndInputInteger(String text) {
        System.out.print(text);
        while(!sc.hasNextInt()) {
            System.out.print("\n유효하지 않은 값 입니다. 다시 입력해주세요. \n > ");
            sc.nextLine(); // int는 엔터키 청소 필수!
        }
        int valueInteger = sc.nextInt();
        sc.nextLine(); // int는 엔터키 청소 필수!
        return valueInteger;
    }

    public static void pause() {
        System.out.print("\nenter 키를 눌러 계속 진행합니다.");
        sc.nextLine();
    }
}
