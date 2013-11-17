var log,
	pass,
	i;
log = prompt ("Логин");
if (log==123){
pass=prompt ("пароль"); for (i=4;i>=1;i--){
if (pass==123){
alert("урра!"); break;}
pass=prompt ("осталось"+i+"попыток");}
}
 else {alert ("Ошибка");}
