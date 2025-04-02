const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })

    console.log(entries)
})

const textItem = document.querySelectorAll('.textItem')
console.log(textItem)

textItem.forEach((element) => myObserver.observe(element))

const myObserver2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })

    console.log(entries)
})

const textItem2 = document.querySelectorAll('.textItem320px')
console.log(textItem2)

textItem2.forEach((element) => myObserver2.observe(element))