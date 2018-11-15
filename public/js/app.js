$('.addKudos').on('click', function(event){
    event.preventDefault;
    console.log('Kudos button clicked!');
    $.ajax({
        method: "GET",
        url: '/users'
    }).then(function(response){
        console.log(response)
        JSON.stringify(response, null, 2)
        // console.log(response)
        for(i=0; i< response.length; i++){
            // console.log(response[i].first_name)
            $('.kudosToList').append(`<option class = 'toOption' value = ${response[i].first_name}>${response[i].first_name}</option>`);
            $('.kudosFromList').append(`<option class = 'fromOption' value = ${response[i].first_name}>${response[i].first_name}</option>`);
        }
        
    })
});

$('.postKudos').on('click', function(event){
    event.preventDefault;
    console.log('Adding Kudos');
    let data = {
        to: $('.toOption').val(),
        // from: $('.fromOption').val().trim(),
        title: $('.kudosTitle').val(),
        body: $('.kudosBody').val()
    }
    console.log(data)
    $.ajax({
        method: "POST",
        url: '/kudos',
        data: data
}).then(function(response){
    // console.log(response)
    // console.log(data)
    console.log('this is the response from the server')
    // data.to.val('')
    // data.title.val('')
    // data.body.val('')
    // window.location.reload()
});
});

$(document).ready(function(){
    console.log('ready')
    $.ajax({
        method: "GET",
        url: '/kudos'
    }).then(function(response){
        // console.log(response)
        JSON.stringify(response, null, 2)
        for(i=0; i< response.length; i++){
            // console.log(response[i])
            $('.kudosList').append(`<div class = "card"><div class = "card-body">title:${response[i].title} <br>message:${response[i].body}</div></div>`);
        }
    });
})

// clearing out the modal, not multiplying the names from the dropdown, correctly posting to the database based upon the model, styling the page more