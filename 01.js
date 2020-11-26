/**
 * 在前端很多展示需求中，经常需要对大数字添加分隔符，每三位加个逗号，
 * 比如"10,689,025"，"99,723"，
 * 请用js实现一个函数sortString，输入一个数组，数组长度小于10，
 * 数组内是添加完分隔符后的字符串，字符串长度小于10，
 * 请对字符串从小到大的排序，并返回。
 * 输入示例：["10,689,025", "99,723", "100", "11,000"]
 * 输出示例：["100", "11,000", "99,723", "10,689,025"]
 *（代码请提交到git，并把地址粘贴到框中）
 */

const data = ["10,689,025", "99,723", "100", "11,000"];
function sortNumber(a, b) {
  return a - b;
}
function sortString(list) {
  let map = new Map();
  for (let i = 0; i < list.length; i++) {
    map.set(
      list[i]
        .split(",")
        .reduce((accumulator, currentValue) => accumulator + currentValue),
      list[i]
    );
  }
  //   map.forEach((value, key) => {
  //     console.info(value, key);
  //   });
  let arr = [];
  for (let key of map.keys()) {
    arr.push(key - 0);
  }
  arr.sort(sortNumber);
  console.info(map);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === map.get(arr[i])) {
      // arr[i] = map.get(arr[i])
    }
  }
  console.info(arr);
}

sortString(data); // ["100", "11,000", "99,723", "10,689,025"]
