var recipes = {};
updateObjectWithKeyAndValue(object, key, value)
function updateObjectWithKeyAndValue(obj,prop,value)
{
  var newObj = Object.assign({'prop':value},obj)
  return newObj
}