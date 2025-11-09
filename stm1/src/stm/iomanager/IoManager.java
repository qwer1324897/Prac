package stm.iomanager;

import java.util.Scanner;

public class IoManager {

    private static Scanner sc = new Scanner(System.in);

    private IoManager() {}  // 하단 스태틱 메서드들 생성 방지용

    public static void print(String input) {
        System.out.println(input);
    }   // 단순 출력. sysout 대체

    public static String printAndInputString(String input) {
        System.out.print(input);
        return sc.nextLine();
    }   // 원하는 문구 출력 + 문자열 입력받는 메서드

    public static Integer printAndInputInteger(Integer input) {
        System.out.print(input);
        String userInput = sc.nextLine();
        return Integer.parseInt(userInput.trim());
    }   // 원하는 문구 출력 + 정수 입력받는 메서드

    public static void pause() {
        System.out.println("enter 키를 입력하여 계속 진행합니다.");
        sc.nextLine();
    }
}
