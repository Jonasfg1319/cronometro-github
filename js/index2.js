var segundos = 0
var minutos = 0
var hora = 0
var pressionado = false





function iniciar(){
  
     if(pressionado == false){
    	pressionado = true
    	contagem = setInterval(function(){
    	printsegundos = segundos<10?"0"+segundos:segundos
    	printminutos = minutos<10?"0"+minutos:minutos
    	printhora = hora<10?"0"+hora:hora
    	segundos += 1
    	document.getElementById('tempo').innerHTML = printhora+": "+printminutos+": "+printsegundos
    	document.getElementById('titulo').innerHTML = printhora+": "+printminutos+": "+printsegundos
    	if(segundos>59){
    		segundos = 0
    		minutos += 1
    		if(minutos > 59){
    			minutos = 0
    			hora += 1
    	}
    }
    },1000)
     }
    
    
	
}


function parar()
{
	clearInterval(contagem)
    pressionado = false
}


function zerar(){
	pressionado = false
	minutos = 0
	segundos = 0
	hora = 0
	document.getElementById('tempo').innerHTML = "00: 00: 00"
    document.getElementById('titulo').innerHTML = "Cronômetro Online"
    clearInterval(contagem)
}

