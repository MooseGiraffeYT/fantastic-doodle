gdjs.Jaydyn_47Week1Code = {};
gdjs.Jaydyn_47Week1Code.GDNewObjectObjects1= [];
gdjs.Jaydyn_47Week1Code.GDNewObjectObjects2= [];

gdjs.Jaydyn_47Week1Code.conditionTrue_0 = {val:false};
gdjs.Jaydyn_47Week1Code.condition0IsTrue_0 = {val:false};
gdjs.Jaydyn_47Week1Code.condition1IsTrue_0 = {val:false};


gdjs.Jaydyn_47Week1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Jaydyn_47Week1Code.condition0IsTrue_0.val = false;
{
gdjs.Jaydyn_47Week1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Jaydyn_47Week1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "songs\\jaydyn\\Voices.mp3", false, 100, 1);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "songs\\jaydyn\\Inst.mp3", false, 50, 1);
}}

}


{


{
}

}


{


{
}

}


{


{
}

}


};

gdjs.Jaydyn_47Week1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Jaydyn_47Week1Code.GDNewObjectObjects1.length = 0;
gdjs.Jaydyn_47Week1Code.GDNewObjectObjects2.length = 0;

gdjs.Jaydyn_47Week1Code.eventsList0(runtimeScene);
return;

}

gdjs['Jaydyn_47Week1Code'] = gdjs.Jaydyn_47Week1Code;
