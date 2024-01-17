function showGrade(){
var song = new Audio ("Audio/Ayra_Starr_-_Sability.mp3")
var song2 = new Audio ("Audio/Davido-Gobe-[TrendySongz.com].mp3")
var song3 = new Audio ("Audio/Forever.mp3")
var song4 = new Audio ("Audio/Kizz-Daniel-My-G-(TrendyBeatz.com).mp3")
var song5 = new Audio ("Audio/Eh_God__Barnabas__Kizz_Daniel_Naijapals.mp3")


    if (inputResult.value >=0 && inputResult.value<40) {
        Result.value ="F Fail😒"
        song.play()
        Result.style.color = "red"

    } else if (inputResult.value >= 40 && inputResult.value<44) {
        Result.value ="E Pass😉"
         song2.play()
        Result.style.color = "green"

    } else if (inputResult.value>= 45 && inputResult.value<49) {
        Result.value ="D Credit😁"
        song3.play()
        Result.style.color = "tear"
        

    } else if (inputResult.value>= 50 &&  inputResult.value<60) {
        Result.value="C- Good😊"
        song4.play()
        Result.style.color = "purple"
        

    } else if (inputResult.value>= 60 && inputResult.value<100) {
        Result.value= "A- "+"Excellent🤗"
        song5.play()
        Result.style.color = "orange"
    } 
}
