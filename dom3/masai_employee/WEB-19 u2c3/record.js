
let name = document.getElementById('name')
let id = document.getElementById("employeeID")
let dep = document.getElementById("department")
let exp = document.getElementById("exp");
let mail = document.getElementById("email")
let phone = document.getElementById('mbl')
let form = document.querySelector("form")
let body = document.querySelector('tbody')
let select = document.querySelector("select")
let sortBtn = document.getElementById("filter")



let alldata = [];
sortBtn.addEventListener("click", ()=>{
  let arr = []
  if(select.value=='Frontend'){
    arr = alldata.filter((ele,index)=>{
      return ele.dep == "Frontend"
    })
  }else if(select.value=='Backend'){
    arr = alldata.filter((ele,index)=>{
      return ele.dep == "Backend"
    })
  }else if(select.value=='Operations'){
    arr = alldata.filter((ele,index)=>{
      return ele.dep == "Operations"
    })
  }else if(select.value=='HR'){
    arr = alldata.filter((ele,index)=>{
      return ele.dep == "HR"
    })
  }else if(select.value=='IA'){
    arr = alldata.filter((ele,index)=>{
      return ele.dep == "IA"
    })
  }
 display(arr)
})






form.addEventListener('submit', function(e){
    e.preventDefault()

    let data = {
        id : alldata.length,
        name : name.value,
        Eid : id.value,
        dep : dep.value,
        exp : exp.value,
        mail : mail.value,
        phone : phone.value,
    }
    alldata.push(data)
   
    
    display(alldata)
})


function display(data){
    body.innerHTML = '';
    data.map((ele,index)=>{
        const tr = document.createElement('tr')
        const tname = document.createElement('td')
        const tid = document.createElement('td')
        const tdep = document.createElement('td')
        const texp = document.createElement('td')
        const tmail = document.createElement('td')
        const tphone = document.createElement('td')
        const tform = document.createElement('td')
        const del = document.createElement('button')
    
        tname.innerText = ele.name
        tid.innerText = ele.Eid
        tdep.innerText = ele.dep
        texp.innerText = ele.exp
        tmail.innerText = ele.mail
        tphone.innerText = ele.phone
         if(texp.innerText>=5){
          tform.innerText = 'Senior'
         }else if(texp.innerText>2&&ele.exp<5){
          tform.innerText = 'Junior'
         }else if(texp.innerText<2){
          tform.innerText = 'Fresher'
         }
        del.innerText = "Delete"
    
        tr.append(tname,tid,tdep,texp,tmail,tphone,tform,del)
        body.append(tr);
    
        del.addEventListener('click', function(){
          deletefun(ele,index);
            
        });

    });

   function deletefun(ele,index){
    alldata.splice(index,1)
    // console.log(alldata)
      display(alldata)
    };
};






 











