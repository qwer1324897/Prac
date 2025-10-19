package ioManager;
import java.util.Scanner;

// 입력값과 출력값을 담당하는 클래스

public class IoManager {
    private static Scanner scanner = new Scanner(System.in);
        
    private IoManager() {}

    public static void print(String text) {
        System.out.println(text);
    }

    public static String printAndInputString(String text) {
        System.out.println(text);
        return scanner.nextLine();
    }

}
