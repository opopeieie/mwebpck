import './style/guide.css'
import template from './guide.html'
import headerBarModel from './guide.model.js'
import {getViewContainer} from 'common/util'
import BaseComponent from '../BaseComponent'

export default class Guide extends BaseComponent{
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
