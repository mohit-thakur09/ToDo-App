window.onload=()=>{
    const btn= document.querySelector('#btn1');
    const ul = document.getElementById('list1');
    const f = document.frm;
    const s=f.ser;
    btn.addEventListener('click',()=>{
        let item = prompt("Enter ToDo?");
        ul.innerHTML+='<li>'+item.toUpperCase()+'</li>';

    });
    ul.addEventListener('dblclick',(e)=>{
        let li=ul.querySelectorAll('li');
        ul.innerHTML="";
        for(let x of li){
            if(e.target.innerText!=x.innerText){
                ul.innerHTML+='<li>'+x.innerHTML+'</li>';
            }
        }
    });

    let find=(val)=>{
        let item = ul.querySelectorAll('li');
        item.forEach(x=>{
            if(!x.innerText.toUpperCase().includes(val.toUpperCase())){
                x.classList.add('hide');
            }
            else{
                x.classList.remove('hide');
            }
        });
    }

    s.addEventListener('keyup',(e)=>{
        find(s.value);
    });

}