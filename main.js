

var link = document.getElementsByClassName('navigation__link');
console.log(link);
var navigation = document.getElementById('navi-toogle');

for (var i=0; i<link.length; ++i){
  link[i].addEventListener('click', function(){
    navigation.checked=false;
})  
}
