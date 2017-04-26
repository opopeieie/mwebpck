import './style/mainContainer.css'
import template from './mainContainer.html'
import headerBarModel from './mainContainer.model.js'
import BaseComponent from 'components/BaseComponent'
import {HeaderBar,MainComponent,MainFooter} from 'components/componentControl'
import {combination} from 'common/util'

export default class MainContainer extends BaseComponent{
    constructor(){
        super();
        var header = HeaderBar.load();//头部
        this.main = MainComponent.load();//body
        var footer = MainFooter.load();//脚
        // var footer =
        this.setTemplate(combination(template,header,this.main,footer));//组合后塞入
        this.setModel(headerBarModel);
        this.bind();
    }

    load(){
        return {container:this.changeModel(),subRoute:this.main};
    }

    bind(){

    }




}
