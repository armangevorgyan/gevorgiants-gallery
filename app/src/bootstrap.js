import responsiveHandler from 'helpers/responsive';

responsiveHandler();

/**
 * @description Date format
 * @returns {string}
 */
Date.prototype.yyyymmdd = function () {
  const mm = this.getMonth() + 1; // getMonth() is zero-based
  const dd = this.getDate();

  return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
  ].join('-');
};

/**
 *
 * @param key
 * @returns {*}
 */
Array.prototype.uniqBy = function (key) {
  return this.reduce((carry, item) => {
    if (item[key] && carry.findIndex(c => c[key] === item[key]) === -1) {
      carry.push(item);
    }

    return carry;
  }, []);
};

/**
 * @description Array diff
 * @param a
 * @returns {*[]}
 */
Array.prototype.diff = function (a) {
  return this.filter(it => a.indexOf(it) < 0);
};

/**
 * @description String replace all
 * @param pattern -  pattern
 * @param replacement - replacement
 * @returns {String|String|string}
 */
String.prototype.replaceAll = function (pattern, replacement) {
  let value = this;

  if (!pattern) return value;

  while (value.indexOf(pattern) !== -1) {
    value = value.replace(pattern, replacement);
  }
  return value;
};

/**
 *
 * @param event
 */
window.eventPreventDefaultHandler = (event) => {
  event.preventDefault();
};


Array.prototype.getDuplicates = function () {
  const duplicates = {};
  for (let i = 0; i < this.length; i++) {
    if(duplicates.hasOwnProperty(this[i])) {
      duplicates[this[i]].push(i);
    } else if (this.lastIndexOf(this[i]) !== i) {
      duplicates[this[i]] = [i];
    }
  }

  return duplicates;
};
