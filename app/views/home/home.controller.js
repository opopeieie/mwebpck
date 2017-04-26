import $ from 'jquery'
import BaseController from 'views/BaseController'
import {ImportantInformation} from 'views/viewControl'
export default class HomeController extends BaseController{
    goToInformation(){
        let E = {
            toInformation:()=>{
                ImportantInformation.start();
            }
        };

        $('#open-information').off('click',E.toInformation).on('click',E.toInformation)
    }
}