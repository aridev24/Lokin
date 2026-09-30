
const timer = document.getElementById("timer_id")

console.log(timer.textContent = "25:00")

let timer_time = 1500

function tick() {
    if (timer_time == 1) {
        timer.textContent = "00:00"
        is_running = false
        clearInterval(time_interval)
    }
    else{
        timer_time--
        let min = String(Math.floor(timer_time / 60)).padStart(2 , "0")
        let sec = String(timer_time % 60).padStart(2 , "0")

        const timer_display = (`${min}:${sec}`)

        console.log(timer.textContent = timer_display)
    }

}
    


const play_btn = document.getElementById("play_btn_id")

let is_running = false
let time_interval

play_btn.addEventListener("click", function() {

    if (is_running == false) {
        time_interval = setInterval(tick, 1000)
        is_running = true

    }
    else {
        is_running = false
        clearInterval(time_interval)
    }
})

