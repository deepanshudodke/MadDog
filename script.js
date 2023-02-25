let audio = document.getElementById('audio');
let song = new Audio('shepard-tone-137065.mp3');
let click_sound = new Audio('click.mp3')
let bone = new Audio('bone.mp3')
let anchor = document.querySelectorAll('a');
anchor.forEach(a => {
    a.addEventListener('mouseover', function() {
        click_sound.play();
    })

    a.addEventListener('click', function() {
        bone.play();
    })
})
audio.addEventListener('click', function() {
    audio.classList.toggle('add');
    if (audio.classList.contains('add')) {
        song.play();
    } else {
        song.pause();
    }
})