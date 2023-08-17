document.getElementById('delete-confirm').addEventListener('keyup',function(event){
    const text = event.target.value;
    const deleteBtn = document.getElementById('btn-delete');
    const secret = document.getElementById('secret-info');
    if(text === secret.innerText)
    {
        deleteBtn.removeAttribute('disabled');
        deleteBtn.addEventListener('click',function(){
            secret.style.display = 'none';
        })
    }
    else
    {
        deleteBtn.setAttribute('disabled',true);
    }
})