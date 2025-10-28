package com.ryujin.studentManagerV4.controller;

import com.ryujin.studentManagerV4.service.Service;

public class Controller {
    Service service = new Service();

    public void run() {
        service.welcom();
        service.action();
        service.goodbye();
    }
}
