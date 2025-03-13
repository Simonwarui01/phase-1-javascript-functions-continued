
function saturdayFun(game = "roller-skate"){
    return`This Saturday, I want to ${game}!`
}

saturdayFun()
saturdayFun("Go running")

function mondayWork(todo = "go to the office"){
    return `This Monday, I will ${todo}.`
}

function wrapAdjective(wrapper = "*"){
    return function(adjective){
        return `You are ${wrapper}${adjective}${wrapper}!`
    }

}