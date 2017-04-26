import TandCController from './t&c.controller.js'
import {getViewContainer,combination} from 'common/util'
import {MainContainer,TandCComponent,Dialog} from 'components/componentControl'

export default class TandC extends TandCController{
    start(){
        let container = MainContainer.load();
        let subRoute = container.subRoute;
        this.render(container.container,getViewContainer());

        this.subRender(subRoute,TandCComponent.load(),Dialog.load());
        this.bind();//绑定
    }

    bind(){//业务级绑定
        this.goToTC();
    }
}