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
const imgItem = document.querySelectorAll('.imgItem')

textItem.forEach((element) => myObserver.observe(element))

imgItem.forEach((img) => myObserver.observe(img))