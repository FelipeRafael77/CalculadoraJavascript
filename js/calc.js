var apagar = false;
	function deletecarac(){
		var caixa2 = document.f1.txtcaixa2.value;
            if (caixa2 == "" || caixa2 == "0" || caixa2.length == 1 && blocdel!=true){
            	document.f1.txtcaixa2.value = "0";
            }
            else if(blocdel!=true){
             	var res = caixa2.substring(0,caixa2.length-1);
             	document.f1.txtcaixa2.value = res;
            }
	}
   function escrever(n){
		var caixa2 = document.f1.txtcaixa2.value;
		if (apagar) {
			document.f1.txtcaixa2.value="";
			apagar = false;
			document.f1.txtcaixa2.value = n;
		}
		else if (caixa2 == "0" && n != "."){
			caixao = caixa2.replace("0", "")
			document.f1.txtcaixa2.value = caixao + n;
		}
		else{
			document.f1.txtcaixa2.value = caixa2 + n;
		}
	}
	
	function soma(o){
		var caixa1 = document.f1.txtcaixa1.value;
		var caixa2 = document.f1.txtcaixa2.value;
		var unum = caixa1.substring(caixa1.length-1);
		calcular()
		if (unum == "+") {
			unum = unum.replace(unum,o);
			var res = caixa1.substring(0,caixa1.length-1);
			document.f1.txtcaixa1.value = res+unum;
		}
		if (caixa1 == "" && caixa2 != ""){
			document.f1.txtcaixa1.value = caixa2 + o;
		}
		else{
			document.f1.txtcaixa1.value = caixa1 + caixa2 + o;
 		}
 		apagar = true;
	}
	function subtracao(o){
		var caixa1 = document.f1.txtcaixa1.value;
		var caixa2 = document.f1.txtcaixa2.value;
		var unum = caixa1.substring(caixa1.length-1);
		calcular()
		if (unum == "-") {
			unum = unum.replace(unum,o);
			var res = caixa1.substring(0,caixa1.length-1);
			document.f1.txtcaixa1.value = res-unum;
		}
		if (caixa1 == "" && caixa2 != ""){
			document.f1.txtcaixa1.value = caixa2 + o;
		}
		else{
			document.f1.txtcaixa1.value = caixa1 - caixa2 - o;
 		}
 		apagar = true;
	}
		function divisao (o){
		var caixa1 = document.f1.txtcaixa1.value;
		var caixa2 = document.f1.txtcaixa2.value;
		var unum = caixa1.substring(caixa1.length-1);
		calcular()
		if (unum == "÷") {
			unum = unum.replace(unum,o);
			var res = caixa1.substring(0,caixa1.length-1);
			document.f1.txtcaixa1.value = res-unum;
		}
		if (caixa1 == "" && caixa2 != ""){
			document.f1.txtcaixa1.value = caixa2 + o;
		}
		else{
			document.f1.txtcaixa1.value = caixa1 / caixa2 / o;
 		}
 		apagar = true;
	}

	function multiplicacao(o){
		var caixa1 = document.f1.txtcaixa1.value;
		var caixa2 = document.f1.txtcaixa2.value;
		var unum = caixa1.substring(caixa1.length-1);
		calcular()
		if (unum == "x") {
			unum = unum.replace(unum,o);
			var res = caixa1.substring(0,caixa1.length-1);
			document.f1.txtcaixa1.value = res-unum;
		}
		if (caixa1 == "" && caixa2 != ""){
			document.f1.txtcaixa1.value = caixa2 + o;
		}
		else{
			document.f1.txtcaixa1.value = caixa1 * caixa2 * o;
 		}
 		apagar = true;
	}

	function calcular(){
		var caixa1 = document.f1.txtcaixa1.value;
		var caixa2 = document.f1.txtcaixa2.value;
		document.f1.txtcaixa2.value = eval(caixa1 + caixa2);
		document.f1.txtcaixa1.value = "";
		apagar = true;
		blocdel = true;
	}
	function maismenos(){
		var caixa2 = document.f1.txtcaixa2.value;
		if (caixa2 > 0){
			document.f1.txtcaixa2.value = "(-" + caixa2 + ")";
		}
		else{
			caixaplus = caixa2.replace(/[-|(|)]/g, "");
			document.f1.txtcaixa2.value = caixaplus;
		}
	}