// botón de login
const loginBtn = document.getElementById("login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    window.open(
      "https://aulasvirtuales.bue.edu.ar/login/index.php",
      "_blank",
      "noopener,noreferrer"
    );
  });
}

// función para renderizar materias
function renderMaterias(data) {
  const container = document.getElementById('materias-container');
  container.innerHTML = ''; // limpiar contenido previo

  data.forEach(materia => {
    const materiaTitle = document.createElement('h2');
    materiaTitle.textContent = materia.nombre;
    container.appendChild(materiaTitle);

    const list = document.createElement('ul');
    materia.links.forEach(link => {
      const li = document.createElement('li');
      if (link.url) {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.texto;
        a.target = "_blank"; // 🔹 abrir en nueva pestaña
        li.appendChild(a);
      } else {
        const p = document.createElement('p');
        p.className = 'sin_link';
        p.textContent = link.texto;
        li.appendChild(p);
      }
      list.appendChild(li);
    });
    container.appendChild(list);
    container.appendChild(document.createElement('hr'));
  });
}

// función para cargar JSON según botón y activar el botón correspondiente
function cargarMaterias(jsonFile) {
  fetch(jsonFile)
    .then(res => res.json())
    .then(data => {
      renderMaterias(data);

      // activar el botón correspondiente
      document.querySelectorAll('.boton-anio').forEach(btn => {
        btn.classList.toggle('activo', btn.dataset.json === jsonFile);
      });
    })
    .catch(err => console.error('Error cargando materias:', err));
}

// asignar eventos a la botonera
document.querySelectorAll('.boton-anio').forEach(btn => {
  btn.addEventListener('click', () => {
    cargarMaterias(btn.dataset.json);
  });
});

// cargar por defecto materias 2-2 al inicio
cargarMaterias('materias_2-2.json');
