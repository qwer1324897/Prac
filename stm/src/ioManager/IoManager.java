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
        String valueText = scanner.nextLine();
        while (valueText.trim().isEmpty()) {
            System.out.print("\n이름은 공란일 수 없습니다. 다시 입력해주세요. \n > ");
            valueText = scanner.nextLine();
        }
        return valueText.trim();
    }

    public static int printAndInputInteger(String text) {
        System.out.println(text);
        while (!scanner.hasNextInt()) { // hasNextInt api는 scanner.nextLine() 으로 값을 자동으로 읽고 불리언을 출력한다.
            System.out.print("\n유효하지 않은 값입니다. 다시 입력해주세요. \n > ");
            scanner.nextLine(); // 엔터키 청소(int는 필수. String은 아님.)
        }
        int number = scanner.nextInt();
        scanner.nextLine();
        return number;
    }
}
