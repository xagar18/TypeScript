function concatenante(...values: string[]) {
  return values.join("");
}
const res = concatenante("hello", "hyy", "h");
console.log(res);

function concatenante2(num:number,...values: string[]) {
  return values.join("");
}
const res2 = concatenante2(1,"hello", "hyy", "h");
console.log(res2);

export {};
