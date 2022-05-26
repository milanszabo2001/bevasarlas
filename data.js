adatok=[
    {id:1,
    nev:"alma",
    mennyiseg:"2kg"},
    {id:2,
    nev:"rozskenyér",
    mennyiseg:"negyed"},
    {id:3,
    nev:"joghurt",
    mennyiseg:"2 darab"},
    {id:4,
    nev:"sajt",
    mennyiseg:"300g"},
]

//let termekek = []

function render(){
    for(let obj of adatok){
        let li = document.createElement("li")
    li.classList.add("d-flex","justify-content-between")
    li.innerHTML=`<span>${obj.nev} - ${obj.mennyiseg}</span>`
    let x=`<i id="${obj.id}" onclick="torol(this)" class="fa-solid fa-x"></i>` 
    li.innerHTML+=x
    document.getElementById('lista').appendChild(li)
    }
}
render()



function add(){
    let nev = document.getElementById('nev').value
    let mennyiseg = document.getElementById('mennyiseg').value
    let maxId=adatok.reduce((m,obj)=>obj.id>m ? obj.id : m , 0)
    console.log(maxId +' maxId')
    let obj={}
    obj.id=maxId+1
    obj.nev=nev
    obj.mennyiseg=mennyiseg
    adatok.push(obj)
    document.getElementById('lista').innerHTML=''
    render()
    
}

function torol(obj){
    let id=obj.id
    console.log(id)
    let newArr=adatok.filter(obj=>id != obj.id)
    adatok=newArr
    document.getElementById('lista').innerHTML=''
    render()
}

function torles(){
    adatok=[]
    document.getElementById('lista').innerHTML=''
    render()
}

/*function add(){
    var termek = document.getElementById("bevitel").value
    var li = `<li>${termek}</li>`
    document.getElementById("lista").appendChild(li)
}*/


//let elem = document.querySelector('li')
    //elem.parentNode.removeChild(elem)
    
    
/*let elem = document.getElementById('lista')
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild)
}*/