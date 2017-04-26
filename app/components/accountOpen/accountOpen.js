import './style/accountOpen.css'
import template from './accountOpen.html'
import accountOpenModel from './accountOpen.model'
import {getViewContainer} from 'common/util'
import BaseComponent from '../BaseComponent'

export default class AccountOpen extends BaseComponent{
    constructor(){
        super();
        this.setTemplate(template);
        this.setModel(accountOpenModel);
        this.bind();
    }

    load(){
        return this.changeModel();
    }

    bind(){//组件级绑定

    }
}