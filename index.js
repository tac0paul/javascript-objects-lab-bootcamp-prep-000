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
  const newObj = Object.assign({[obj]:key},obj)
  delete newObj.key
  return newObj
}