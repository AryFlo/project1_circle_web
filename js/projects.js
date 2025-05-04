window.addEventListener("load", async () => {
  const ENDPOINT =
    "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

  try {
    const res = await fetch(ENDPOINT);
    const data = await res.json();

    // Obtener el número de archivo desde la URL (ej: 2.html → "2")
    const currentPage = window.location.pathname.split("/").pop(); // ej: "2.html"
    const mainProjectId = currentPage.replace(".html", ""); // "2"

    // Buscar el proyecto con ese uuid
    const mainProject = data.find((p) => p.uuid === mainProjectId);
    if (!mainProject) {
      alert("Project not found.");
      window.location.href = "../pages/404.html"; // redirección si no existe
      return;
    }

    // Mostrar proyecto principal
    document.getElementById("project-name").textContent = mainProject.name;
    document.getElementById("project-description").textContent =
      mainProject.description;
    document.getElementById("project-image").src = mainProject.image;
    document.getElementById("project-image").alt = mainProject.name;
    document.getElementById("project-content").innerHTML = mainProject.content;
    document.getElementById("project-date").textContent = new Date(
      mainProject.completed_on
    ).toLocaleDateString();

    // Mostrar otros 3 proyectos (excluyendo el principal)
    const otherProjects = data.filter((p) => p.uuid !== mainProjectId);
    const randomProjects = otherProjects
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const grid = document.getElementById("other-projects-grid");
    grid.innerHTML = "";

    randomProjects.forEach((project) => {
      const article = document.createElement("article");
      article.classList.add("project-card");

      article.innerHTML = `
          <div class="project-image">
            <img src="${project.image}" alt="${project.name}" class="project-img" />
          </div>
          <div class="project-details">
            <p class="text-body24">${project.name}</p>
            <p class="headline-reg">${project.description}</p>
            <a href="${project.uuid}.html" class="btn3">Learn More</a>
          </div>
        `;

      grid.appendChild(article);
    });
  } catch (err) {
    alert("There was an error loading the project data.");
    console.error(err);
  }
});
