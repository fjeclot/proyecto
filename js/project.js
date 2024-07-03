window.addEventListener("load", async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const data = await response.json();

    const mainProjectId = new URLSearchParams(window.location.search).get("id");
    const mainProjectIndex = data.findIndex(
      (project) => project.uuid == mainProjectId
    );

    addMainProject(data[mainProjectIndex]);
    data.splice(mainProjectIndex, 1);
    addOtherProjects(data.slice(0, 3).reverse());
  } catch (error) {
    toggleModal();
  }
});

function addMainProject(project) {
  if (!project) return;

  document.getElementById("project").innerHTML = `
        <h1 class="title">${project.name}</h1>
        <div class="subtitle">
            <span class="design-title">${project.description}</span>
            <span class="completed-title">Completed on
                <span class="completed-data">${project.completed_on}</span>
            </span>
        </div>
        <div class="project-image-section">
            <img class="project-image" src="${project.image}" alt="${project.name} image" />
        </div>
        <article class="project-description">
            ${project.content}
        </article>
    `;
}

function addOtherProjects(projects) {
  const articlesHTML = projects.map(jsonProjectToOtherHtmlArticle).join("");
  document.querySelector("div.project-container").innerHTML = articlesHTML;
}

function jsonProjectToOtherHtmlArticle(project) {
  if (!project) return "";

  return `
        <article class="project-chart">
            <a class="project-cover" href="../pages/project.html?id=${project.uuid}">
                <img class="img-project" src="${project.image}" alt="${project.name} image" />
                <div class="project-inner">
                    <h4 class="project-title">${project.name}</h4>
                    <p class="project-description title">${project.description}</p>
                    <a class="learn-more" href="../pages/project.html?id=${project.uuid}">Learn more</a>
                </div>
            </a>
        </article>
    `;
}
