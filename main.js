
function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            $(".cep").show()
            $("#input_cep").html(response.cep);
            $("#localidade").html(response.localidade);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#uf").html(response.uf);
            }
    })
}
   

$(function(){
    $(".cep").hide();
});           