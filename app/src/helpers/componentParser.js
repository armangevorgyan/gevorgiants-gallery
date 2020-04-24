import React from 'react';

const isReactComponent = value => typeof value.$$typeof === 'symbol';
const placeholderRegex = /(\{\{[\d|\w]+\}\})/;

const formatStringToComponent = (str, ...valuesForPlaceholders) => {
  let hasObject = false;
  const res = (str || '')
    .split(placeholderRegex)
    .filter(textPart => !!textPart)
    .map((textPart, index) => {
      if (textPart.match(placeholderRegex)) {
        const matchedKey = textPart.slice(2, -2);
        let valueForPlaceholder = valuesForPlaceholders[matchedKey];

        // If no value found, check if working with an object instead
        if(valueForPlaceholder === undefined) {
          const valueFromObjectPlaceholder = valuesForPlaceholders[0] ? valuesForPlaceholders[0][matchedKey] : undefined;
          if(valueFromObjectPlaceholder !== undefined) {
            valueForPlaceholder = valueFromObjectPlaceholder;
          } else {
            // If value still isn't found, then it must have been undefined/null
            return valueForPlaceholder;
          }
        }

        if(isReactComponent(valueForPlaceholder)) {
          hasObject = true;
          return React.Children.toArray(valueForPlaceholder).map(component => ({...component, key: index.toString()}));
        }

        return valueForPlaceholder;
      }
      return textPart;
    });
  // If the results contains a object return an array otherwise return a string
  if (hasObject) return res;
  return res.join('');
};

export default formatStringToComponent;
