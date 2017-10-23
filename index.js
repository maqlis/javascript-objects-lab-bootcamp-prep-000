var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value})
  }
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  Object.assigh(obj, {[key]: value})
  return obj
}
