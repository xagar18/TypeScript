async function fetchedData(): Promise<number> {
  const data = await fetch("https://api.example.com/data");
  const res = await data.json();
  return res;
}


const result = async () => {
  const data = await fetchedData();
  console.log(data);
}

// since we dont have tsconfig file so promise<number> is not working here we need to run this file using tsc --lib es2015,dom asysc-func.tsin order to make it work

export{};

// it will work if will use tsconifg.js0n
