function tenz() {
    const data = document.querySelectorAll(".data_input");
    var tenzorie = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    var corners = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    var output = 'Ваш прокрученный тензор:' + "<br/>";
    var count_tenzor = 0;
    var count_corner = 0;
    for (i = 0; i < 3; i++){
        for(j = 0; j < 3; j++){
            if (data[j + 3 * i].value){
                tenzorie[i][j] = data[j + 3 * i].value;
                count_tenzor += 1;
            }
        }
    }
    for (i = 0; i < 3; i++){
        for(j = 0; j < 3; j++){
            if (data[9 + (j + 3 * i)].value) {
                corners[i][j] = data[9 + (j + 3 * i)].value;
                count_corner += 1;
            }
        }
    }
    if (count_corner >= 9 && count_corner >= 9){
        var output_tenzor = prokrutka(tenzorie, corners);
        document.querySelector('#answer_papa').removeAttribute('hidden');
        document.querySelector('.text_overlay').removeAttribute('hidden');
        document.querySelector('#answer_papa').classList.toggle('block-spin');
        for (i = 0; i < 3; i++){
            for(j = 0; j < 3; j++){
                output += output_tenzor[i][j] + ' '
                }
            output += '<br/>'
            }
        document.querySelector('#answer_text').innerHTML = output;
        }
    else{
        alert("введите все числа");
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