import './style/mainFooter.css'
import template from './mainFooter.html'
import headerBarModel from './mainFooter.model.js'
import BaseComponent from 'components/BaseComponent'

export default class MainContainer extends BaseComponent{
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
