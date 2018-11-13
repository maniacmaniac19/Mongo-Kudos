$('.addKudos').on('click', function(event){
    event.preventDefault;
    console.log('Kudos button clicked!');
    $('')
});

$('.postKudos').on('click', function(event){
    event.preventDefault;
    console.log('Adding Kudos');
    let data = {
        to: $('.kudosFromList').val().trim(),
        from: $('kudosFromList').val().trim()
    }
    console.log($('.kudosFromList').val());
    console.log($('.kudosToList').val()); 
    $.ajax({
        method: "POST",
        url: '/kudos',
        data: data
});
});

$.ajax({
    method: "GET",
    url: '/users'
})
