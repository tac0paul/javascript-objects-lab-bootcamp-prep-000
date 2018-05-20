var recipes = {};
function updateObjectWithKeyAndValue(object,key,value)
{
 object = {
   prop: 1}
   var newObj = Object.assign({[key]: value},object)
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value)
{
  object ={};
  return obj.key= "value"
}