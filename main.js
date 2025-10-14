function tenzor() {
    const answer = document.getElementById("answer");
    var tenzorie = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    var corners = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    var output = 'Ваш прокрученный тензор:' + "<br/>";
    var count_tenzor = 0;
    var count_corner = 0;
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            if (document.querySelectorAll('.tenzor_input')[j + 3 * i].value){
                count_tenzor += 1;
                tenzorie[i][j] = parseFloat(document.querySelectorAll('.tenzor_input')[j + 3 * i].value);
            }
            if (document.querySelectorAll('.corner_input')[j + 3 * i].value){
                count_corner += 1;
                corners[i][j] = parseFloat(document.querySelectorAll('.corner_input')[j + 3 * i].value);
            }

        }
    }

    if (count_tenzor >= 9 && count_corner >= 9) {
        var new_tenz = prokrutka(tenzorie, corners);
        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++){
                output += new_tenz[i][j].toString() + " ";
            }
            output += '<br/>';
        }

        answer.innerHTML = output;
    }
    else {
        alert("пожалуйста введи все числа")
    }
}

function prokrutka(tenzorochek, corners) {
    var new_tenzorochek = [[0, 0, 0],[0, 0, 0], [0, 0, 0]];
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++) {
            var sigma_ij = 0;
            var k = Math.PI / 180;
            for (var n = 0; n < 3; n++){
                for (var m = 0; m < 3; m++){
                    sigma_ij += Math.cos(corners[i][n] * k) * Math.cos(corners[j][m] * k) * tenzorochek[n][m];
                }

            }
        new_tenzorochek[i][j] = Math.round(sigma_ij * 100)/100;
        }
    }
    return new_tenzorochek
}

/*
tenzorchek = [[2, -2, 0], [-2 ,1.41, 0], [0, 0, -1.41]];
corner = [[90, 45, 45], [45, 60, 120], [135, 60, 120]];
console.log(prokrutka(tenzorchek, corner))
var k = Math.PI / 180;
console.log(Math.round(Math.cos(45 * k) * 100) / 100)
*/4