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
function deleteFromObjectByKey(object,key)
{
  var newObj = Object.assign({},object)
  delete newObj.key
}