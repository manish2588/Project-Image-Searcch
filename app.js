

const load=document.querySelector("#LoadMore");
const imag=document.querySelector(".image_container");
const formm=document.querySelector("form");
const inputfield=document.querySelector("#sb");
const acessskey="sg3b_CnhAya3oFvYPtsJRNcHdYhwJWh6vkDr9wrNxO4"
const butt=document.querySelector("#butt")
let page=1;

const fetchImage= async (query,page)=>{
console.log(query)
if(page===1)
{
    imag.innerHTML='';
}

const url=`https://api.unsplash.com/search/photos/?query=${query}&per_page=15&page=${page}&client_id=${acessskey}`;
const response= await fetch(url);
const data= await response.json();
console.log(data)
data.results.forEach(photo => {
   
    const imageElement=document.createElement('div');
    const desp=document.createElement('p');
    desp.innerHTML=`<p>${photo.alt_description}<p>`;
    imageElement.innerHTML=`<img src="${photo.urls.regular}"/>`;
    imageElement.appendChild(desp);
    
    imag.appendChild(imageElement);
});

}
butt.addEventListener('click',(e)=>{
    e.preventDefault();
const inputText=inputfield.value.trim();

if (inputText !== ''){
     page=1
    fetchImage(inputText,page)
}
else{
    imag.innerHTML=`<h2>Please Enter</h2>`
}

})
load.addEventListener('click',()=>{
    const inputText=inputfield.value.trim();
    fetchImage(inputText,++page);

});