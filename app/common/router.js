import $$ from './util'

class Router{
    constructor(viewPath){
        this.viewPath = viewPath;
        this.currentView = '/';//当前步骤
        this.routes = [];//所有走过的route
        this.step = 0;//每个route的步骤
    }

    init(){
        var _this = this;
        window.addEventListener('hashchange', function (event) {
            var route = {};
            var view = location.hash.substr(1).replace(/\?\d+/, '');

            if (view == "home" || view == "login") {//如果回到主页或登录页面，routes(流程)重置
                _this.routes = [];
                delete _this.subroute;
            }
            route.path = view;
            route.step = ++_this.step;
            if(view.indexOf('/')!==-1){
                route.trueView=view.substr(view.indexOf('/')+1);
                route.subroute=view.substr(0,view.indexOf('/'));
                _this.subroute=route.subroute;
            }
            _this.routes.push(route);

            _this.currentView = view;
        }, false);
        return this;
    }

    matchRoute(hash){
        if (this.routes.length > 0) {
            for (var i = 0, len = this.routes.length; i < len; i++) {
                if (this.routes[i] == hash) {
                    return true;
                }
            }
        }
    }

    gotoView(path){
        if (path !== "home" && path !== "login" ) {
            if(this.subroute){
                path=this.subroute+"/"+path;
            }
        }
        location.hash = '#' + path + '?' + Date.now();
        // force clear timer after page change
        // refs dialog.js line:76
        document.body.click();
    }
}

export default new Router()