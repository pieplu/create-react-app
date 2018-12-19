/**
 * Utils helpers
 */

/**
 * isEmptyObject - Check if Object is Empty
 * @param {Object} obj
 * @return {Boolean}
 * @example
 * isEmptyObject({})
 * // => true
 * isEmptyObject({key: 'value'})
 * // => false
 */
const isEmptyObject = (obj = null) => {
  if (!obj) {
    throw new Error('obj param missing in isEmptyObject function');
  }
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

/**
 * Create a Sass Map from an Object
 * @param {Object} object - Contains all variable to inject
 * @example
 * const sass = { "mq-breakpoints" : { "small": "568px", "medium": "768px" } }
 * createSassMap(sass)
 * // => $mq-breakpoints: ( small: 568px, medium: 768px );
 */

const createSassMap = (object) => {
  if (isEmptyObject(object)) {
    console.warn("createSassMap with empty object");
  }

  return Object.entries(object).map((sassMapPaire) => {
    const variableName = sassMapPaire[0];
    const variableMap = sassMapPaire[1];
    return `$${variableName}: ( ${Object.keys(variableMap)
        .map(key => `${key}: ${variableMap[key]}`)
        .join(', ')} );`;
  }).join(' ');

};

module.exports = createSassMap;
