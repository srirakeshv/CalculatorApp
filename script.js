let keys = document.querySelectorAll('.keys')
let screen = document.querySelector('.numberscreen')

keys.forEach(key => {
    key.addEventListener('click', () => {
        if (key.value === 'DEL') {
            let new2=screen.innerHTML.slice(0,-1)
            screen.innerHTML=new2
        }
        else if (key.value === 'RESET') {
            screen.innerHTML = ''
        }
        else if (key.value === '=') {
            let num = screen.innerHTML
            let array = num.match(/(\d+|[+\-*/])/g)
            let num1 = Number(array[0])
            let symbol = array[1]
            let num2 = Number(array[2])
            console.log(array)
            if (symbol === '+') {
                screen.innerHTML = num1 + num2
            }
            else if (symbol === '-') {
                screen.innerHTML = num1 - num2
            }
            else if (symbol === '*') {
                screen.innerHTML = num1 * num2
            }
            else if (symbol === '/') {
                screen.innerHTML = num1 / num2
            }

        }
        else {
            screen.innerHTML += key.value
        }
    })
})
// theme change
let bodyContent=document.querySelector('body')
let header=document.querySelector('header')
let theme=document.querySelector('.theme')
let button=document.querySelector('.button')
let main=document.querySelector('main')
let row=document.querySelectorAll('.row')
let change=document.querySelectorAll('.change')

change.forEach((num,index)=>{
    num.addEventListener('click',()=>{
        console.log('t')
        if(index===0)
        {
            bodyContent.classList.remove('bg')
            header.classList.remove('cl')
            theme.classList.remove('cl1')
            button.classList.remove('cl2')
            button.classList.remove('cl3')
            button.classList.remove('whitetheme')
            main.classList.remove('bg1')
            main.classList.remove('bg2')
            row.forEach(r=>{
                r.classList.remove('bg3')
                r.classList.remove('bg4')
                r.classList.remove('bg5')
            })

            bodyContent.classList.remove('bg6')
            button.classList.remove('purpletheme')
            header.classList.remove('cl4')
            theme.classList.remove('cl5')
            button.classList.remove('cl6')
            button.classList.remove('cl7')
            main.classList.remove('bg7')
            main.classList.remove('bg8')
            row.forEach(r=>{
                r.classList.remove('bg9')
                r.classList.remove('bg10')
                r.classList.remove('bg11')
            })
        }
        else if(index===1)
        {
            bodyContent.classList.add('bg')
            header.classList.add('cl')
            theme.classList.add('cl1')
            button.classList.add('cl2')
            button.classList.add('cl3')
            button.classList.add('whitetheme')
            main.classList.add('bg1')
            main.classList.add('bg2')
            row.forEach(r=>{
                r.classList.add('bg5')
                r.classList.add('bg3')
                r.classList.add('bg4')
            })

            bodyContent.classList.remove('bg6')
            button.classList.remove('purpletheme')
            header.classList.remove('cl4')
            theme.classList.remove('cl5')
            button.classList.remove('cl6')
            button.classList.remove('cl7')
            main.classList.remove('bg7')
            main.classList.remove('bg8')
            row.forEach(r=>{
                r.classList.remove('bg9')
                r.classList.remove('bg10')
                r.classList.remove('bg11')
            })
        }
        else if(index===2)
        {
            bodyContent.classList.remove('bg')
            header.classList.remove('cl')
            theme.classList.remove('cl1')
            button.classList.remove('cl2')
            button.classList.remove('cl3')
            button.classList.remove('whitetheme')
            main.classList.remove('bg1')
            main.classList.remove('bg2')
            row.forEach(r=>{
                r.classList.remove('bg3')
                r.classList.remove('bg4')
                r.classList.remove('bg5')
            })

            bodyContent.classList.add('bg6')
            button.classList.add('purpletheme')
            header.classList.add('cl4')
            theme.classList.add('cl5')
            button.classList.add('cl6')
            button.classList.add('cl7')
            main.classList.add('bg7')
            main.classList.add('bg8')
            row.forEach(r=>{
                r.classList.add('bg9')
                r.classList.add('bg10')
                r.classList.add('bg11')
            })
        }
    })
})