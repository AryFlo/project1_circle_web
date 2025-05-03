document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const closeMenu = document.querySelector(".close-menu");
    const navContainer = document.querySelector(".nav-container");
  
   
    menuToggle.addEventListener("click", function () {
      navContainer.classList.toggle("active");
    });
  
   
    closeMenu.addEventListener("click", function () {
      navContainer.classList.remove("active");
    });
  });

  
  window.addEventListener("load", () => {
    const grid = document.querySelector(".project-grid");
  
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
      .then((response) => response.json())
      .then((projects) => {
        const topThree = projects.slice(0, 3); // Primeros 3 proyectos
  
        topThree.forEach((project, index) => {
          const card = document.createElement("article");
          card.classList.add("project-card");
  
          card.innerHTML = `
            <div class="project-image">
              <img
                src="${project.image || `assets/projects-section/${index + 1}.jpg`}"
                alt="background image"
                class="project-img"
              />
            </div>
            <div class="project-details">
              <p class="text-body24">${project.name}</p>
              <p class="headline-reg">${project.description}</p>
              <a href="projects/${project.uuid}.html" class="btn3"> Learn More </a>
            </div>
          `;
  
          grid.appendChild(card);
        });
      })
      .catch((error) => {
        console.error("Error al cargar los proyectos desde la API:", error);
      });
  });
  