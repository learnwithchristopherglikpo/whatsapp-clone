$(function(){
    $(".search-user").keyup(function(event){
        const search=$(this).val();
        const userListDiv=$(".recentMessages");
        const resultDiv=$(".search-result");

        $.post("http://localhost/whatsapp/core/ajax/search.php",{search:search},function(data){
            userListDiv.hide();
            resultDiv.html(data);
            resultDiv.show();

            if(search===''){
                resultDiv.hide();
                userListDiv.show();
            }
        })
    })
})