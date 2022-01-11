const form = document.querySelector('.form-wrapper')
const results = document.querySelector('.results')

let strategyScore, impactScore, confidenceScore, effortsScore, siceScore

form.addEventListener('submit', e=> {
    e.preventDefault()
    let strategyScore = getScore('strategy')
    let impactScore = getScore('impact')
    let confidenceScore = getScore('confidence')
    let effortsScore = getScore('efforts')

    console.log(`strategyScore is ${strategyScore}`)
    console.log(`impactScore is ${impactScore}`)
    console.log(`confidenceScore is ${confidenceScore}`)
    console.log(`effortsScore is ${effortsScore}`)

    if (strategyScore > 0 && impactScore > 0 && impactScore > 0 && effortsScore > 0) {
        siceScore = (strategyScore * impactScore * confidenceScore / effortsScore).toFixed(2)
    } else {
        siceScore = "Can't be counted"
    }
    console.log(`siceScore: ${siceScore}`)

    results.innerHTML = `<div class="result-text">Your SICE Score: ${siceScore}</div>`
})

function getScore(param) {
    if(form.querySelector(`input[name="${param}-status"]:checked`)) {
        return form.querySelector(`input[name="${param}-status"]:checked`).value
    } else {
        const error = document.querySelector( `.${param}-error`)
        error.classList.remove('invisible')
        return -1
    }
}

form.addEventListener('reset', e=> {
    const errors = document.querySelectorAll( `span[class*='-error']`)
    errors.forEach(element => {
        !element.classList.contains('invisible') && element.classList.add('invisible')
    });

    results.innerHTML = ''
})