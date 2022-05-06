




const egy = document.getElementById("btn-egy")
const usa = document.getElementById("btn-usa")
const text1 = document.getElementById("text")
const text2 = document.getElementById("text2")



// add dollar value
egy.onkeyup = function () {
    const x = this.value / 18.5
    usa.value = x.toFixed(2)
    // if (egy.value  === "--") {
    //     text.textContent = "Error"
    //     }
    //     else{
    //     text.textContent = ""

    //     }
        

}

// add pound value
usa.onkeyup = function () {
   const z = this.value * 18.5
   egy.value = z.toFixed(2)
   
}

// reset input value
window.onload = function () {
    egy.value = ""
    usa.value = ""
}



