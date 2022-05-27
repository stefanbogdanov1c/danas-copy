window.addEventListener('load',pokreni)

function pokreni()
{
    console.log('uspesno radi')
    var meni = document.getElementById('hamburger')

    meni.addEventListener('click',prikazi)
}

var brojac = 0

function prikazi()
{
    var nav = document.getElementById('nav_meni');
    console.log(brojac)
    if(brojac % 2 == 0){
        nav.className = 'show';
    }
    else{
        nav.className = 'hide';
    }
    brojac++;
}