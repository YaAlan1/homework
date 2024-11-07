

const body = document.body

function Header() {
    //a
    const header = document.createElement("header")
    const bloc = document.createElement("div")
    const bloc_blac = document.createElement("div")
    const bloc_gray = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")

    //b
    bloc.classList.add('bloc')
    bloc_blac.classList.add('bloc_blac')
    bloc_gray.classList.add('bloc_gray')

    h1.innerText = "Hello World!"
    p.innerText = "Hello World!"

    //c
    header.append(bloc,)
    bloc.append(bloc_blac, bloc_gray)
    bloc_gray.append(h1, p)

    return header
}

body.append(Header())



function product() {
    //a
    const header = document.createElement("header")
    const product = document.createElement("div")
    const product_box = document.createElement("div")
    const h1 = document.createElement("h1")
    const a = document.createElement("a")

    //b
    product.classList.add('product')
    product_box.classList.add('product_box')

    a.href = "#"

    h1.innerText = "Йогурт"
    a.innerText = "$25"

    //c
    header.append(product)
    product.append(product_box)
    product_box.append(h1, a)

    return header

}


body.append(product())


function input() {

    //a
    const header = document.createElement("header")
    const questionnaire = document.createElement("div")
    const questionnaire_box = document.createElement("div")
    const h1 = document.createElement("h1")
    const input = document.createElement("input")

    //b
    questionnaire.classList.add('questionnaire')
    questionnaire_box.classList.add('questionnaire_box')

    input.type = "text"
    input.placeholder = "Age"

    h1.innerText = "Chris Diaz"

    //c
    header.append(questionnaire)
    questionnaire.append(questionnaire_box)
    questionnaire_box.append(h1, input)

    return header
}

body.append(input())


function line() {
    //a
    const header = document.createElement("header")
    const input = document.createElement("div")
    const input_box = document.createElement("div")
    const im = document.createElement("div")
    const logo = document.createElement("img")
    const logo_2 = document.createElement("img")


    for (let i = 0; i < 3; i++) {
        const p = document.createElement("p")

        input_box.append(p)
    }

    //b
    input.classList.add("input")
    input_box.classList.add("input_box")
    im.classList.add("im")

    logo.srs = "./мусор.png"
    logo_2.srs = "./стрелка.png"
    logo = alt = "мусор"
    logo = alt = "стрелка"

    p.innerText ="1"
    p.innerText = "Bruce Reyes"
    p.innerText = "1997"

    //c
    header.append(input)
    input.append(input_box)
    input_box.append(p,im)
    im.append(img, img)
    
    return header
}


body.append(line())