$(document).ready(function()
{    
    $('form').submit(function(e)
    {
        e.preventDefault()
        
        const nomeDaTarefa = $('#item').val()
        const novaLinha = $('<li></li>')

        $(`<p>${nomeDaTarefa}</p>`).appendTo(novaLinha)
        $('#list').append(novaLinha)

        $('#item').val('')
    })

    $('li').click(function() 
    {
        $(this).addClass('riscado')
    });
})