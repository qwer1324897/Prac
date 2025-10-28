package com.ryujin.studentManagerV4.service;

import java.util.ArrayList;
import java.util.List;

import com.ryujin.studentManagerV4.util.IoManager;

interface MenuItem {
    String getName();
    void execute();
}

// 메뉴 출력 프레임 ~ 
public class Menu implements MenuItem {
    private String name;
    private List<MenuItem> menu = new ArrayList<>();

    public Menu (String name) {
        this.name = name;
    }

    public void add(MenuItem item){
        menu.add(item);
    }

    public String getName() {
        return this.name;
    }

    public void execute() {
        while (true) {
            IoManager.print("");
            for (int i = 0; i < menu.size(); i++) {
                IoManager.print((i + 1) + ". " + menu.get(i).getName());
            }
            IoManager.print("0. 취소");
            String commend = IoManager.input("메뉴 선택 > ");
            if(commend.equals("0"))break;
            try {
                Integer.parseInt(commend);
            } catch (Exception e) {
                System.out.println("잘못된 값입니다. 다시 입력 해 주세요.");
                continue;
            }
            int selecMenu = Integer.parseInt(commend);

            if(selecMenu < 0 || selecMenu > menu.size()){
                System.out.println("잘못된 값입니다. 다시 입력 해 주세요.");
                continue;
            }else{
                menu.get(selecMenu-1).execute();
            }

        }

    };
}
