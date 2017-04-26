import $ from 'jquery'
import BaseController from 'views/BaseController'
export default class TandCController extends BaseController{
    goToTC(){
        let E = {
            toTC:()=>{
            }
        };
        $('#continue').off('click',E.toTC).on('click',E.toTC)
    }

    test(){
        setTimeout(function(){
            $('#workout-dialog').show();
        },3000)
    }
}