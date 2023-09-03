let task = document.getElementById("task");
let priorityselector = document.getElementById("priority");
let btn = document.querySelector('form')
let body = document.querySelector('tbody')

let alltask = [];
btn.addEventListener('submit', function(e){
    e.preventDefault()
    let data = {
        input : task.value,
        priority : priorityselector.value 
    }
    alltask.push(data)
    body.innerHTML=""
    alltask.map(ele=>{
        const tr = document.createElement('tr')
        const td = document.createElement('td')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')

        td.innerText = ele.input
        td1.innerText = ele.priority
        td2.innerText = 'Fav';
        if(td1.innerText=="High"){
            td2.style.backgroundColor = "red"
        }else if(td1.innerText=="Low"){
            td2.style.backgroundColor = "green"
        }
        tr.append(td,td1,td2)
        body.append(tr)
        
    })
})





