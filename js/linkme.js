function enviar() {
    var emailValue = document.getElementById('emailTxt').value;
    var areaValue = document.getElementById('areaTxt').value;

    console.log(emailValue);
    console.log(areaValue);

    // A variavel database vai receber as funções de acesso ao banco de dados
    var database = firebase.database();
    database.ref('usuario').set({
        email: emailValue,
        mensagem: areaValue
    });
    
}