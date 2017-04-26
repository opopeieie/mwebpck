import $ from 'jquery'
export default class BaseComponent{
    constructor(){

    }

    setTemplate(template){
        this.template = template;
    }

    setModel(model){
        this.model = model
    }

    changeModel() {
        var templateStr = this.template;
        var language = this.getLocale();

        if (this.model.locale && this.model.locale[language]) {
            var resourceObj = this.model.locale[language];

            var regS = null;

            // 替换模板
            for (var key in resourceObj) {
                regS = new RegExp("\\{" + key + "\\}", "g");
                templateStr = templateStr.replace(regS, resourceObj[key]);
            }
        }
        return $(templateStr)[0].outerHTML;
    }

    getLocale() {
        return sessionStorage.getItem('locale') || 'en';
    }

    load(){}
    bind(){}
}