const query = document.getElementById("query");
const submit = document.getElementById("submit");


submit.addEventListener("click",async ()=>{
    console.log(query.value);
    
    await fetch("http://localhost:8080/llm/" + query.value)
    .then(async res =>{   
        console.log(await res.text());
    })
    .catch(error =>{
        console.log(error);
    });

});
