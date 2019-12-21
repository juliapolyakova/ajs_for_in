export default function orderByProps(obj, props) {
  const array = [];
  for (const item in obj) {
    if (obj.hasOwnProperty.call(obj, item)) {
      array.push({
        key: item,
        value: obj[item],
      });
    }
  }

  array.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
    if (a.key > b.key) {
      return 1;
    }
  });

  const propsArray = [];
  props.forEach((item) => {
    propsArray.push({
      key: item,
      value: obj[item],
    });
    const itemDeleted = item;
    delete obj[itemDeleted];
  });

  const sortArray = propsArray.concat(array);
  return sortArray;
}
