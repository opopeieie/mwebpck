import $ from 'jquery'
import './style/dialog.css'
import template from './dialog.html'
import DialogModel from './dialog.model.js'
import BaseComponent from '../BaseComponent'

export default class Dialog extends BaseComponent{
    constructor(){
        super();
        this.setTemplate(template);
        this.setModel(DialogModel);
        this.bind();
    }

    load(){
        return this.changeModel();
    }

    bind(){

    }

    layerShow(){
        if ($('home-maskLayer').css('display', 'none')) {
            $("#home-maskLayer").show();
        }
        $("#workout-dialog").show();
    }

    layerHide(obj){
        $("#home-maskLayer").hide();
        $("#workout-dialog").hide();
    }




}
