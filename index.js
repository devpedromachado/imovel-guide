
function verTelefone(telefone) {
    telefone.innerText = '(99) 99999-9999';
}

function mascaraCpf(input) {
     
    let v = input.value; 

    if (isNaN(v[v.length - 1])) {
        input.value = v.substring(0, v.length - 1);
        return;
    }

    input.setAttribute("maxlength", "14");

    if (v.length === 3 || v.length === 7) input.value += ".";
    if (v.length === 11) input.value += "-";
}

function mascaraTelefone(input) {

    let v = input.value; 

    if (isNaN(v[v.length - 1])) {
        input.value = v.substring(0, v.length - 1);
        return;
    }

    input.setAttribute("maxlength", "13");

    if(v.length === 2) input.value += " ";
    if(v.length === 8) input.value += "-";
}

function enviarMensagem() {
    alert(`Mensagem enviada!`)
}

function calcular() {   
    let campoResultado = document.getElementById('resultado'); 

    let num1 = document.getElementById('num1').value;
    num1 = parseInt(num1); 
    let num2 = document.getElementById('num2').value;
    num2 = parseInt(num2); 
    let num3 = document.getElementById('num3').value;
    num3 = parseInt(num3); 

    let result = (num2 * num3) / num1; 

    campoResultado.value = result;
}

function abrirModal(src) {
    let modal = document.getElementById("modal");
    let imgModal = document.getElementById("imgModal");

    imgModal.src = src;
    modal.style.display = "block";
}

function fecharModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Função html2canvas
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#download-btn').addEventListener('click', function() {
        let elemento = document.querySelector('.canvas'); 
    
        html2canvas(elemento).then(function(canvas) {
            let link = document.createElement('a');
            link.download = 'captura.png'; 
            link.href = canvas.toDataURL();
            link.click();
        })
    
    })
})

//Função zoom
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav1 = document.querySelector('.nav1');
    const nav2 = document.querySelector('.nav2');

    menuToggle.addEventListener('click', () => {
        nav1.classList.toggle('active');
        nav2.classList.toggle('active');
    });
});

