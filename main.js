//(precio * (100 - discount)) / 100;

const inputCuenta = document.getElementById('cuenta');

const inputCincoPorciento = document.getElementById('5');
const inputDiezPorciento = document.getElementById('10');
const inputQuincePorciento = document.getElementById('15');
const inputVeintiCincoPorciento = document.getElementById('25');
const inputCincuentaPorciento = document.getElementById('50');

const inputCustom = document.getElementById('custom');

const inputNumberPersons = document.getElementById('persons');

const propinaTotal = document.getElementById('propina');
const cuentaTotal = document.getElementById('totalCuenta');

const btnCuenta = document.getElementById('btnCuenta');
const btnReset = document.getElementById('btnReset');

const errorBill = document.querySelector('.errorBill');
const errorPerson = document.querySelector('.errorPerson');

btnCuenta.addEventListener('click', function(){
    let cuenta = Number(inputCuenta.value);
    let numeroPersonas = Number(inputNumberPersons.value);
    let custom = inputCustom.value;

    let totalEntrePersona = cuenta / numeroPersonas;

    let porcentaje = custom;

    if(!cuenta || !numeroPersonas){
        errorBill.innerText = "Can't be zero"
        errorPerson.innerText = "Can't be zero"
        return
    }
    else{
        errorBill.innerText = ""; 
        errorPerson.innerText = ""; 
    }

    if(inputCincoPorciento.checked){
        porcentaje = 5;
    }
    else if(inputDiezPorciento.checked){
        porcentaje = 10;
    }
    else if(inputQuincePorciento.checked){
        porcentaje = 15;
    }
    else if(inputVeintiCincoPorciento.checked){
        porcentaje = 25;
    }
    else if(inputCincuentaPorciento.checked){
        porcentaje = 50;
    }

    let totalPropina = ((totalEntrePersona * porcentaje) / 100).toFixed(2);

    let sumaTotalPropina = (Number(totalEntrePersona) + Number(totalPropina)).toFixed(2);

    console.log(totalPropina)


    propinaTotal.innerText = totalPropina
    cuentaTotal.innerText = sumaTotalPropina;
   
});

btnReset.addEventListener('click', function(){
  inputCuenta.value = "";
  inputNumberPersons.value = "";  
  inputCustom.value = "";

  propinaTotal.innerText = "$0.00";
  cuentaTotal.innerText = "$0.00";

  if(inputCincoPorciento.checked){
    inputCincoPorciento.checked = "";
  }
  else if(inputDiezPorciento.checked){
    inputDiezPorciento.checked = "";
  }
  else if(inputQuincePorciento.checked){
    inputQuincePorciento.checked = "";
  }
  else if(inputVeintiCincoPorciento.checked){
    inputVeintiCincoPorciento.checked = "";
  }
  else if(inputCincuentaPorciento.checked){
    inputCincuentaPorciento.checked = "";
  }
});