for (let i = 0; 4 > i; i++) {
    $('#content').append('<div id="boxes"><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div></div>')
}
$('#content').on('click', '.box', function() {
    let box = $(this)
    box.toggleClass('grey')
});