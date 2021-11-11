const names=document.getElementById("name");
const password=document.getElementById("password")
const form=document.getElementById("form");
const errorelement=document.getElementById("error");

form.addEventListener("submit",(par)=>
{
let messages=[];
if(names.value===' ' || names.value==null){
    messages.push("useris saxelis sheyvanaa sachiro")
}

if(password.value.length<=8){
    messages.push("paroli unda iyos 8 simboloze meti")
}

if(password.value.length>=20){
    messages.push("shetanili simboloebi metia 20-ze")
}
if(password.value===password){
    messages.push("password cannot be password")

}

if(messages.length>0)
{
    par.preventDefault();
    errorelement.innerText=messages.join(",")
}


}

)