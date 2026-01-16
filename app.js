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

  // IMC
  var imc = peso / Math.pow(talla / 100, 2);
  imc = imc.toFixed(1);

  var clas = "Normal";
  if (imc < 18.5) clas = "Bajo peso";
  else if (imc < 25) clas = "Normal";
  else if (imc < 30) clas = "Sobrepeso";
  else clas = "Obesidad";

  // Calorías
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
      <p><b>Para bajar peso:</b> ${bajar} kcal</p>
      <p><b>Calorías a quemar/día:</b> ${quemar} kcal</p>
    </div>

    <div class="card">
      <h3>Rutina semanal</h3>
      <table>
        <tr><th>Día</th><th>Ejercicio</th><th>Series</th><th>Reps</th><th>Descanso</th></tr>
        <tr><td>Lunes</td><td>Sentadillas</td><td>4</td><td>12</td><td>60s</td></tr>
        <tr><td>Martes</td><td>Flexiones</td><td>4</td><td>10</td><td>60s</td></tr>
        <tr><td>Miércoles</td><td>Plancha</td><td>4</td><td>30s</td><td>45s</td></tr>
        <tr><td>Jueves</td><td>Zancadas</td><td>3</td><td>12</td><td>60s</td></tr>
        <tr><td>Viernes</td><td>Abdominales</td><td>4</td><td>15</td><td>45s</td></tr>
        <tr><td>Sábado</td><td>Cardio</td><td>-</td><td>30 min</td><td>-</td></tr>
        <tr><td>Domingo</td><td>Descanso</td><td>-</td><td>-</td><td>-</td></tr>
      </table>
    </div>

    <div class="card">
      <h3>Dieta semanal (≈ ${bajar} kcal/día)</h3>
      <table>
        <tr><th>Día</th><th>Desayuno</th><th>Almuerzo</th><th>Cena</th><th>Snacks</th></tr>
        <tr><td>Lunes</td><td>Avena</td><td>Pollo + arroz</td><td>Ensalada</td><td>Fruta</td></tr>
        <tr><td>Martes</td><td>Huevos</td><td>Pescado</td><td>Sopa</td><td>Yogur</td></tr>
        <tr><td>Miércoles</td><td>Pan integral</td><td>Lentejas</td><td>Verduras</td><td>Nueces</td></tr>
        <tr><td>Jueves</td><td>Avena</td><td>Carne</td><td>Ensalada</td><td>Fruta</td></tr>
        <tr><td>Viernes</td><td>Batido</td><td>Pasta integral</td><td>Verduras</td><td>Yogur</td></tr>
        <tr><td>Sábado</td><td>Libre</td><td>Controlado</td><td>Ligero</td><td>-</td></tr>
        <tr><td>Domingo</td><td>Ligero</td><td>Ligero</td><td>Ligero</td><td>-</td></tr>
      </table>
    </div>
  `;
}
