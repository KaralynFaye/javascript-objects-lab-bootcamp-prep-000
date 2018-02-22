var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function destructiveleUpdateObjectWithKeyAndValue(obj, key, value) {
  obj.push({[key]:value});
  return obj
}