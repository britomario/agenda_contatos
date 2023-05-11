const form = document.getElementById('form-contact');
let lines = '';
let namesAgenda = [];
let phonesAgenda = [];
const phoneContact = document.getElementById('phone-contact');
form.addEventListener('submit', function(e){
    e.preventDefault();
    addLine();
    addTable();
})

phoneContact.addEventListener('input', formatarTelefone);

function formatarTelefone() {
    let telefone = phoneContact.value.replace(/\D/g, '');

    if (telefone.length > 2) {
      telefone = '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2);
    }

    if (telefone.length > 9) {
      telefone = telefone.substring(0, 9) + '-' + telefone.substring(9);
    }

    phoneContact.value = telefone;
}

function addLine(){
    const nameContact = document.getElementById('name-contact');
    

    if(namesAgenda.includes(nameContact.value)){
        alert(`O nome ${nameContact.value} já esta na sua agenda`)
    } else if(phonesAgenda.includes(parseInt(phoneContact.value))){
        alert(`O numero ${phoneContact.value} já esta na sua agenda`)
    }else{
        namesAgenda.push(nameContact.value);
        phonesAgenda.push(parseInt(phoneContact.value));
        let line = '<tr>';
        line += `<td>${nameContact.value}</td>`;
        line += `<td>${phoneContact.value}</td>`;
        line += '</tr>';
        lines += line
    }

    nameContact.value = '';
    phoneContact.value = '';
}

function addTable(){
    const table = document.querySelector('tbody');
    table.innerHTML = lines;
}