
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



let alldata = [ 
  {name: 'md afsar ansari', Eid: '1', dep: 'Frontend', exp: '2', mail: 'ablelo778@gmail.com'},
  

  {name: 'md afsar ', Eid: '2', dep: 'Backend', exp: '3', mail: 'ablelo778@gmai'}, 
  {name: 'md afsar ', Eid: '3', dep: 'Operations', exp: '3', mail: 'ablelo778@gmai'},
  {name: 'md afsar ', Eid: '4', dep: 'Frontend', exp: '3', mail: 'ablelo778@gmai'},
  {name: 'md afsar ', Eid: '5', dep: 'IA', exp: '3', mail: 'ablelo778@gmai'},
  {name: 'md afsar ', Eid: '6', dep: 'HR', exp: '3', mail: 'ablelo778@gmai'},
  {name: 'md afsar ', Eid: '7', dep: 'Backend', exp: '3', mail: 'ablelo778@gmai'},
  {name: 'md afsar ', Eid: '8', dep: 'IA', exp: '3', mail: 'ablelo778@gmai'},
  {name: 'md afsar ', Eid: '9', dep: 'Backend', exp: '3', mail: 'ablelo778@gmai'},
  {name: 'md afsar ', Eid: '10', dep: 'Operations', exp: '3', mail: 'ablelo778@gmai'}
];






form.addEventListener('submit', function(e){
    e.preventDefault()

    let data = {
       
        name : name.value,
        Eid : id.value,
        dep : dep.value,
        exp : exp.value,
        mail : mail.value,
        phone : phone.value,
    }
    
    if(unique(data.Eid)){
      alldata.push(data)
    }
    else{
      console.log('Error')
    }

    display(alldata)
    
})

function unique(d){
  console.log(d)
  for(let i=0;i<alldata.length;i++){
    if(alldata[i].Eid==d){
      return false;
    }
  }
  return true;
}


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
    
      
        del.innerText = "Delete"
    
        
    
        del.addEventListener('click', function(){
          // console.log(ele,index)
          dele(ele.Eid,data)
          // console.log(ele.Eid)
          // display(data)
          
        });

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

         tr.append(tname,tid,tdep,texp,tmail,tphone,tform,del)
        body.append(tr);
    });
  
};

function dele(a,data){
 
  // data.forEach((ele,index)=>{
     for(let i=0;i<data.length;i++){
      if(data[i].Eid==a){
        data.splice(i,1)
      //  break; 
     }
     }

     for(let i=0;i<alldata.length;i++){
      if(alldata[i].Eid==a){
        alldata.splice(i,1)
      //  break; 
     }
     }

 
    
     display(data)

}

sortBtn.addEventListener("click", ()=>{
  if(select.value==""){
    display(alldata)
  }else{
    let arr = alldata.filter((ele,index)=>{
   
      if(ele.dep==select.value){
        return ele;
      }
    })
      display(arr)
  }
 
  
 
})




 











