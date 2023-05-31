const btn = document.querySelector('.theme-switcher')
const root = document.querySelector(':root')
const icons = document.querySelectorAll('.theme-icon')
const body = document.querySelector('body')

btn.addEventListener('click', function () {
    root.classList.toggle('dark-mode')
    body.classList.toggle('bg')

    for (i of icons) {
        if (i.classList.contains('hidden')) {
            i.classList.remove('hidden')
        } else {
            i.classList.add('hidden')
        }
    }
})