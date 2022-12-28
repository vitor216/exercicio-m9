$('#limparConcluidos').hide() // oculta o botão Limpar Concluídos
$('#limparTudo').hide()

$('#adicionar').click(() => {
    const valor = $('#NomedaTarefa').focus().val()
    if (valor) {
$('#limparConcluidos').show() // exibe o botão Limpar Concluídos
$('#limparTudo').show()
$('#NomedaTarefa').val('')
$('<li>')
        .text(valor)
        .appendTo('#lista')
        .click(() => $(event.target).toggleClass('riscado')) // acrescenta ou remove a classe riscado
        .dblclick(() => $(event.target).remove()) // se der duplo clique, remove
    }
})

$('#NomedaTarefa').focus().keyup(() => {
    if (event.keyCode === 13) $('#adicionar').click()
})

$('#limparTudo').click(() => {
    $('#lista li').remove();
    $('#limparConcluidos').hide(); // oculta o botão Limpar Concluídos
    $('#limparTudo').hide();
    $('#NomedaTarefa').val('').focus();
})


 // se clicar no botão limpar concluidos, remove todos os riscados 
$('#limparConcluidos').click(() => {
$('#lista li.riscado').remove();
})