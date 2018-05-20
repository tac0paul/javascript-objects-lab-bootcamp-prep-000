var recipes = {};
function updateObjectWithKeyAndValue(object,key,value)
{
 object = {
   prop: 1}
   var newObj = Object.assign({[key]: value},object)
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(obj,key,value)
{
  obj ={};
  return object.key= "value"
}