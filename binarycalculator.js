function select() {
    let n1,n2,op,res;
    n1 = document.getElementById('num1').value;
    n2 = document.getElementById('num2').value;
    op = document.getElementById('operations').value;
    
    n1 = parseInt(n1,2);
    n2 = parseInt(n2,2);

    if(op == 2)
        res = n1 + n2;
    else if(op == 3)
    res = n1 - n2;
    else if(op == 4)
    res = n1 * n2;
    else if(op == 5)
    res = parsint(n1 / n2);

    res = res.toString(2);
    document.getElementById('result').innerHTML = 'The result is : ' + res;

}