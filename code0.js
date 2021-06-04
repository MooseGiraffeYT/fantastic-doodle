gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDNewObjectObjects1= [];
gdjs.Main_32MenuCode.GDNewObjectObjects2= [];
gdjs.Main_32MenuCode.GDNewObject2Objects1= [];
gdjs.Main_32MenuCode.GDNewObject2Objects2= [];
gdjs.Main_32MenuCode.GDNewObject3Objects1= [];
gdjs.Main_32MenuCode.GDNewObject3Objects2= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Select", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\confirmMenu.mp3", false, 100, 1);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\sounds\\freakyMenu.mp3", 1234, true, 100, 1);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDNewObjectObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewObjectObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewObject2Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewObject2Objects2.length = 0;
gdjs.Main_32MenuCode.GDNewObject3Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewObject3Objects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
