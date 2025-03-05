# eaa-website/eaa-website/README.md

# European Accessibility Act 2025 Website

This project serves as a static website providing information about the European Accessibility Act (EAA) 2025. It includes various resources, compliance guidelines, and related content.

## Project Structure

- **Dockerfile**: Instructions to build the Docker image for the static web server.
- **docker-compose.yml**: Configuration for running the web server container.
- **public/**: Contains all HTML, CSS, and JavaScript files for the website.
  - **assets/**: Contains styles and scripts.
    - **script.js**: JavaScript for interactivity.
    - **style.css**: CSS for styling the website.
  - **index.html**: Main entry point of the website.
  - **brexit.html**: Information related to Brexit and the EAA.
  - **challenges.html**: Discussion on challenges of implementing the EAA.
  - **compliance.html**: Compliance requirements for the EAA.
  - **document.html**: Complete documentation and resources for the EAA.
  - **legal.html**: Legal aspects of the EAA.
  - **standards.html**: Standards set by the EAA.
  - **timeline.html**: Implementation timeline for the EAA.

## Getting Started

To build and run the Docker container, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd eaa-website
   ```

2. **Build the Docker image**:
   ```
   docker build -t eaa-website .
   ```

3. **Run the Docker container**:
   ```
   docker run -p 8080:80 eaa-website
   ```

4. **Access the website**:
   Open your web browser and navigate to `http://localhost:8080`.

## License

This project is licensed under the MIT License. See the LICENSE file for details.