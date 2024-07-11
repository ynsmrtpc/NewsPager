const $ = (id) => document.getElementById(id)
const sumbitBtn = $('sumbitBtn');
const toast = $('toast');
const inputName = $('inputName')

sumbitBtn.addEventListener('click', toastHTML)

function toastHTML(e){
    e.preventDefault();
    toast.style.visibility = 'visible';
    toast.innerHTML = `Dear ${inputName.value} </br> Message delivered. We will get back to you as soon as possible. `;

    setInterval(
        function() {
            toast.style.display = 'none'
            location.reload();  
        }, 
        2000);

}