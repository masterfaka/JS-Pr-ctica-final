
/*OJO!!! el script debe ir abajo por load del dom da fallo"!!!*/
/*Mi pto JSON esta mal formado por eso no puedo acceder a el*/



 var elDiv=document.querySelector("#targetDiv");
 var formu=document.createElement('form');
 formu.setAttribute('method',"POST");
 formu.setAttribute('action',"#");
 /**/
/*metemos los listeners de los botones*/
	var bSub=document.querySelector("#Csub");
	bSub.addEventListener('click',function(){
		//console.log('has echo click');
		//generamos e insertamos submit
		var s = document.createElement("input"); 
		s.setAttribute('type',"submit");
		s.setAttribute('value',"Enviar");
		formu.appendChild(s);
	});
	var bTxt=document.querySelector("#Ctxt");
	bTxt.addEventListener('click', function(){
		var s = document.createElement("input"); 
		s.setAttribute('type',"text");
		s.setAttribute('placeholder',"Pontunombre...");
		formu.appendChild(s);

	});

elDiv.appendChild(formu);