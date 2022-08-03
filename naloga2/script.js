function izracunaj(){
    let n = document.getElementById('input').value; //prebere input
    let a = 1, b = 1, c = n;
    for(let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    }
    izpisi(c);
};

function izpisi(st_parov){
    document.getElementById('rezultat').innerHTML = 'Število parov: ' + st_parov;
}
