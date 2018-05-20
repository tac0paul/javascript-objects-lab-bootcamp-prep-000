var recipes = {};
function updateObjectWithKeyAndValue(obj,prop,value)
{
 obj = {
   prop: value}
 
  var newObj = Object.assign({},obj[prop.value])
  return newObj
}