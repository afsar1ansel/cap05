// fill in javascript code here
let doctor = document.getElementById("name")
let docId = document.getElementById("docID")
let dept = document.getElementById("dept")
let exp = document.getElementById("exp")
let mail = document.getElementById('email')
let ph = document.getElementById('mbl')
let form = document.querySelector("form")

let body = document.querySelector('tbody')


let alldata = [];

form.addEventListener('submit', function(e){
e.preventDefault()
    let data = {
        doctor : doctor.value,
        docId : docId.value,
        dept : dept.value,
        exp : exp.value,
        mail : mail.value,
        ph : ph.value
    }

    alldata.push(data)
    console.log(alldata)
    display()
})

function display(){

    body.innerHTML = "";
    alldata.forEach((element,index)=>{
        let tr = document.createElement('tr')
        let tname = document.createElement('td')
        let tId = document.createElement('td')
        let tspec = document.createElement('td')
        let texp = document.createElement('td')
        let tmail = document.createElement('td')
        let tmob = document.createElement('td')
        let tRole = document.createElement('td')
        let tdelete = document.createElement('button')

        tname.innerText = element.doctor
        tId.innerText = element.docId
        tspec.innerText = element.dept
        texp.innerText = element.exp
        tmail.innerText = element.mail
        tmob.innerText = element.ph
        
        if(texp.innerText>=5){
            tRole.innerText = "Senior"
        }else if(texp.innerText>2&&texp.innerText<5){
            tRole.innerText="Junior"
        }else if(texp.innerText<=1){
            tRole.innerText = 'Trainee'
        }

        tdelete.innerText = 'Delete'

        tdelete.addEventListener('click', function(){
            dele(element,index)
        });

        tr.append(tname,tId,tspec,texp,tmail,tmob,tRole,tdelete)
        body.append(tr)
    });

    function dele(element,index){
        alldata.splice(index,1)
        console.log(alldata)
        display()

    }

}
