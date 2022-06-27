const nombre = document.getElementById('nombre');
const monto = document.getElementById('monto');
const total = document.getElementById('total');
const cada = document.getElementById('cada');
const refresh = document.getElementById('refresh');

const lista = document.getElementById('lista');
let cantPersonas = 0;
let suma = 0;
const set = new Set();



const sumo = () => {
    if (monto.value!=0)
	suma += parseInt(monto.value);
}

function noEsta() {
	const noEsta = !set.has(nombre.value);
	return noEsta
}
const addPeople = () => {
	cantPersonas++;
	set.add(nombre.value);
	sumo()
	show()
}

function show(){
	total.innerHTML = `Total: ${suma}`;
    cada.innerHTML = `Pagaran: ${suma/cantPersonas} cada uno`;
}

const funcion=() => {
	if(noEsta()){
		addPeople();
		show();
		lista.innerHTML += `<p>${nombre.value}</p>`;
	}
	else{
		sumo()
		show()
	}
}

refresh.addEventListener('click', _ => {
    location.reload();
})