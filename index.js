var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value})
  }
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  Object.assign(obj, {[key]: value})
  return obj
}
