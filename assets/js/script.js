document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modalTitle');
    const modalTech = document.getElementById('modalTech');
    const modalBody = document.getElementById('modalBody');

    // Data source for projects.
    // In a production app, this might come from a JSON file or API.
    // Here we hardcode the extracted data for simplicity and performance.
    const projectData = {
        'project-1': {
            title: 'User-IP-Viewer',
            tech: ['React', 'Node.js', 'Docker', 'Terraform', 'AWS', 'GitHub Actions'],
            content: `
                <p>User-IP-Viewer is a web application built with React and Node.js that retrieves and displays the user's IP address. This project demonstrates how to integrate modern DevOps tools to create an efficient, automated, and scalable deployment pipeline.</p>

                <h3>Prerequisites</h3>
                <ul>
                    <li>Docker</li>
                    <li>AWS account</li>
                    <li>Terraform</li>
                    <li>Basic understanding of AWS services (ECR, ECS, ALB)</li>
                </ul>

                <h3>Setup & Deployment</h3>

                <h4>1. Fork and Clone</h4>
                <p>Fork the repository and clone it to your local machine.</p>

                <h4>2. Configure AWS Credentials</h4>
                <pre><code>aws configure</code></pre>
                <p>Ensure your GitHub Actions secrets are configured with your AWS credentials.</p>

                <h4>3. Infrastructure as Code</h4>
                <p>Use Terraform to provision the AWS infrastructure (ECR, ECS Cluster, ALB, VPC).</p>
                <pre><code>cd project-1/terraform
terraform init
terraform apply</code></pre>

                <h4>4. CI/CD Pipeline</h4>
                <p>Pushing to the main branch triggers the GitHub Actions workflow which:</p>
                <ul>
                    <li>Builds the Docker image</li>
                    <li>Pushes the image to Amazon ECR</li>
                    <li>Updates the ECS service to deploy the new container</li>
                </ul>
            `
        },
        'project-2': {
            title: 'GoalZone',
            tech: ['Python', 'Flask', 'Docker', 'Kubernetes', 'Jenkins', 'DynamoDB', 'Snyk'],
            content: `
                <p>GoalZone is a soccer website that provides real-time updates on daily games, live notifications, user profiles, and search functionality. This project showcases the deployment of a Python-based web application using Kubernetes for orchestration.</p>

                <h3>Key Features</h3>
                <ul>
                    <li>Real-time updates</li>
                    <li>User profiles</li>
                    <li>Responsive design</li>
                </ul>

                <h3>DevOps Architecture</h3>
                <p>The application is containerized with Docker and orchestrated using Kubernetes. Jenkins handles the CI/CD pipeline, ensuring seamless updates. Data is persisted using AWS DynamoDB, and security is monitored via Snyk.</p>
            `
        },
        'project-3': {
            title: 'IoT-DevOps Integration',
            tech: ['C++', 'ROS', 'Linux', 'Terraform', 'AWS', 'CI/CD'],
            content: `
                <p>This project explores the integration of IoT and DevOps by creating a robotic application using ROS (Robot Operating System). It demonstrates how to apply CI/CD principles to embedded systems and IoT hardware.</p>

                <h3>Highlights</h3>
                <ul>
                    <li>Automated building and testing of C++/ROS nodes</li>
                    <li>Infrastructure management using Terraform</li>
                    <li>Cloud integration with AWS for data analysis</li>
                </ul>
            `
        }
    };

    // Event delegation for project cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const data = projectData[projectId];

            if (data) {
                modalTitle.textContent = data.title;

                // Clear and populate tech stack
                modalTech.innerHTML = '';
                data.tech.forEach(tech => {
                    const span = document.createElement('span');
                    span.className = 'tag';
                    span.textContent = tech;
                    modalTech.appendChild(span);
                });

                modalBody.innerHTML = data.content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close modal logic
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});
