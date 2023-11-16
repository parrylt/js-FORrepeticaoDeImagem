/* var tab = 0;
for (num = 0; num <= 10; num++){
    document.write (tab + "x" + num + "=" + tab*num + "<br>")

    /*for (tab = 1 ; tab <=10; tab++) {
        document.write (tab + "x" + num + "=" + tab*num + "<br>");
    }
    document.write ("<br>")

    if (num==10){
        tab++;
        num=0;
    }
    if (tab==11){
        num=11;
    }
}*/

var rep = prompt ("1 - Carros, 2 - Flores, 3 - Casa, 4 - Avião. Digite um número")

if (rep==1){
    document.write ("<table border> <tr><td><img src='./img/carro.jpg' width='300px' height='200px'></td> <td><img src='./img/carro.jpg' width='300px' height='200px'></td></tr> <tr><td><img src='./img/carro.jpg' width='300px' height='200px'></td> <td><img src='./img/carro.jpg' width='300px' height='200px'></td></tr> <tr><td><img src='./img/carro.jpg' width='300px' height='200 px'></td> <td><img src='./img/carro.jpg' width='300px' height='200 px'></td></tr> </table>");
}
else if (rep==2){
    document.write ("<table border> <tr><td><img src='./img/flores.png' width='300px' height='200px'></td> <td><img src='./img/flores.png' width='300px' height='200px'></td></tr> <tr><td><img src='./img/flores.png' width='300px' height='200px'></td> <td><img src='./img/flores.png' width='300px' height='200px'></td></tr> <tr><td><img src='./img/flores.png' width='300px' height='200 px'></td> <td><img src='./img/flores.png' width='300px' height='200 px'></td></tr> </table>");
}
else if (rep==3){
    document.write ("<table border> <tr><td><img src='./img/casa.jpg' width='300px' height='200px'></td> <td><img src='./img/casa.jpg' width='300px' height='200px'></td></tr> <tr><td><img src='./img/casa.jpg' width='300px' height='200px'></td> <td><img src='./img/casa.jpg' width='300px' height='200px'></td></tr> <tr><td><img src='./img/casa.jpg' width='300px' height='200 px'></td> <td><img src='./img/casa.jpg' width='300px' height='200 px'></td></tr> </table>");
}
else if (rep==4){
    document.write ("<table border> <tr><td><img src='./img/aviao.jpg' width='300px' height='200px'></td> <td><img src='./img/aviao.jpg' width='300px' height='200px'></td></tr> <tr><td><img src='./img/aviao.jpg' width='300px' height='200px'></td> <td><img src='./img/aviao.jpg' width='300px' height='200px'></td></tr> <tr><td><img src='./img/aviao.jpg' width='300px' height='200 px'></td> <td><img src='./img/aviao.jpg' width='300px' height='200 px'></td></tr> </table>");
}
else{
    document.write ("valor inválido");
}
