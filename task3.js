//QuerySelector
// let list=document.querySelector(".list-group-item");
// list.style.color="red"
// let secondItem=document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.background="green"
// let thirdItem=document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.display="none"

//QuerySelectorAll
let secondItem= document.querySelectorAll("li")
//console.log(secondItem)
secondItem[1].style.color="green"
let secondItemOdd = document.querySelectorAll("li:nth-child(odd)")
let secondItemEven = document.querySelectorAll("li:nth-child(even)")
for(let i=0;i<secondItemOdd.length;i++){
    secondItemOdd[i].style.backgroun="#f4f4f4"
    secondItemEven[i].style.background="#ccc"
}