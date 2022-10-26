const arr = [1,1,1,2,2,3,3,3,1,1,4,4,4,3,3,5,5,5,5,5,1,3,2,7,8,7,8];

const count = arr.reduce((acc, cur)=>({
  ...acc,
  [cur]:(acc[cur] || 0) + 1
}), {});
console.log(arr);
console.table(count);
