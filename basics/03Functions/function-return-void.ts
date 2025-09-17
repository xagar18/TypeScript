const addEventList = (listner : ()=>void)=>{
  document.addEventListener("click", listner)
}

addEventList(()=>{
  console.log("clciked");
})
