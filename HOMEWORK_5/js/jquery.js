$(document).ready(function(){
    $("#btnShow").click(function(){
        let getFruit = $("#fruit").val();
        $("#img").attr('src', 'img/'+ getFruit +'.jpg');
        $("#img").show();
    })
})