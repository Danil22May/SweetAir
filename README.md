
# SWEET Air 🌐 🌬️

## Index

- [Project](#project)
    - [Distribution of tasks](#distribution-of-tasks)
- [Installation](#installation)
    - [Requirements](#requirements)
- [Usage](#usage)
- [Charts](#charts)
- [Technologies](#technologies)
    - [Front-end](#front-end)
    - [Back-end](#back-end)
- [Demo](#demo)
- [Contribution](#contribution)
- [Developers](#developers)


## Project

**SweetAir** is an innovative application web designed to show live updated air quality data from any city around the globe. 

This app's focuses on helping people with health problems, be it respiratory or otherwise, stay safe and sound wherever they are. 

For that reason, our mission is to keep people updated and safe in potentially harming environments that could negatively impact their health.

### Distribution of tasks

In the development of our project, each team member has played a crucial role in ensuring the success of our API and design. We organized our project with Jira, through Epics and User Stories as seen below. 

<img width="1414" alt="Captura de pantalla 2024-07-05 a les 0 31 35" src="https://github.com/Danil22May/SweetAir/assets/168748574/60b3db86-4a5e-44d5-abe4-d816abaa2f1f">



As for the app's development, we organized ourselves and the steps we followed to carry out the project.

**For the Back-end and API fetching:**

Ted was in charge of creating the database and configuring it to be public, thus allowing access to the entire team. Using JavaScript, he implemented a CRUD (Create, Read, Update, Delete) to manage cities provided by an external API. This functionality was essential to structure the initial data with which we would work.

Eva focused on handling comments within our API. She implemented a complete CRUD in Java language, ensuring that all basic operations were covered. In addition, Eva was in charge of writing the unit tests for each of the functions, guaranteeing the quality and functionality of the code.

Paula dedicated herself to uniting both CRUD, cities and comments, into a single cohesive system. Due to her increased command of the JavaScript language, she decided to migrate all code to this language to maintain consistency and ease of maintenance. This decision allowed all components of the project to work together seamlessly.

Ana was in charge of making adjustments and improvements to the database. Her task was to ensure that cities were properly structured and optimized to improve performance and data integrity.

**For the Front-end and design:**

Cris took the lead in both design and development, leveraging Figma for creating intuitive UI/UX layouts and conducting rigorous testing to ensure a seamless user experience.

Daniil focused primarily on testing, participating in comprehensive testing sessions to validate the functionality and aesthetics of the web app.

Betty played a crucial role in both design and development, utilizing Figma to translate design concepts into prototypes and coding the front-end components to bring the designs to life.

Thanks to the collaboration and specialization of each team member, we were able to develop a robust and efficient API and an appealing and functional app. Each of us brought specific experience and skills, which allowed us to meet the project objectives effectively and on time.


## Installation

### Requirements

- Node.js: [Download Node.js](https://nodejs.org/)
- npm: comes with Node.js
- Docker -optional: [Download Docker](https://www.docker.com/)

You can then:

1. Clone the Front repository:
```bash
 git clone https://github.com/Danil22May/SweetAir/
```

2. Clone the Back repository:
```bash
 git clone https://github.com/Danil22May/SweetAirApi/
```

 3. Install dependencies:
```bash
 npm install
 ```

 ## Usage
To run the project, use the following command for the Front:
```bash
npm run dev
```

And the following command for the Back:
```bash
node app.js
```
Or build the Docker image using the provided Dockerfile:
```bash
docker build -t my-react-app .
```
Run the Docker container
```bash
docker run -p 5173:5173 my-react-app
```
## Charts

**Back:**

This flow diagram illustrates the interaction between the frontend and backend of our SweetAir application.

**Frontend:**
The user interacts with the front of the application, which is designed to be intuitive and user-friendly. The frontend is responsible for displaying information about air quality and providing recommendations based on the data.

**Backend:**
The backend handles the logic and processing required to serve the frontend's requests. When the frontend makes a request for air quality data, the backend springs into action.

**API Interaction:**
The backend calls the external API that provides real-time air pollution data. This API is essential for retrieving up-to-date information about air quality in various locations.

**Database Management:**
In addition to fetching data from the external API, the backend also interacts with our database. The database stores historical air quality data, user comments, and other relevant information. The backend retrieves and updates this data as necessary.

**CRUD Operations:**
The backend manages the Create, Read, Update, and Delete (CRUD) operations for the comments made by users about the air quality. This functionality allows users to share their experiences and observations, which are then stored in the database and can be retrieved and displayed by the frontend.

**Data Handling:**
After the backend processes the data from the API and the database, it sends the required information back to the frontend. The frontend then presents this data to the user in a meaningful way, including providing advice and recommendations based on the air quality levels.

By structuring our application this way, we ensure that the frontend remains responsive and focused on user interaction, while the backend efficiently handles data retrieval, processing, and storage. This separation of concerns enhances the maintainability and scalability of our application.

**Front:**

- User flow:

![UserFlow drawio](https://github.com/Danil22May/SweetAir/assets/168748574/d0823fc2-15a6-49e5-9426-617239ea4789)

- Flow chart:

![FlowChart drawio](https://github.com/Danil22May/SweetAir/assets/168748574/8e1e1143-4e04-49fa-9274-83ea5a174d72)



## Technologies

### Front-end
- HTML: The standard markup language for creating web pages.
- CSS: The language used to describe the style of document presentations.
- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Figma: cloud-based design tool for user interfaces, prototypes, and graphics.

### Back-end
- Java: A high-level, class-based, object-oriented programming language.
- JavaScript: A versatile programming language commonly used for web development.
- JUnit: A testing framework for Java.
- MySQL: An open-source relational database management system.
- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.


## Demo
**Desktop**

https://github.com/Danil22May/SweetAir/assets/168748574/94d32d31-e449-4ffe-9f39-359e3ecf2203

**Mobile**

https://github.com/Danil22May/SweetAir/assets/168748574/382e8215-0aae-40f0-a2f4-7f7cdf1bd2b7

## Contribution

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes.
4. Push your branch: `git push origin feature-name`.
5. Create a pull request.

 ## Developers
We are proud to present the team behind the SweetAir project. Meet our contributors:

- [Daniil Tararak](https://github.com/Danil22May)
- [Paula Giner](https://github.com/pginer22)
- [Ted Salvador](https://github.com/tedsalvador)
- [Betty Lopez](https://github.com/BettyLopo)
- [Cris Perez](https://github.com/CrisZDE)
- [Eva Martinez](https://github.com/EvaMartinez94)
- [Ana Martín](https://github.com/anamartin99)
