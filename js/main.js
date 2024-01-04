var menuButton = document.querySelector('.menu-button');
var menuDropdown = document.querySelector('.menu');
var loginButton = document.querySelector('#loginBtn');
var dropdown = document.querySelector('.dropdown-options')
var ingresoBtn = document.querySelector('.ingreso-socios');
var userLoggedLogo = document.querySelector('.user-logged-logo');
var dataNovedades = document.querySelector('#span-novedades');
var isLogged = false;
console.log(localStorage.getItem('isLogged'));
userLogged()
if (localStorage.getItem('isLogged') == 'true') {
    ingresoBtn.innerHTML='<a href="index.html">Cerrar Sesión</a>';
    document.querySelector('.opciones-socio').classList.remove('hidden');
}
else{
    ingresoBtn.innerHTML='<a href="login.html">Ingreso Socios</a>';
    document.querySelector('.opciones-socio').classList.add('hidden');
}
menuButton.addEventListener('click',function(e){
    if (menuButton.classList.contains('active-menu')) {
        menuButton.classList.remove('active-menu');
        menuDropdown.classList.add('hidden');
    }
    else{
        menuButton.classList.add('active-menu');
        menuDropdown.classList.remove('hidden');
    }
});

if (loginButton != null) {
    loginButton.addEventListener('click',function(e){
        localStorage.setItem('isLogged', true);
        window.location.href = 'menu-socio.html';
        userLogged()
    });    
}

ingresoBtn.addEventListener('click', function(e){
    localStorage.setItem('isLogged', false);
    window.location.href = 'login.html';
    userLogged()
});
function userLogged(){
    console.log(localStorage.getItem('isLogged'));
    if (localStorage.getItem('isLogged') == 'true') {
        ingresoBtn.innerHTML='<a href="index.html">Cerrar Sesión</a>';
        document.querySelector('.opciones-socio').classList.remove('hidden');
        document.querySelector('.hogar-logo-2').classList.add('hidden');
        
        if(userLoggedLogo != null){
            userLoggedLogo.classList.remove('hidden');
        }
        if(dataNovedades != null){
            dataNovedades.innerHTML = ' ';
            document.querySelector('.btn-testimonios').classList.remove('hidden');
        }
    }
    else{
        ingresoBtn.innerHTML='<a href="login.html">Ingreso Socios</a>';
        document.querySelector('.opciones-socio').classList.add('hidden');
        document.querySelector('.hogar-logo-2').classList.remove('hidden');
        if(userLoggedLogo != null){
            userLoggedLogo.classList.add('hidden');
        }
        if(dataNovedades != null){
            dataNovedades.innerHTML = 'INGRESÁ COMO SOCIO PARA VER TODAS LAS NOVEDADES DEL HOGAR';
            document.querySelector('.btn-testimonios').classList.add('hidden');
        }

    }
}

