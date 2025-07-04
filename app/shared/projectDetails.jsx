const projectDetail = {
    "sheesh-compiler": {
        title: "Sheesh# Compiler",
        description: "C-syntax based programming language with modern internet slang as keywords and a simple text editor",
        skills: ["Python", "Tkinter"],
        tags: ["Compiler Design", "Automata Theory and Formal Languages", "Transition Diagram"],
        extendedDescription: "Sheesh# is a programming language based on the C syntax that features modern internet slangs as keywords. It supports basic language features such as functions, arrays, primitive data types, and control structures such as loops and conditional statements. The compiler is written in Python while the GUI is made using the Tkinter library. This project is a requirement for our  subject to demonstrate core language design principles and compiler processes such as transition diagrams, context-free grammar, lexical analysis, parsing, semantic analysis, and code generation.",
        contributions: ["Made the simple GUI using Tkinter",
            "Supported the lead programmer in development",
            "Tracked and documented errors found",
            "Wrote most of the rules and limitations of the language",
            "Made the transition diagram and context‑free grammar",
            "Created and tested use cases for each stage of the compiler (i.e., lexical analysis, syntax analyzer, code generation)"],
        imgDir:"/assets/images/projects/sheesh-compiler",
        role: "Support Programmer & Documentation",
        slug: "sheesh-compiler"
    },
    "plm-oulc" : {
        title: "PLM Legal Affairs Module",
        description: "Case management website and internal document tracker for the Office of the Legal Counsel in PLM",
        skills: ["PHP", "Laravel", "Livewire", "TailwindCSS", "MariaDB"],
        tags: ["Web Development", "SLDC", "Project Management"],
        extendedDescription: "This project made for the PLM OULC office as a requirement for our Software Engineering subject. The Legal Affairs Module provides case management and internal document tracker with a useful dashboard to see case progress, todos, and other office-specific tasks. ",
        contributions: [
            "Designed the database schema",
            "Made validation logic for input fields and form submission",
            "Handled server-side logic",
            "Collaborated with front-end developer to integrate UI elements with server-side logic, enhancing overall application functionality and user experience."
        ],
        imgDir:"/assets/images/projects/plm-oulc",
        role: "Backend Developer",
        slug: "plm-oulc"
    },
    "jemerators": {
        title: "JEMerators",
        description: "A simple data visualization and reporting site with AI-integration for data interpretation",
        skills: ["Python", "Streamlit"],
        tags: ["Data Analytics", "Data Visualization", "AI"],
        extendedDescription: "A simple data visualization and reporting site with AI integration for data interpretation. Users can upload datasets and generate interactive charts, graphs, and summaries. Built with a clean and intuitive UI, the site can help iautomatically detecting data types and recommending appropriate visualizations from the CSV input. The AI module analyzes trends, detects anomalies, and provides human-readable insights to aid decision-making. Users can export reports from the generated charts with a premade template.",
        contributions: [
            "Made the report generation section",
            "Aided in the implementation and configuration of the AI module",
        ],
        imgDir:"/assets/images/projects/jemerators",
        role: "Programmer",
        slug: "jemerators"
    },
    "shortest-route-generator": {
        title: "Shortest Route Generator",
        description: "Generates the shortest round-trip route using Genetic Algorithm with a modified route optimizer",
        skills: ["Python", "Streamlit"],
        tags: ["Thesis", "Genetic Algorithm", "2-opt"],
        extendedDescription: "This project provides a simple a user interface for generating the shortest round-trip (visit all locations and go back to the start) route. The algorithm used is an improved version of the standard Genetic Algorithm with 2-opt local search which me & Greg Andrew Rivera developed for our thesis disertation.",
        contributions: [
            "Implemented the proposed improvement for local search method",
            "Curated the datasets to be used for testing",
            "Ran the tests and analyzed the data produced",
        ],
        imgDir:"/assets/images/projects/shortest-route-generator",
        role: "Programmer",
        slug: "shortest-route-generator"
    },
    "celica-e-commerce-app": {
        title: "Celica E-Commerce App",
        description: "A mobile and web app for Celica Motor Sales Corporation to showcase and sell automotive parts and accessories",
        skills: ["Flutter"  ],
        tags: ["Mobile Development", "UI/UX"],
        extendedDescription: "This project was developed to showcase and sell automotive parts and accessories for Celica Motor Sales Corporation across both web and mobile platforms. It includes a dynamic product catalog with advanced search and filter options, a secure user authentication system, and a smooth shopping cart and checkout experience. An admin dashboard is also provided, allowing administrators to manage inventory, update product details, and monitor order history efficiently. I was tasked to developed the mobile version of the website with Flutter.",
        contributions: [
            "Designed the About Us page",
            "Designed and made the UI of the mobile app"],
        imgDir:"/assets/images/projects/celica-e-commerce-app",
        role: "Developer",
        slug: "celica-e-commerce-app"
    }
    
}

export {projectDetail}