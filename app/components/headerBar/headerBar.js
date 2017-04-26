import './style/headerBar.css'
import template from './headerBar.html'
import headerBarModel from './headerBar.model'
import {getViewContainer} from 'common/util'
import BaseComponent from '../BaseComponent'

export default class HeaderBar extends BaseComponent{
    constructor(){
        super();
        this.setTemplate(template);
        this.setModel(headerBarModel);
        this.bind();
    }

    load(){
        return this.changeModel();
    }

    bind(){

    }




}
