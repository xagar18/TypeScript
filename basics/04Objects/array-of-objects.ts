type Recipe = {
  title : string,
  instruction: {name:string; quantity:string}[],
}

const processRecipe =(recipe:Recipe)=>{

}


processRecipe({
  title: "title",
  instruction:[
    {name : "Flour", quantity: "1 Kg"},
    {name : "Sugar", quantity: "2 Kg"}
  ]
})
