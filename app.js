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
    <h3>Rutina semanal</h3>
    <table>
      <tr><th>Día</th><th>Ejercicio</th><th>Series</th><th>Reps</th><th>Descanso</th></tr>
      <tr><td>Lunes</td><td>Sentadillas</td><td>4</td><td>12</td><td>60s</td></tr>
      <tr><td>Martes</td><td>Flexiones</td><td>4</td><td>10</td><td>60s</td></tr>
      <tr><td>Miércoles</td><td>Plancha</td><td>4</td><td>30s</td><td>45s</td></tr>
      <tr><td>Jueves</td><td>Zancadas</td><td>3</td><td>12</td><td>60s</td></tr>
      <tr><td>Viernes</td><td>Abdominales</td><td>4</td><td>15</td><td>45s</td></tr>
      <tr><td>Sábado</td><td>Cardio moderado</td><td>-</td><td>30 min</td><td>-</td></tr>
      <tr><td>Domingo</td><td>Descanso</td><td>-</td><td>-</td><td>-</td></tr>
    </table>
  </div>

  <div class="card">
    <h3>Dieta semanal detallada (≈ ${bajar} kcal/día)</h3>

    <table>
      <tr>
        <th>Día</th>
        <th>Desayuno</th>
        <th>Almuerzo</th>
        <th>Cena</th>
        <th>Snacks</th>
        <th>Kcal</th>
      </tr>

      <tr>
        <td>Lunes</td>
        <td>Avena 50g + plátano mediano</td>
        <td>Pechuga pollo 150g + arroz integral 100g + ensalada</td>
        <td>Tortilla 2 huevos + verduras</td>
        <td>Manzana + 10 almendras</td>
        <td>${bajar}</td>
      </tr>

      <tr>
        <td>Martes</td>
        <td>2 huevos + 1 pan integral</td>
        <td>Pescado 160g + papa sancochada 150g</td>
        <td>Ensalada atún 120g</td>
        <td>Yogur natural 200g</td>
        <td>${bajar}</td>
      </tr>

      <tr>
        <td>Miércoles</td>
        <td>Avena 50g + fresas 100g</td>
        <td>Lentejas cocidas 200g + arroz 80g</td>
        <td>Pollo desmenuzado 120g + verduras</td>
        <td>Naranja</td>
        <td>${bajar}</td>
      </tr>

      <tr>
        <td>Jueves</td>
        <td>Batido: leche descremada + banana</td>
        <td>Carne magra 150g + camote 150g</td>
        <td>Ensalada con huevo</td>
        <td>Pera</td>
        <td>${bajar}</td>
      </tr>

      <tr>
        <td>Viernes</td>
        <td>Pan integral 2 rebanadas + queso light</td>
        <td>Pasta integral 120g + pollo</td>
        <td>Sopa de verduras</td>
        <td>Yogur + nueces</td>
        <td>${bajar}</td>
      </tr>

      <tr>
        <td>Sábado</td>
        <td>Libre controlado</td>
        <td>Libre controlado</td>
        <td>Ligero</td>
        <td>-</td>
        <td>${bajar}</td>
      </tr>

      <tr>
        <td>Domingo</td>
        <td>Ligero</td>
        <td>Ligero</td>
        <td>Ligero</td>
        <td>-</td>
        <td>${bajar}</td>
      </tr>
    </table>

    <p style="font-size:13px;margin-top:10px">
      * Cantidades y calorías son referenciales. No reemplaza evaluación nutricional profesional.
    </p>
  </div>
  `;
}
