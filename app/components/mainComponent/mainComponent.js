import './style/mainComponent.css'
import template from './mainComponent.html'
import mainComponentModel from './mainComponent.model.js'
import BaseComponent from '../BaseComponent'

export default class MainComponent extends BaseComponent{
    constructor(){
        super();
        this.setTemplate(template);
        this.setModel(mainComponentModel);
        this.bind();
    }

    load(){
        return this.changeModel();
    }

    bind(){

    }




}
