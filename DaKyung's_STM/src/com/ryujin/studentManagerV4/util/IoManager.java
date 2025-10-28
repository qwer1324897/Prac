package com.ryujin.studentManagerV4.util;

import java.util.List;
import java.util.Scanner;

import com.ryujin.studentManagerV4.dto.StudentDto;

public class IoManager {
    static public final Scanner scanner = new Scanner(System.in);

    static public String input(String text){
        System.out.print(text);
        return scanner.nextLine();
    }

    static public void print(String text){
        System.out.println(text);
    }

    static public void printList(List<StudentDto> studentlList){
        for(int i = 0; i < studentlList.size(); i ++){
            String text ="";
            text += "["+(i+1)+"]";
            text += " 이름: "+studentlList.get(i).getName();
            text += ", 나이: "+studentlList.get(i).getAge();
            text += ", 점수: "+studentlList.get(i).getScore();
            System.out.println(text);
        }        
    }
}
