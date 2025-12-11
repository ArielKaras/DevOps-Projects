# DevOps-Projects

This repository contains my journey of learning everything about DevOps. It's a collection of projects, tutorials, and exercises that I've completed as I explore various DevOps tools, techniques, and best practices.

It also serves as the source code for my **Portfolio Website**, which is automatically deployed to GitHub Pages.

## Table of Contents

1. [Project-1: User-IP-viewer](./project-1/README.md)
2. [Project-2: GoalZone](./project-2/README.md)
3. [Project-3: IoT-DevOps Integration](./project-3/README.md)
4. [Portfolio Website Guide](#portfolio-website-guide)

## Projects

### [Project-1: User-IP-Viewer](./project-1/README.md)

User-IP-Viewer is a web application built with React and Node.js that retrieves and displays the user's IP address. This project covers DevOps concepts and tools such as Dockerfiles for containerization, GitHub Actions for CI/CD, Terraform for infrastructure as code, and AWS services like ECR for container registry and EKS for container orchestration. It demonstrates how to integrate these tools to create an efficient, automated, and scalable deployment pipeline for web applications.

### [Project-2: GoalZone](./project-2/README.md)

GoalZone is a soccer website that provides real-time updates on daily games, live notifications, user profiles, and search functionality for finding specific leagues. The application is built using Python, Flask, and a responsive design optimized for desktop. This project showcases various DevOps tools and practices, such as Docker for containerization, Jenkins for continuous integration and deployment, DynamoDB for data storage, Kubernetes for container orchestration, and Snyk for security monitoring. GoalZone demonstrates how to effectively build, manage, and deploy a modern web application using cloud computing and DevOps principles.

### [Project-3: IoT-DevOps Integration](./project-3/README.md)

Project-3 explores the integration of IoT and DevOps by creating an IoT application that leverages C++, ROS (Robot Operating System), and Linux for development. This project demonstrates the use of CI/CD pipelines to automate building, testing, and deployment of IoT systems. With Terraform for infrastructure as code and Amazon Web Services (AWS) for cloud-based resources, it showcases a modern approach to managing IoT deployments at scale. The project also includes electronic diagrams to illustrate the hardware components and their connections, highlighting the synergy between IoT, DevOps, and electronics engineering for efficient and scalable IoT solutions.

## Portfolio Website Guide

The root directory of this repository contains the HTML, CSS, and JavaScript for the portfolio dashboard.

### How to Add a New Project

To add a new project to the portfolio website, follow these steps:

1.  **Add Your Project Files**: Upload your project folder (e.g., `project-4`) to the repository.

2.  **Update `index.html`**:
    *   Open `index.html`.
    *   Find the `<section id="projects">` container.
    *   Copy an existing `<article class="card">` block.
    *   Update the `data-project` attribute (e.g., `data-project="project-4"`).
    *   Update the visual details: title, description, and tech stack tags.

    ```html
    <!-- Example -->
    <article class="card" data-project="project-4">
        <h3 class="card-title">My New Project</h3>
        <p class="card-desc">Short description for the card...</p>
        <div class="tech-stack">
            <span class="tag">New Tech</span>
        </div>
    </article>
    ```

3.  **Update `assets/js/script.js`**:
    *   Open `assets/js/script.js`.
    *   Locate the `projectData` object.
    *   Add a new key matching the `data-project` ID you used in the HTML.
    *   Add the `title`, `tech` array, and the detailed `content` HTML.

    ```javascript
    'project-4': {
        title: 'My New Project',
        tech: ['New Tech', 'Another Tool'],
        content: `
            <p>Detailed description...</p>
            <h3>Setup</h3>
            <pre><code>npm install</code></pre>
        `
    },
    ```

### Deployment

This website is configured to deploy automatically using **GitHub Actions**.
*   Workflow file: `.github/workflows/deploy-portfolio.yml`
*   Trigger: Push to the `main` branch.

Simply push your changes to `main`, and the website will be updated within minutes.

## License

This project is licensed under the [MIT License](LICENSE.md). Feel free to use, modify, and distribute any code in this repository as long as you follow the terms outlined in the LICENSE.md file.
