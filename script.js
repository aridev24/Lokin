
const timer = document.getElementById("timer_id")

console.log(timer.textContent = "25:00")

let timer_time = 1500

function tick() {
    if (timer_time == 1) {
        timer.textContent = "00:00"
        is_running = false
        clearInterval(time_interval)
        play_icon.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg>`

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
const play_icon = document.getElementById("play_icon")

let is_running = false
let time_interval

play_btn.addEventListener("click", function() {

    if (is_running == false) {
        time_interval = setInterval(tick, 1000)
        is_running = true
        play_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/></svg>`     

    }
    else {
        is_running = false
        clearInterval(time_interval)
        play_icon.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg>`

    }
})



const focus_btn = document.getElementById("focus_btn")
const short_break_btn = document.getElementById("short_break_btn")
const long_break_btn = document.getElementById("long_break_btn")

let focus_select = true
let short_break_select = false
let long_break_select = false

btnselector()

focus_btn.addEventListener("click", function() {
    timer_time = 1500
    clearInterval(time_interval)
    timer.textContent = "25:00"
    play_icon.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg>`
    is_running = false
    focus_select = true
    short_break_select = false
    long_break_select = false
    btnselector()
})

short_break_btn.addEventListener("click", function() {
    timer_time = 300
    clearInterval(time_interval)
    timer.textContent = "05:00"
    play_icon.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg>`
    is_running = false
    focus_select = false
    short_break_select = true
    long_break_select = false
    btnselector()
})

long_break_btn.addEventListener("click", function() {
    timer_time = 900
    clearInterval(time_interval)
    timer.textContent = "15:00"
    play_icon.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg>`
    is_running = false
    focus_select = false
    short_break_select = false
    long_break_select = true
    btnselector()

})

function btnselector() {
    if(focus_select == true) {
        focus_btn.style.color = "aliceblue";
        short_break_btn.style.color = "rgb(240, 248, 255, 0.65)";
        long_break_btn.style.color = "rgb(240, 248, 255, 0.65)";
    }
    else if(short_break_select == true) {
        focus_btn.style.color = "rgb(240, 248, 255, 0.65)";
        short_break_btn.style.color = "aliceblue";
        long_break_btn.style.color = "rgb(240, 248, 255, 0.65)";
    }

    else if(long_break_select == true) {
        focus_btn.style.color = "rgb(240, 248, 255, 0.65)";
        short_break_btn.style.color = "rgb(240, 248, 255, 0.65)";
        long_break_btn.style.color = "aliceblue";
    }
}

const reset_btn = document.getElementById("reset_btn_id")

reset_btn.addEventListener("click", function(){
    if (focus_select == true) {
        timer_time = 1500
        clearInterval(time_interval)
        timer.textContent = "25:00"
        play_icon.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg>`
        is_running = false
    }
    else if (short_break_select == true) {
        timer_time = 300
        clearInterval(time_interval)
        timer.textContent = "05:00"
        play_icon.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg>`
        is_running = false
    }
    else if (long_break_select == true) {
        timer_time = 900
        clearInterval(time_interval)
        timer.textContent = "15:00"
        play_icon.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg>`
        is_running = false
    }
}) 
const task_input = document.getElementById("task_input_id")
const add_task = document.getElementById("add_task_btn_id")
const task_list = document.getElementById("task_list_id")


function addingTask() {
    if (task_input.value == "") {
        return
    }
    else{
        const new_task = document.createElement("div")
        new_task.className = "task"

        const new_checkbox = document.createElement("input")
        new_checkbox.className = "checkbox"
        new_checkbox.type = "checkbox"

        const new_task_text = document.createElement("p")
        new_task_text.className = "task_text"

        new_checkbox.addEventListener("change", function () {
            if (new_checkbox.checked) {
                new_task_text.style.textDecoration = "line-through";
            }
            else {
                new_task_text.style.textDecoration = "none";
            }
        })

        const task_del_btn = document.createElement("div")
        task_del_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a2 2 0 0 1-2 2H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1 1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/></svg>`
        task_del_btn.className = "del_btn"

        task_del_btn.addEventListener("click", function() {
            task_list.removeChild(new_task)
        })

        new_task.appendChild(new_checkbox)
        new_task.appendChild(new_task_text)
        new_task.appendChild(task_del_btn)
        task_list.appendChild(new_task)

        new_task_text.textContent = task_input.value

        task_input.value = ""
    }
}


add_task.addEventListener("click", function() {
    addingTask()
})


task_input.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        addingTask()
    }
})

