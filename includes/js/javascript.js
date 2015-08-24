var base_url = 'http://localhost:3000';
$(document).ready(function(){

    $('select').change(function(){
        var item_id = $('select option:selected').attr('id');
        $.ajax({
            url: base_url + '/get-nutrition-values&item_id='+item_id,
            method: 'POST'
        }).done(function(res){
            display_nutritions(res);
        });
    });

});

function display_nutritions(nuts){
    var text = '<br/><br/>';
    $.each(nuts, function(k, v) {
        //display the key and value pair
        text += (k + ' : ' + v);
        text += '<br />';
    });
    $('#nutritions').html(text);
}