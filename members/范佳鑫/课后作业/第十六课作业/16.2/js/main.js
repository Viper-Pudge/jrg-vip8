var a = new Array("1","2","3");
var pushArray = a.push("4");
pushArray = "通过push方法推入项目，现在有"+pushArray+"个数组项";
alert(pushArray);
var popArray = a.pop();
popArray ="通过pop方法自动弹出最后一项并返回:"+popArray;
alert(popArray);
var shiftArray = a.shift();
shiftArray = "通过shift方法，移除第一项并返回："+shiftArray;
alert(shiftArray);
var sliceArray = a.slice(0);
sliceArray = "通过slice方法指定返回项目:"+"\n"+sliceArray;
alert(sliceArray);
var sortArray = a.sort();
sortArray = "通过sort方法升序排列数组"+"\n"+sortArray;
alert(sortArray);