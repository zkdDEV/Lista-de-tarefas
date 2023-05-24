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

    $('ol').on('click','li',function()
    {
        $(this).addClass('riscado')
    });
})