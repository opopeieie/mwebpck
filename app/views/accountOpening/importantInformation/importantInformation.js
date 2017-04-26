import ImportantInformationController from './importantInformation.controller'
import {getViewContainer,combination} from 'common/util'
import {Guide,MainContainer,Dialog} from 'components/componentControl'

export default class ImportantInformation extends ImportantInformationController{
    start(){
        let container = MainContainer.load();
        let subRoute = container.subRoute;
        this.render(container.container,getViewContainer());


        this.subRender(subRoute,Guide.load(),Dialog.load());//子组件渲染
        this.bind();//绑定
    }

    bind(){//业务级绑定
        this.goToTC();
    }
}