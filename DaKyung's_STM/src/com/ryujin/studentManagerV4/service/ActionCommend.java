package com.ryujin.studentManagerV4.service;

interface MenuAction {
    void run();    
}

// 동작 코드 프레임
public class ActionCommend implements MenuItem {
    private String name;
    private MenuAction action;
    // private void execute; // 런어블?? 멀티 쓰레딩을 위한 인터페이스! 실행 가능한 작업을 정의하는데 사용됨.
    // 실행할 코드를 runnable 로 묶어서 전달해줄 때 사용됨.
    // runnable 에 run() 이 들어있음!!! run() 에 넣은 코드가 실행됨!!!!!! 신기하다

    public ActionCommend(String name,MenuAction action){
        this.name = name;
        this.action = action;
    }
    
    public String getName() {
        return name;
    }

    public void execute(){
        action.run();
    }
}