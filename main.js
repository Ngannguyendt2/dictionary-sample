function serch() {
    let arrayEnglish = ["as", "bad", "cook", "day", "each", "good"];
    let arrayVietnamese = ["như", "xấu", "nấu", "ngày", "mỗi", "tốt"];
    let char = document.getElementById('text').value;
    let j = 0;
    for (let i = 0; i < arrayEnglish.length; i++) {
        if (arrayEnglish[i] == char) {
            document.getElementById('english').innerHTML = arrayEnglish[i];
            document.getElementById('diction').innerHTML = "Nghia tieng viet";
            document.getElementById('vietnam').innerHTML = arrayVietnamese[i];
            break;
        }
        j++;
    }
    if (j == arrayEnglish.length) {
        alert("Not found");
        j = 0;
    }
}