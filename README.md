# Zedexel-assignment
I built a unique and highly attractive admin dashboard using Next.js and Tailwind CSS, focusing on a responsive, modern design with smooth navigation and an intuitive user interface.

#Description
This project is an Admin Dashboard built using Next.js and Tailwind CSS. It is designed to be a modern, responsive, and user-friendly admin panel that offers an intuitive interface for managing projects, venues, and more.

Features
Responsive Design: Works seamlessly across desktop, tablet, and mobile devices.
Project Management: View details like project start and end dates, venue information, and status.
Image Gallery: Displays a grid of related images for each project.
Dynamic Data Fetching: Data is fetched dynamically from a JSON file or an API, ensuring real-time updates.

Technologies Used
Next.js: A React framework for server-side rendering and static site generation.
Tailwind CSS: A utility-first CSS framework that makes styling easier and faster.
JavaScript/TypeScript: Used for logic and type definitions in the project.
Vercel: Deployment platform for hosting the project.

Live Demo
You can view the live version of the project here:
https://zedexel-assignment-ten.vercel.app/ - Live Demo

Installation
To get a local copy of the project up and running, follow these steps:

Prerequisites
Make sure you have Node.js installed on your machine. You can download it from here.

Steps
Clone the repository:

bash
Copy
Edit
git clone https://github.com/shahwaz55s-projects/zedexel-assignment.git
Navigate into the project directory:

bash
Copy
Edit
cd zedexel-assignment
Install dependencies:

Run the following command to install all the necessary dependencies:

bash
Copy
Edit
npm install
Run the development server:

To start the project in development mode, use:

bash
Copy
Edit
npm run dev
The app will be available at http://localhost:3000.

Project Structure
bash
Copy
Edit
├── components          # Reusable UI components
├── pages               # Next.js pages
│   ├── index.tsx       # Main dashboard page
│   └── [id].tsx        # Dynamic project detail pages
├── public              # Static assets such as images
├── styles              # Global and Tailwind CSS styles
├── data                # Static data (JSON files for projects)
├── README.md           # Project documentation
├── package.json        # Dependencies and scripts
└── tailwind.config.js  # Tailwind CSS configuration
Deployment
This project is deployed using Vercel. If you want to deploy your version:

Install the Vercel CLI:

bash
Copy
Edit
npm install -g vercel
Deploy your project:

bash
Copy
Edit
vercel
For production deployment, run:

bash
Copy
Edit
vercel --prod
Contributing
If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch: git checkout -b feature-branch-name.
Make your changes and commit them: git commit -m 'Add some feature'.
Push the changes: git push origin feature-branch-name.
Submit a pull request.

