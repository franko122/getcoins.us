function sell( ) {
let buys = document.getElementById("buys");
let lop = document.getElementById("lop");  
let two= document.getElementById("two"); 
let to= document.getElementById("tod"); 
let dol= document.getElementById("dol"); 
let mount= document.getElementById("mount"); 
let linkd= document.getElementById("linkd"); 
let net= document.getElementById("net");  
let nets= document.getElementById("nets");  
let llet= document.getElementById("llet");  
let mins= document.getElementById("mins");  
let side= document.getElementById("side");  
let mounts= document.getElementById("mounts");  
let lode= document.getElementById("lode");  
let pay= document.getElementById("pay");  
let wert= document.getElementById("wert");  
let show= document.getElementById("show");
let goi= document.getElementById("goi");
let logbo = document.getElementById("logbo");
let ouly7 = document.getElementById("ouly7");
let kiol =document.getElementById("kiol");
let nextbtn = document.getElementById("nextbtn");
let accn = document.getElementById("accn");
let naccn = document.getElementById("naccn");
let reqss = document.getElementById("reqss");
let waiy = document.getElementById("waiy"); 
let bn = document.getElementById("bn");
reqss.addEventListener("click",()=>{ 
    waiy.style.visibility="visible"
}); 
side.addEventListener("click",()=>{
    logbo.style.display="block" 
    lop.style.display="none" 
}); 
nextbtn.addEventListener("click",()=>{ 
    logbo.style.display="none"
    kiol.style.display="block" 
 })
buys.addEventListener("click",()=>{ 
if ( !two.value || !dol.value ) {  
to.style.display="block"
lasd.style.display="block"
}  
nets.value = accn.value
naccn.value = dol.value
show.value = two.value
net.value = dol.value
lode.innerHTML= two.value
wert.innerHTML= dol.value
if (two.value < 5) {   
mins.style.display="flex"
return false
}
if (two.value || dol.value) {
lop.style.display="block"
}
if (  !two.value || !dol.value) {
lop.style.display="none"   
}
if ( !two.value  &&   !dol.value) {
lop.style.display="none"   
}    
if ( dol.value  && two.value ) {
lop.style.display="none"   
}  
if ( dol.value  && two.value  ) {
lop.style.display="block"   
ouly7.style.display=" none" 
}     
let rate = 1700
let adds = mount.innerHTML=   two.value  
llet.innerHTML = dol.value
pay.innerHTML = rate * mount.innerHTML
})   
setTimeout(() => { 
to.style.display="none" 
lasd.style.display="none" 
mins.style.display="none" 
}, 6000);   
}
sell( )