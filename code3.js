gdjs.Free_32PlayCode = {};
gdjs.Free_32PlayCode.GDNewObject2Objects1= [];
gdjs.Free_32PlayCode.GDNewObject2Objects2= [];
gdjs.Free_32PlayCode.GDNewObjectObjects1= [];
gdjs.Free_32PlayCode.GDNewObjectObjects2= [];
gdjs.Free_32PlayCode.GDNewObject3Objects1= [];
gdjs.Free_32PlayCode.GDNewObject3Objects2= [];
gdjs.Free_32PlayCode.GDNewObject4Objects1= [];
gdjs.Free_32PlayCode.GDNewObject4Objects2= [];

gdjs.Free_32PlayCode.conditionTrue_0 = {val:false};
gdjs.Free_32PlayCode.condition0IsTrue_0 = {val:false};
gdjs.Free_32PlayCode.condition1IsTrue_0 = {val:false};
gdjs.Free_32PlayCode.condition2IsTrue_0 = {val:false};


gdjs.Free_32PlayCode.mapOfGDgdjs_46Free_9532PlayCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Free_32PlayCode.GDNewObjectObjects1});gdjs.Free_32PlayCode.eventsList0 = function(runtimeScene) {

{


gdjs.Free_32PlayCode.condition0IsTrue_0.val = false;
{
gdjs.Free_32PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Free_32PlayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Select", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Free_32PlayCode.GDNewObjectObjects1);

gdjs.Free_32PlayCode.condition0IsTrue_0.val = false;
gdjs.Free_32PlayCode.condition1IsTrue_0.val = false;
{
gdjs.Free_32PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Free_32PlayCode.mapOfGDgdjs_46Free_9532PlayCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Free_32PlayCode.condition0IsTrue_0.val ) {
{
gdjs.Free_32PlayCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Free_32PlayCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jaydyn/Week1", false);
}}

}


};

gdjs.Free_32PlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Free_32PlayCode.GDNewObject2Objects1.length = 0;
gdjs.Free_32PlayCode.GDNewObject2Objects2.length = 0;
gdjs.Free_32PlayCode.GDNewObjectObjects1.length = 0;
gdjs.Free_32PlayCode.GDNewObjectObjects2.length = 0;
gdjs.Free_32PlayCode.GDNewObject3Objects1.length = 0;
gdjs.Free_32PlayCode.GDNewObject3Objects2.length = 0;
gdjs.Free_32PlayCode.GDNewObject4Objects1.length = 0;
gdjs.Free_32PlayCode.GDNewObject4Objects2.length = 0;

gdjs.Free_32PlayCode.eventsList0(runtimeScene);
return;

}

gdjs['Free_32PlayCode'] = gdjs.Free_32PlayCode;
