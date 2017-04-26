import HomeController from './home.controller'
import {AccountOpen} from 'components/componentControl'
import {getViewContainer} from 'common/util'

export default class Home extends HomeController{
    start(){
        let accountOpen = AccountOpen.load();
        this.render(accountOpen,getViewContainer());//向home注入component(accountOpen)
        this.bind();//绑定
    }

    bind(){//业务级绑定
        this.goToInformation();
    }
}