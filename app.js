document.getElementById("btnCalcular").addEventListener("click", calcular);

function calcular() {

  var sexo = document.getElementById("sexo").value;
  var edad = parseInt(document.getElementById("edad").value);
  var peso = parseFloat(document.getElementById("peso").value);
  var talla = parseFloat(document.getElementById("talla").value);
  var actividad = parseFloat(document.getElementById("actividad").value);

  if (!edad || !peso || !talla) {
    alert("Completa todos los datos");
    return;
  }

  // ===== IMC =====
  var imc = peso / Math.pow(talla / 100, 2);
  imc = imc.toFixed(1);

  var clas = "Normal";
  if (imc < 18.5) clas = "Bajo peso";
  else if (imc < 25) clas = "Normal";
  else if (imc < 30) clas = "Sobrepeso";
  else clas = "Obesidad";

  // ===== CALORÍAS =====
  var tmb = (sexo === "h")
    ? (10 * peso + 6.25 * talla - 5 * edad + 5)
    : (10 * peso + 6.25 * talla - 5 * edad - 161);

  var mantenimiento = Math.round(tmb * actividad);
  var bajar = mantenimiento - 500;
  var quemar = Math.round(mantenimiento * 0.3);

  document.getElementById("resultado").innerHTML = `

  <div class="card">
    <h3>Resultados</h3>
    <p><b>IMC:</b> ${imc} (${clas})</p>
    <p><b>Calorías mantenimiento:</b> ${mantenimiento} kcal</p>
    <p><b>Objetivo bajar peso:</b> ${bajar} kcal/día</p>
    <p><b>Calorías a quemar:</b> ${quemar} kcal/día</p>
  </div>

  <div class="card">
    <h3>Rut
