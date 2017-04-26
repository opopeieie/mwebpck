import $ from 'jquery'
import {combination} from 'common/util'

export default class BaseController{
    constructor(title){
        this.title = title;
    }

    setModel(model) {
        this.model = model;
    }

    setTemplate(template) {
        this.template = template;
    }

    render(templateStr,container) {
        container.innerHTML = templateStr;
    }

    subRender(subContainer,...templateStr){
        if(templateStr.length>0){
            let template = combination(subContainer,...templateStr);
            $('#'+$(subContainer).attr('id')).html($(template).html());
            return;
        }
        return subContainer;
    }

    getActionMessage(type, message) {
        var actionMessage = {};
        actionMessage.type = type; //text,signature,print,scanner,sms,account,ocd
        actionMessage.msg = message;
        // $$.debug(JSON.stringify(actionMessage));
        return JSON.stringify(actionMessage);
    }

    sendTranstionMessage(url, data, type, dataType) {
        var _type = type || "POST",
            _dataType = dataType || "json",
            _async = true,
            _contentType = _contentType || "application/json;charset=utf-8";

        return $.ajax({
            type: _type,
            async: _async,
            url: url,
            dataType: _dataType,
            contentType: _contentType,
            data: data
        });
    }
    
}