gdjs.SelectCode = {};
gdjs.SelectCode.GDNewObjectObjects1= [];
gdjs.SelectCode.GDNewObjectObjects2= [];
gdjs.SelectCode.GDNewObject2Objects1= [];
gdjs.SelectCode.GDNewObject2Objects2= [];
gdjs.SelectCode.GDNewObject3Objects1= [];
gdjs.SelectCode.GDNewObject3Objects2= [];

gdjs.SelectCode.conditionTrue_0 = {val:false};
gdjs.SelectCode.condition0IsTrue_0 = {val:false};
gdjs.SelectCode.condition1IsTrue_0 = {val:false};
gdjs.SelectCode.condition2IsTrue_0 = {val:false};


gdjs.SelectCode.mapOfGDgdjs_46SelectCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.SelectCode.GDNewObjectObjects1});gdjs.SelectCode.mapOfGDgdjs_46SelectCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.SelectCode.GDNewObject2Objects1});gdjs.SelectCode.mapOfGDgdjs_46SelectCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.SelectCode.GDNewObject3Objects1});gdjs.SelectCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.SelectCode.GDNewObjectObjects1);

gdjs.SelectCode.condition0IsTrue_0.val = false;
gdjs.SelectCode.condition1IsTrue_0.val = false;
{
gdjs.SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelectCode.mapOfGDgdjs_46SelectCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SelectCode.condition0IsTrue_0.val ) {
{
gdjs.SelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SelectCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Story Mode", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\confirmMenu.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.SelectCode.GDNewObject2Objects1);

gdjs.SelectCode.condition0IsTrue_0.val = false;
gdjs.SelectCode.condition1IsTrue_0.val = false;
{
gdjs.SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelectCode.mapOfGDgdjs_46SelectCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.SelectCode.condition0IsTrue_0.val ) {
{
gdjs.SelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SelectCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Free Play", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\confirmMenu.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.SelectCode.GDNewObject3Objects1);

gdjs.SelectCode.condition0IsTrue_0.val = false;
gdjs.SelectCode.condition1IsTrue_0.val = false;
{
gdjs.SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelectCode.mapOfGDgdjs_46SelectCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.SelectCode.condition0IsTrue_0.val ) {
{
gdjs.SelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SelectCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mods", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\confirmMenu.mp3", false, 100, 1);
}}

}


{


gdjs.SelectCode.condition0IsTrue_0.val = false;
{
gdjs.SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.SelectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.SelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SelectCode.GDNewObjectObjects1.length = 0;
gdjs.SelectCode.GDNewObjectObjects2.length = 0;
gdjs.SelectCode.GDNewObject2Objects1.length = 0;
gdjs.SelectCode.GDNewObject2Objects2.length = 0;
gdjs.SelectCode.GDNewObject3Objects1.length = 0;
gdjs.SelectCode.GDNewObject3Objects2.length = 0;

gdjs.SelectCode.eventsList0(runtimeScene);
return;

}

gdjs['SelectCode'] = gdjs.SelectCode;
