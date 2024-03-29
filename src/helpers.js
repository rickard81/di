/**
  * Sorts an array by property name
  *
  * @params:
  * property name (string)
 **/

export function sortByProperty(property) {

  return function (a, b) {
    if (a[property] > b[property])
      return 1;
    else if (a[property] < b[property])
      return -1;

    return 0;
  }
}
