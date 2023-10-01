/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthEl= document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const weightEl = document.getElementById('weight-el')
const inputEl = document.getElementById('value-input-box')
const convertBtn = document.getElementById('convert-btn')
const heroSection = document.getElementById('hero-section')
const scale =  document.getElementById('scale')
const milk =  document.getElementById('milk')
const man = document.getElementById('man')
const meterToFeet =3.281
const feetToMeter = 0.3048
const litreToGallon = 0.264
const gallonToLitre = 3.78541
const kiloToPound = 2.204
const poundToKilo = 0.453592
const x = document.getElementById('myAudio')
const y = document.getElementById('btnAudio')

let render = ()=> {
    convertBtn.textContent = 'Next try after 10secs'
    setTimeout(()=> convertBtn.textContent = 'Convert', 10000)
    convertBtn.disabled = true
    setTimeout(()=> convertBtn.disabled = false, 10000)  
    
    y.play()
    setTimeout(()=> x.play(), 1000)

    heroSection.classList.add('hero-anime')
    setTimeout(()=> heroSection.classList.remove('hero-anime'), 10000)
    
    scale.classList.add('scale')
    setTimeout(()=> scale.classList.remove('scale'), 10000)
    
    milk.classList.add('scale')
    setTimeout(()=> milk.classList.remove('scale'), 10000)
    
    man.classList.add('scale')
    setTimeout(()=> man.classList.remove('scale'), 10000)
    let baseValue = inputEl.value     
     
     lengthEl.textContent =  `
     ${inputEl.value} meters = ${(baseValue * meterToFeet).toFixed(3)} feet 
     | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters`
    
     lengthEl.classList.add('highlight')
     setTimeout(()=> lengthEl.classList.remove('highlight'), 10000)
      
     volumeEl.textContent =  `
     ${baseValue} liters = ${(baseValue * litreToGallon).toFixed(3)} gallons 
     | ${baseValue} gallons = ${(baseValue * gallonToLitre).toFixed(3)} liters`
     volumeEl.classList.add('highlight')
     setTimeout(()=> volumeEl.classList.remove('highlight'), 10000)
     
     weightEl.textContent =  `
     ${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3) } pounds 
     | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(3)} kilos`
     weightEl.classList.add('highlight')
     setTimeout(()=> weightEl.classList.remove('highlight'), 10000)

}

convertBtn.addEventListener('click', render)




