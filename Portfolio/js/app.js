document.addEventListener("DOMContentLoaded", function () {
    // 🎯 1. Gestion du formulaire de contact
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
  
    if (form && successMessage) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        successMessage.classList.remove("opacity-0");
        form.reset();
        setTimeout(() => {
          successMessage.classList.add("opacity-0");
        }, 3000);
      });
    }
  
    // 📦 2. Liste des projets (2 projets, quiz en premier)
    const projects = [
      {
        title: "Quiz de Culture Générale",
        description: "Un quiz interactif réalisé avec Python.",
        image: "img/image.png",
        link: "https://github.com/darie-ode/Quiz-python",
        category: "Python"
      },
      {
        title: "Bataille-navale",
        description: "Un jeu inspiré de la bataille-navale.",
        image: "img/img bn.png",
        link: "https://github.com/darie-ode/Bataille-navale",
        category: "TypeScript"
      }
    ];
  
    const container = document.getElementById("projects-container");
  
    function renderProjects(filter) {
      container.innerHTML = "";
      const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);
  
      filtered.forEach(project => {
        const html = `
          <div class="bg-white rounded-xl shadow p-4 hover:shadow-lg transition group">
            <div class="overflow-hidden rounded-md mb-4">
              <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300">
            </div>
            <h3 class="text-lg font-bold text-blue-600 mb-2">${project.title}</h3>
            <p class="text-sm text-gray-700 mb-3">${project.description}</p>
            <a href="${project.link}" target="_blank" class="text-blue-500 hover:underline text-sm">🔗 Voir le projet</a>
          </div>
        `;
        container.insertAdjacentHTML("beforeend", html);
      });
    }
  
    renderProjects("all");
  
    // 🎛️ 3. Gestion des filtres
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const category = btn.dataset.category;
        renderProjects(category);
      });
    });
  });
  