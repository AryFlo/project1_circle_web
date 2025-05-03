window.addEventListener("load", async () => {
    const ENDPOINT = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";
  
    try {
      const res = await fetch(ENDPOINT);
      const data = await res.json();
  
      const mainProject = data.find(p => p.uuid === "1");
      if (!mainProject) {
        alert("Project with UUID 1 not found");
        return;
      }
  
      // Mostrar proyecto principal
      document.getElementById("project-name").textContent = mainProject.name;
      document.getElementById("project-description").textContent = mainProject.description;
      document.getElementById("project-image").src = mainProject.image;
      document.getElementById("project-image").alt = mainProject.name;
      document.getElementById("project-content").textContent = mainProject.content;
      document.getElementById("project-date").textContent = new Date(mainProject.completed_on).toLocaleDateString();
  
      // Otros 3 proyectos aleatorios
      const otherProjects = data.filter(p => p.uuid !== 1);
      const randomProjects = otherProjects.sort(() => 0.5 - Math.random()).slice(0, 3);
  
      const grid = document.getElementById("other-projects-grid");
      grid.innerHTML = "";
  
      randomProjects.forEach(project => {
        if (!project.image) {
          alert(`Project ${project.name} is missing an image.`);
          return;
        }
  
        const article = document.createElement("article");
        article.classList.add("project-card");
  
        article.innerHTML = `
          <div class="project-image">
            <img src="${project.image}" alt="${project.name}" class="project-img" />
          </div>
          <div class="project-details">
            <p class="text-body24">${project.name}</p>
            <p class="headline-reg">${project.description}</p>
            <a href="../projects/${project.uuid}.html" class="btn3">Learn More</a>
          </div>
        `;
  
        grid.appendChild(article);
      });
  
    } catch (err) {
      alert("There was an error loading the project data.");
      console.error(err);
    }
  });
  