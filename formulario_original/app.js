(function() {
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo");
    const btn = document.getElementById("btn");
    const formCadastro = document.querySelector(".formCadastro");
    btn.disabled = true;

    //=======================

    const txtDescricao = document.getElementById("txtDescricao");
    const contadorContainer = document.getElementById("contador"); 
    const resta = document.getElementsByTagName("span")[0];
    const maxima = txtDescricao.maxLength 
    showMaxNumberOfChar(maxima);

    //=========================

    const aceitarContrato = document.getElementById("chkAceito");
    const feedbackMessage = document.getElementById("feedbackMessage");
    let closeAlert = document.getElementsByTagName("button")[0];


    function showFeedBack(feedback, cb) {
        feedbackMessage.classList.add("show")
        const messageAlert = document.querySelector(".show p");
        messageAlert.textContent = feedback

        closeAlert.focus()

        function hideErrorMessage() {
            console.log("Clicado fechar")
            feedbackMessage.classList.remove("show");
            closeAlert.removeEventListener("click", hideErrorMessage) 
            closeAlert.removeEventListener("keyup", pressedKeyboardOnBtn)

            if (typeof cb === "function") {
                cb()
            }
        }

        function pressedKeyboardOnBtn(e) {

            if(e.keyCode === 27) {
                hideErrorMessage()
            }          
        }

        closeAlert.addEventListener("click", hideErrorMessage) 
        closeAlert.addEventListener("keyup", pressedKeyboardOnBtn)        
    }


    formCadastro.addEventListener("submit", function(e){
        if(!txtTitulo.value) {
            showFeedBack("Preencha todos os campos!", function() {
                txtTitulo.focus()
            })
            e.preventDefault()
        }
        console.log(txtTitulo.value)
    })

    contadorContainer.removeAttribute("style");
    
    function checkLength() {
        let numeroLetrasDigitadas = this.value.length
        let caracteresRestantes = parseInt(maxima - numeroLetrasDigitadas);
        showMaxNumberOfChar(caracteresRestantes);
    }

    function showMaxNumberOfChar(n) {
        resta.textContent = n

    }
   
    txtDescricao.addEventListener("input", checkLength);

    aceitarContrato.addEventListener("change", function(e) {
        
        btn.disabled = !this.checked;
    })
        
})()
