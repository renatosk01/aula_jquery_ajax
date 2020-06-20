function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP: " + response.cep)
            $(".cep").show();
            $(".barra-progresso").hide();
           // document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            
        }
    })

}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();

});



















/*<!DOCTYPE <!DOCTYPE html>
<html> 
<head>
    <meta charset="utf-8" />
    <title>Minha pagina</title>
    <script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
</head>

<body>
    <input id="cep">
    <button type="button" onclick="consultaCep()">Consultar</button>
    <p id="logradouro"></p>
    <p id="bairro"></p>

</body>
</html>
*/