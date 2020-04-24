const objectToQueryString = data => (new URLSearchParams(data)).toString();

const queryStringToObject = qs => {
  let object = {};
  for(let item of new URLSearchParams(qs)){
    object[item[0]] = item[1];
  }
  return object;
};

const removeEmptyProps = object => {
  const filteredObject = {};
  for (let key in object){
    if(object[key]) {
      filteredObject[key] = object[key];
    }
  }
  return filteredObject;
};

const isExternalLink = link => ['http://', 'https://', '//', 'mailto:'].some(pattern => link.startsWith(pattern));

const parseStringToArray = st => {
  return st.split('_').map(subString => {
    const itemArray = subString.split('|');
    return {
      label: itemArray[1],
      value: itemArray[0]
    };
  });
};


export {
  objectToQueryString,
  queryStringToObject,
  removeEmptyProps,
  parseStringToArray,

  isExternalLink,
};
