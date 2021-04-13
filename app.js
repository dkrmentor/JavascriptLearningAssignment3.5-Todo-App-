var list = document.getElementById('list')
function add(){
var items = document.getElementById('item')

var li = document.createElement('li')
var editBtn = document.createElement('button')
var delBtn = document.createElement('button')
var br = document.createElement('br')

var liText  = document.createTextNode(item.value) 
var editText  = document.createTextNode('EDIT')
var delText  = document.createTextNode('DELETE')

li.appendChild(liText)
editBtn.appendChild(editText)
delBtn.appendChild(delText)

editBtn.setAttribute('onclick','edit(this)')
delBtn.setAttribute('onclick','del(this)')
// editBtn.setAttribute('class','btn')
// delBtn.setAttribute('class','btn')
// li.setAttribute('class','list_Style')
li.appendChild(br)

li.appendChild(editBtn)
li.appendChild(delBtn)
list.appendChild(li)

item.value = "";

}
function edit(e){
    var add = prompt("Add here" , e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue =add;
}
function del(e){
    e.parentNode.remove()
}
function removeAll(){
    list.innerHTML = ""
}

