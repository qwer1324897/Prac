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
        System.out.print(text);
        return scanner.nextLine();
    }

    public static int printAndInputInteger(String text) {
        System.out.println(text);
        while (!scanner.hasNextInt()) {
            System.out.print("\n유효하지 않은 값입니다. 다시 입력해주세요. \n > ");
            scanner.nextLine();
        }
        int number = scanner.nextInt();
        scanner.nextLine();
        return number;
    }
}
