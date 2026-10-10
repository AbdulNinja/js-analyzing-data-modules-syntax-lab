function combineUsers(...args) {
  let combinedObject = {
    users : []

  }
  for (let currentArray of args){
    combinedObject.users.push(...currentArray)

  }
  combinedObject.merge_date = new Date().toString('M/d/yyyy');
  
  return combinedObject;
  
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};