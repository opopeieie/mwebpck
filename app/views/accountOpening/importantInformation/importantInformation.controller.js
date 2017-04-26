import $ from 'jquery'
import BaseController from 'views/BaseController'
import {TandC} from 'views/viewControl'
export default class ImportantInformationController extends BaseController{
    goToTC(){
        let E = {
            toTC:()=>{
                TandC.start();
            }
        };
        $('#continue').off('click',E.toTC).on('click',E.toTC)
    }

    
}