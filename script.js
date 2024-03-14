function myfunc(){
    var b1, b2 ,b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    if (b1.tolowerCase() == 'x' && b2.tolowerCase() == 'x' && b3.tolowerCase() == 'x'){
        window.alert('You are a winner');
        reset();
    } else if (b4.tolowerCase() == 'x' && b5.tolowerCase() == 'x' && b6.tolowerCase() == 'x'){
        window.alert('You are a winner');
        reset();
    } else if (b7.tolowerCase() == 'x' && b8.tolowerCase() == 'x' && b9.tolowerCase() == 'x'){
        window.alert('You are a winner');
        reset();
    } else if (b1.tolowerCase() == 'x' && b4.tolowerCase() == 'x' && b7.tolowerCase() == 'x'){
        window.alert('You are a winner');
        reset();
    } else if (b2.tolowerCase() == 'x' && b5.tolowerCase() == 'x' && b8.tolowerCase() == 'x'){
        window.alert('You are a winner');
        reset();
    } else if (b3.tolowerCase() == 'x' && b6.tolowerCase() == 'x' && b9.tolowerCase() == 'x'){
        window.alert('You are a winner');
        reset();
    } else if (b1.tolowerCase() == 'x' && b5.tolowerCase() == 'x' && b9.tolowerCase() == 'x'){
        window.alert('You are a winner');
        reset();
    } else if (b3.tolowerCase() == 'x' && b5.tolowerCase() == 'x' && b7.tolowerCase() == 'x'){
        window.alert('You are a winner');
        reset();
    }
    if (b1.tolowerCase() == 'o' && b2.tolowerCase() == 'o' && b3.tolowerCase() == 'o'){
        window.alert('You are a winner');
        reset();
    } else if (b4.tolowerCase() == 'o' && b5.tolowerCase() == 'o' && b6.tolowerCase() == 'o'){
        window.alert('You are a winner');
        reset();
    } else if (b7.tolowerCase() == 'o' && b8.tolowerCase() == 'o' && b9.tolowerCase() == 'o'){
        window.alert('You are a winner');
        reset();
    } else if (b1.tolowerCase() == 'o' && b4.tolowerCase() == 'o' && b7.tolowerCase() == 'o'){
        window.alert('You are a winner');
        reset();
    } else if (b2.tolowerCase() == 'o' && b5.tolowerCase() == 'o' && b8.tolowerCase() == 'o'){
        window.alert('You are a winner');
        reset();
    } else if (b3.tolowerCase() == 'o' && b6.tolowerCase() == 'o' && b9.tolowerCase() == 'o'){
        window.alert('You are a winner');
        reset();
    } else if (b1.tolowerCase() == 'o' && b5.tolowerCase() == 'o' && b9.tolowerCase() == 'o'){
        window.alert('You are a winner');
        reset();
    } else if (b3.tolowerCase() == 'o' && b5.tolowerCase() == 'o' && b7.tolowerCase() == 'o'){
        window.alert('You are a winner');
        reset();
        }
}
function reset() {
    Location.reload();
    document.getElementById("b1").value = '' ;
    document.getElementById("b2").value = '' ;
    document.getElementById("b3").value = '' ;
    document.getElementById("b4").value = '' ;
    document.getElementById("b5").value = '' ;
    document.getElementById("b6").value = '' ;
    document.getElementById("b7").value = '' ;
    document.getElementById("b8").value = '' ;
    document.getElementById("b9").value = '' ;
}
let flag = 1;
function setValue () {
    if (flag==1) {
        this.value = "x";
        this.disabled = true;
        flag = 0;
    } else {
        this.value = "o";
        this.disabled = true;
        flag = 1;
    }
}