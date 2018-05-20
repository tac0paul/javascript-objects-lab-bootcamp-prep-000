var recipes = {};
function updateObjectWithKeyAndValue(object,key,value)
{
   var newObj = Object.assign({[key]: value},object)
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(obj,key,value) {
  
 obj[key]=value
 return obj
}
function deleteFromObjectByKey(obj,key)
{
  
  var newestObj = Object.assign({},obj)
  delete newestObj.key
  return newestObj
}