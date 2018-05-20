var recipes = {};
updateObjectWithKeyAndValue(object, key, value)
function updateObjectWithKeyAndValue(obj,prop,value)
{
  var newObj = Object.assign({},obj,['prop':value)
  return [newObj]
}