import 'css/base'
import $ from 'jquery'
import {Home} from 'views/viewControl'

$(document).ready(function () {
    window.onhelp = function () {//屏蔽F1帮助
        return false
    };

    document.onkeydown = function () {

        if (//屏蔽F5
            (event.keyCode == 116)) {

            event.keyCode = 0;

            event.returnValue = false;

        }
    };

    $.ajaxSetup({
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Content-Type", "application/json;charset:utf-8;");
            xhr.setRequestHeader("VTM-TOKEN-KEY", Terminal.getToken());
        }
    });
    Home.start();

});