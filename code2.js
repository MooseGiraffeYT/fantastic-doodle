gdjs.Story_32ModeCode = {};
gdjs.Story_32ModeCode.GDNewObjectObjects1= [];
gdjs.Story_32ModeCode.GDNewObjectObjects2= [];
gdjs.Story_32ModeCode.GDNewObject2Objects1= [];
gdjs.Story_32ModeCode.GDNewObject2Objects2= [];
gdjs.Story_32ModeCode.GDNewObject3Objects1= [];
gdjs.Story_32ModeCode.GDNewObject3Objects2= [];
gdjs.Story_32ModeCode.GDNewObject4Objects1= [];
gdjs.Story_32ModeCode.GDNewObject4Objects2= [];
gdjs.Story_32ModeCode.GDNewObject5Objects1= [];
gdjs.Story_32ModeCode.GDNewObject5Objects2= [];

gdjs.Story_32ModeCode.conditionTrue_0 = {val:false};
gdjs.Story_32ModeCode.condition0IsTrue_0 = {val:false};
gdjs.Story_32ModeCode.condition1IsTrue_0 = {val:false};
gdjs.Story_32ModeCode.condition2IsTrue_0 = {val:false};


gdjs.Story_32ModeCode.mapOfGDgdjs_46Story_9532ModeCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.Story_32ModeCode.GDNewObject2Objects1});gdjs.Story_32ModeCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.Story_32ModeCode.GDNewObject2Objects1);

gdjs.Story_32ModeCode.condition0IsTrue_0.val = false;
gdjs.Story_32ModeCode.condition1IsTrue_0.val = false;
{
gdjs.Story_32ModeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Story_32ModeCode.mapOfGDgdjs_46Story_9532ModeCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Story_32ModeCode.condition0IsTrue_0.val ) {
{
gdjs.Story_32ModeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Story_32ModeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jaydyn/Week1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\confirmMenu.mp3", false, 100, 1);
}}

}


{


gdjs.Story_32ModeCode.condition0IsTrue_0.val = false;
{
gdjs.Story_32ModeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Story_32ModeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Select", false);
}}

}


};

gdjs.Story_32ModeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Story_32ModeCode.GDNewObjectObjects1.length = 0;
gdjs.Story_32ModeCode.GDNewObjectObjects2.length = 0;
gdjs.Story_32ModeCode.GDNewObject2Objects1.length = 0;
gdjs.Story_32ModeCode.GDNewObject2Objects2.length = 0;
gdjs.Story_32ModeCode.GDNewObject3Objects1.length = 0;
gdjs.Story_32ModeCode.GDNewObject3Objects2.length = 0;
gdjs.Story_32ModeCode.GDNewObject4Objects1.length = 0;
gdjs.Story_32ModeCode.GDNewObject4Objects2.length = 0;
gdjs.Story_32ModeCode.GDNewObject5Objects1.length = 0;
gdjs.Story_32ModeCode.GDNewObject5Objects2.length = 0;

gdjs.Story_32ModeCode.eventsList0(runtimeScene);
return;

}

gdjs['Story_32ModeCode'] = gdjs.Story_32ModeCode;
