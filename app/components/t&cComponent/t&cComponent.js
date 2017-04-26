import './style/t&cComponent.css'
import template from './t&cComponent.html'
import headerBarModel from './t&cComponent.model.js'
import BaseComponent from 'components/BaseComponent'

export default class TandCComponent extends BaseComponent{
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
