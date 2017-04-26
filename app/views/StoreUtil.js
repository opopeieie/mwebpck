const appModels =  {
};

export default class StoreUtil{

    static resetAppModel(){
        for(var key in appModels){
            appModels[key]=null;
        }
    }

    static appModel(modelName, modelValue){
        if (!modelName) {
            return;
        }
        if (modelValue) {
            appModels[modelName] = modelValue;
        } else {
            return appModels[modelName];
        }
    }
    
    
}