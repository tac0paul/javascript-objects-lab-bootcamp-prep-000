var recipes = {};
updateObjectWithKeyAndValue(object, key, value)
function updateObjectWithKeyAndValue(obj,key,value)
{
  obj = {prop: 1}
  var newObj = Object.assign({},obj,key.value)
  return [obj,newObj]
}