const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }

}

showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const section = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollOn)

function scrollOn() {
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;

        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('on')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('on')
        }
    })
}