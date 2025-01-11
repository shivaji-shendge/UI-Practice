let parent = document.querySelector(".parent");
for(let i=0; i<parent.children.length;i++){
    if(i%2!=0){
        parent.children[i].style.color="red";
    }
    else{
        parent.children[i].style.color="blue"; 
    }
}
const div= document.createElement('div');
console.log(div);
div.className="main";
div.id=Math.round(Math.random() * 10+1);
div.setAttribute("title", "generated title")
div.style.backgroundColor="green";
const addText = document.createTextNode("Chai aur code")
div.appendChild(addText)
document.body.appendChild(div)
