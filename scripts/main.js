$(document).ready(function(){
  //PART-1
    $("#btnOne").click(function(){
        alert("The paragraph was clicked.");
    });
  //PART-2
    $("#btnTwo").click(function(){
        $(".update-html").replaceWith("<h2>Hello World!</h2>");
    });
  //PART-3 w3schools & stackover flow
    $("#btnThree").click(function(){
        $("#text-update").attr("value", "hello");
    });
    //PART-4 classnotes
      $("#btnCopyHtml").click(function(){
        var copiedHtml = $(".copy-html").html();
          $(".paste-html").replaceWith(copiedHtml);
      });
      //PART-5
        $("btnCopyValues").click(function(){
          var copiedValue = $('#copy-text').val();
            $('#paste-text').val(copiedValue);
          /*var copiedValue = $("#copy-text").html();
            $("#paste-text").val("copiedValue");*/
        });

      // correct code for part 5:

     /*$('#btnCopyValues').on('click', part5);
******************************why do we use function here? **************
**********************can we write the part 4' code with function as well? ****************
    function part5(){
        var copiedValue = $('#copy-text').val();
        $('#paste-text').val(copiedValue);
    }*/

});
