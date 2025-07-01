import React from "react";
import Image from "next/legacy/image";
import { FaGithub } from "react-icons/fa";
import { ChipList } from "./Chips";
import Link from "next/link";

interface Project {
  name: string;
  description: string[];
  technologies: string[];
  image: string;
  githubLink?: string;
  longDescription?: string;
  demoVideo?: string;
}

export const projects: Project[] = [
  {
    name: "TrackML",
    description: [
      "Comprehensive tool for tracking and managing machine learning models.",
    ],
    technologies: [
      "Python",
      "Langchain",
      "Flask",
      "React",
      "Webscraping",
      "Dockers",
    ],
    image: "/projects/TrackML.png",
    githubLink: "https://github.com/capybara-brain346/TrackML-Backend",
    demoVideo: "https://www.youtube.com/watch?v=_IDP-yB5AQA",
    longDescription: `# TrackML

TrackML is a full-stack tool for tracking, managing, and analyzing machine learning models. It supports organizing models, extracting insights using AI, and integrating with external APIs for automation and enrichment.

## Key Features

* Track details of ML models such as name, type, developer, and parameters
* Organize models using tags and status labels
* Search and filter models by different attributes
* Visual dashboard showing model stats and insights
* Dark mode for better UI experience
* Auto-fill model info from HuggingFace API
* Compare models and generate insights using Google Gemini AI
* Mobile-responsive design
* Secure login and authentication
* Cross-origin request support
* Ready-to-deploy on AWS EC2

## Architecture Overview

### Frontend

* Built using React 18+ and Vite
* TypeScript used for safer code
* TailwindCSS for styling
* Routing with React Router v6
* Global state handled via Context API
* Axios used for API communication

### Backend

* Flask powers the REST API
* SQLAlchemy ORM for database operations (SQLite/PostgreSQL supported)
* JWT used for authentication
* Integrates Google Gemini and HuggingFace APIs
* Flask-CORS enables secure cross-origin communication
* Written in Python 3.8+

### Infrastructure

* Hosted on AWS EC2
* Optional use of AWS RDS for databases and S3 for static assets
* Domain and SSL managed through AWS Route 53 and ACM

## Nginx Configuration Summary

### Reverse Proxy

* Routes requests to backend and frontend
* Supports HTTPS termination
* Handles headers like X-Real-IP and X-Forwarded-For
* Configurable for WebSocket and subdomain routing

### Caching

* Uses disk and memory caching
* Supports API and static file caching
* Allows custom cache control rules
* Can bypass or purge cache as needed

### Performance

* Enables compression via GZIP or Brotli
* Optimized for large headers and payloads
* Manages keep-alive connections and worker events

### Security

* Implements rate limiting using IP zones
* Adds HTTP security headers to prevent XSS, CSRF, and clickjacking
* Configures SSL with strong ciphers and modern protocols

### Monitoring

* Logs requests, errors, and performance metrics
* Tracks response times, error rates, and cache efficiency

## Deployment

* Local setup requires Python 3.8+, Node.js 16+, and API credentials
* EC2 deployment involves setting up services, Gunicorn, and Nginx
* Frontend is built and served using Nginx with backend proxied on port 5000

## API Summary

* Auth endpoints for registration, login, and logout
* Model endpoints for create, read, update, delete, search, and autofill

## Project Structure

* Backend: organized into models, routes, services, and config
* Frontend: includes components, pages, services, and types
* Deployment: contains Nginx and systemd setup files

## Troubleshooting

* Ensure CORS is configured properly in the backend
* Verify environment variables including API keys and database URLs
* Make sure external services (e.g., Gemini, HuggingFace) are accessible

## Licensing and Credits

* Licensed under MIT
* Uses APIs from Google Gemini and HuggingFace
* Hosted using AWS infrastructure`,
  },
  {
    name: "AtjBot",
    description: [
      "Developed a Retrieval-Augmented Generation based chatbot for the official website of Department Of Justice India.",
    ],
    technologies: [
      "Python",
      "Langchain",
      "Flask",
      "React",
      "Webscraping",
      "Dockers",
    ],
    image: "/projects/atjbot.png",
    githubLink: "https://github.com/capybara-brain346/atjbot",
    longDescription: `This project is a multilingual, RAG-powered chatbot application built with a React frontend and a Flask backend. It allows users to chat with a bot that retrieves information from documents and generates responses intelligently. It supports different document types and languages, and stores embeddings using the Chroma vector database.

## Key Features

* Interactive chatbot that responds to user queries
* Language selector enabling multilingual support
* Predefined suggestions to guide the conversation
* RAG (Retrieval-Augmented Generation) pipeline for accurate and contextual answers
* Extracts and displays reference links used in responses
* Enforces rate limiting to prevent abuse of the API

## Tech Stack

### Frontend

* Built with React for UI
* Supports modern JavaScript workflows
* Runs on a local development server

### Backend

* Built with Flask to handle API requests
* Integrates with LangChain for the RAG pipeline
* Uses NLTK for NLP tasks
* Communicates with Google Generative AI for response generation

### Storage and Processing

* Vector storage with Chroma for document embeddings
* Supports ingestion of PDFs, CSVs, and plain text files

### Deployment

* Docker-compatible architecture for containerized deployment

## Installation Summary

* Requires Node.js and npm for the frontend
* Requires Python 3.7+ and virtual environment setup for the backend
* Uses pip to install backend dependencies
* Requires a Google API key for access to generative AI

## Usage Instructions

1. Launch frontend and backend locally
2. Access the application via browser
3. Select a language from the dropdown
4. Enter a query in the input field and submit
5. View chatbot's response along with relevant context and links

## API Overview

### Main Endpoints

* GET / serves the main frontend
* POST / predict accepts a user message and returns a generated response

### Rate Limiting

* The / predict endpoint allows up to 10 requests per minute per user

### Example Use

* A user inputs a message with an optional language tag
* The server processes the query using document context and returns an appropriate response

## Contribution Guide

* Contributions are encouraged
* Submit issues or pull requests for improvements or bug fixes

## License

* Licensed under the MIT License

## Acknowledgments

* LangChain for enabling document-based retrieval and embedding
* NLTK for language processing tools
* React and Flask for frontend and backend frameworks`,
  },
  {
    name: "Mars Weather Data ETL Pipeline",
    description: [
      "An automated ETL pipeline that extracts Mars weather data from NASA's InSight API, transforms it using Java, and loads it into MongoDB for analysis.☄️",
    ],
    technologies: [
      "Java",
      "MongoDB",
      "MySQL",
      "JDBC",
      "Apache Airflow",
      "Dockers",
    ],
    image: "/projects/MarsETL.png",
    githubLink: "https://github.com/capybara-brain346/Mars-Data-ETL-Pipeline",
    demoVideo: "https://www.youtube.com/watch?v=O_P305Kb26g",
    longDescription: `This project is a Java-based application that fetches real-time Martian weather data from NASA's InSight API and stores it in MongoDB. It enables storage, retrieval, and analysis of weather parameters such as temperature, pressure, and wind speed on Mars. The system also includes a visualization dashboard and supports ETL automation using Airflow.

## Key Features

* Retrieves Mars weather data via the NASA InSight API
* Parses JSON responses and stores them in MongoDB
* Supports retrieval of stored weather documents for offline analysis
* Uses environment variables to manage sensitive credentials securely
* Includes optional relational DB integration (not fully implemented)

## Prerequisites

* Java 11 or later
* Maven for project management
* MongoDB as the NoSQL database
* Internet access for API calls
* NASA API Key and MongoDB credentials

## Core Components

* **MongoDBClient**: Manages connections and data operations for MongoDB
* **Main**: Controls application flow, including API fetching and DB interactions
* **GetAPI**: Handles HTTP requests to NASA InSight API
* **DataModel**: Represents the weather data structure (WIP)
* **DateUtil**: Utility for date formatting (WIP)
* **DataRepository**: Placeholder for potential relational DB storage

## Third-Party Libraries

* MongoDB Java Driver for DB integration
* OkHttp for API communication
* Jackson for JSON parsing
* dotenv-java for environment variable management

## Visualization Dashboard

A separate Dash-based web application visualizes the stored data from MySQL (or processed outputs). The dashboard provides interactive graphs and visual trends:

* Tracks pressure, temperature, and wind speed variations
* Explores relationships like temperature vs pressure
* Displays wind direction distributions using rose plots
* Styled for readability with a dark theme

## Airflow ETL Pipeline

* A daily Airflow DAG triggers a JAR task to fetch data from NASA
* Docker Compose sets up the Airflow environment with PostgreSQL
* Airflow services include webserver, scheduler, and an init container
* Supports automation of data fetching and loading for analytics

## Deployment Highlights

* Runs Java application via Maven and JAR execution
* Dashboard served as a Python Dash app
* Airflow and PostgreSQL orchestrated using Docker Compose

## Contribution

Contributors are welcome to enhance functionality, fix bugs, or expand visualization features. Open an issue or submit a pull request for review.

## License

Licensed under the MIT License. See LICENSE file for usage terms.

## Acknowledgments

* NASA for providing open access to Martian weather data
* Open-source maintainers of MongoDB, Jackson, OkHttp, LangChain, and Airflow`,
  },
  {
    name: "RecycleNet18",
    description: [
      "RecycleNet is a deep learning-based project designed to classify images of recyclable items into 30 distinct categories. 📦",
    ],
    technologies: ["Python", "Streamlit", "Pytorch", "Ollama", "Langchain"],
    image: "/projects/recyclenet.png",
    githubLink: "https://github.com/capybara-brain346/RecycleNet18",
    demoVideo: "https://www.youtube.com/watch?v=K3wz3cSf9is",
    longDescription: `# RecycleNet – Overview

RecycleNet is a deep learning-powered platform designed to encourage proper recycling practices. It combines image classification and chatbot interaction to help users identify recyclable materials and understand how to recycle them correctly.

## Key Features

### Image Classification

RecycleNet uses a computer vision model to classify items into one of 30 recyclable categories. Recognized item types include various plastics, metals, paper products, glass containers, and organic waste indicators like coffee grounds and eggshells.

### Chatbot Guidance

An integrated chatbot offers:

* Clear, actionable recycling instructions
* Educational insights on material-specific recycling
* Simple and intuitive user interactions
* Optional region-specific recycling guidance

## How It Works

1. **Upload an Image**: Users submit a photo of the item they want to recycle.
2. **Model Prediction**: The backend model classifies the item and returns a confidence score.
3. **Recycling Advice**: The chatbot provides recycling guidance based on the item category.

## Technical Implementation

### Model

* Built on ResNet18, fine-tuned for 30-class classification
* Pretrained ImageNet weights used with a custom classification head
* Handles image transformations like resizing, cropping, and normalization

### Inference

* Accepts image input in byte format
* Outputs predicted label, class index, and confidence score

### Chatbot

* Based on Google GEMMA-1.1-2b
* Fine-tuned with LoRA for domain-specific dialog handling
* Designed to provide step-by-step recycling instructions

### API

* Built with FastAPI
* Provides endpoints for health checks and image uploads
* Swagger documentation available at the / docs route

### Stack

* **Backend**: FastAPI
* **Machine Learning**: PyTorch, HuggingFace
* **Image Processing**: torchvision
* **Deployment**: Docker-ready architecture for scalability

## Setup Instructions

1. Clone the repository
2. Install Python dependencies
3. Launch the FastAPI server locally
4. Access API documentation in the browser

## Future Plans

* Add support for more recyclable item classes
* Introduce localization features for region-specific recycling rules
* Enhance chatbot capabilities for more personalized user experiences

## License

RecycleNet is licensed under the MIT License.`,
  },
  {
    name: "pokedex-api",
    description: [
      "Retrieve comprehensive data on your favorite Pokémon with this Restful API. 🌟 ",
    ],
    technologies: ["Python", "FastAPI", "Sqlite3", "Pytest"],
    image: "/projects/pokemon.jpg",
    githubLink: "https://github.com/capybara-brain346/pokedex-api",
    demoVideo: "https://www.youtube.com/watch?v=DXXRnLPZq_8",
    longDescription: `The Pokedex API is a RESTful service built with FastAPI that serves detailed information on over 1,000 Pokémon. It allows users to query Pokémon data including stats, abilities, types, and other attributes. The data is scraped from external sources and stored in a PostgreSQL database for efficient querying and long-term storage.

## Key Features

* **Comprehensive Dataset**: The API uses data for 1,015 Pokémon, sourced from pokemondb.net and stored in a structured PostgreSQL database. It includes stats, types, abilities, species, and more.

* **Open Data Contribution**: The dataset is also published on Kaggle, where it has been downloaded and viewed by thousands of users.

* **Flexible Querying**: Endpoints support filtering by name, abilities, type, size, species, growth rate, catch rate, friendship level, and base experience.

* **Automated CI/CD**: GitHub Actions are used for continuous integration, automatically running linting checks and building the application container.

## Technology Stack

* **FastAPI**: Provides a high-performance API framework with built-in docs and validation
* **PostgreSQL**: Stores the scraped Pokémon data in a structured, queryable format
* **Scrapy**: Used to crawl and extract Pokémon information from the web
* **Python**: The core language for the API, scraping, and data transformation
* **GitHub Actions**: Automates build and linting workflows
* **Docker**: Supports containerized deployments for portability

## Dataset Contents

Each Pokémon record includes:

* Name and species
* Primary and secondary types
* Abilities
* Base stats (HP, Attack, Defense, Speed, etc.)
* Size metrics (height, weight)
* Growth rate
* Catch rate
* Base friendship and experience values

## Usage

1. Clone the repository and set up the environment
2. Run the API locally using Uvicorn, or use Docker for deployment
3. Access the API at http://localhost:8000 (or 8080 for Docker) with interactive docs at /docs

## Available Endpoints

* Search by Name: /pokemons/name/{name}
* Filter by Abilities: /pokemons/abilities/{abilities}
* Filter by Type: /pokemons/type/{type}
* Query by Size: /pokemons/size with optional comparison filters
* Filter by Species: /pokemons/species/{species}
* Growth Rate Lookup: /pokemons/growth_rate/{rate}
* Catch Rate, Friendship, and Experience Queries: With numerical filters

## Docker Support

* Docker image can be built and run for production use
* Makes the app portable and easy to deploy on cloud platforms or containers

## CI/CD Integration

* Linting: Code quality is enforced using Pylint in CI workflows
* Build: The project is automatically built and containerized with each update

## Planned Enhancements

* Advanced filters for combined types and abilities
* Caching to improve performance for frequent queries
* Support for Pokémon movesets and battle abilities

## License and Acknowledgments

* Data sourced from Pokemondb.net and shared under fair use
* Dataset available on Kaggle for public research and use`,
  },
  {
    name: "SAP Stocks",
    description: [
      "This application provides real-time insights into stock performance, company news, and market trends through an intuitive interface and AI-powered chatbot. ⚙️",
    ],
    technologies: ["Python", "React", "Flask", "Langchain", "Ollama"],
    image: "/projects/sap_stocks.png",
    githubLink: "https://github.com/capybara-brain346/SAP-Stocks",
    demoVideo: "https://www.youtube.com/watch?v=sap-stocks-demo",
    longDescription: `A real-time, AI-powered platform for scraping, analyzing, and querying stock-related news from 60+ sources. The system combines financial sentiment classification with a RAG-based chatbot to make market news both actionable and conversational.

---

## Features

### Real-Time News Aggregation

* Fetches news headlines and summaries from 60+ financial news websites using Selenium
* Utilizes LLaMA 3.2 LLM to parse and extract relevant information from raw HTML

### Sentiment Analysis

* Classifies each news snippet as **positive**, **negative**, or **neutral** using finBERT, a finance-specific BERT variant
* Provides instant insight into public sentiment surrounding specific stocks or sectors

### AI Chatbot (RAG-Based)

* Users can ask natural-language questions about companies or events
* Powered by:

  * LangChain for RAG orchestration
  * ChromaDB as a vector store
  * Gemini-1.5-Flash (via Gemini API) as the reasoning engine

---

## Technology Stack

**Web Scraping**: Selenium

**HTML Parsing**: LLaMA 3.2 LLM (via Ollama)

**Sentiment Analysis**: finBERT

**AI Chatbot**: LangChain + ChromaDB + Gemini-1.5

**Vector Storage**: ChromaDB

**Backend**: Flask (Python)

**Frontend**: React.js

**LLM Hosting**: Ollama API + Gemini API

---

## Installation Guide

### 1. Clone the Repository

git clone [https://github.com/yourusername/stock-news-sentiment-analysis-platform.git](https://github.com/yourusername/stock-news-sentiment-analysis-platform.git)
cd stock-news-sentiment-analysis-platform

### 2. Set Up Virtual Environment

python3 -m venv venv
source venv/bin/activate

### 3. Install Dependencies

pip install -r requirements.txt

### 4. Configure Environment

Set up environment variables for:

* GEMINI\_API\_KEY
* OLLAMA\_MODEL\_URL
* FINBERT\_MODEL\_PATH or endpoint

### 5. Run the App

python backend/app.py

---

## Usage Guide

### Sentiment Inference

* News is scraped and stored as structured JSON (via scraped\_news.json)
* Each entry is passed through finBERT for classification

### AI Chatbot Queries

* Ask contextual questions like:

  * What's the sentiment on Nvidia in the last 24 hours?
  * Summarize bullish news on Microsoft
* The chatbot retrieves embeddings using ChromaDB, then reasons using Gemini-1.5-Flash to generate natural answers

---

## Project Structure

backend/
├── app.py - FastAPI or Flask server
├── bot.py - LangChain RAG pipeline
├── sentiment\_analysis.py - finBERT inference code
├── web\_scrape.py - Selenium-based scraper
└── scraped\_news.json - Output file for latest news

frontend/ - ReactJS-based UI
requirements.txt - Python dependencies

---

## Future Roadmap

* Support multi-class sentiment (e.g., bullish, bearish, speculative)
* Add support for region-specific financial news and localization
* Integrate real-time stock prices for correlation with news
* OAuth & user-specific dashboards

---

## Contributing

We welcome contributions!

* Fork the repo
* Create a branch
* Submit a pull request with clear changes

---

## License

This project is licensed under the MIT License. See the LICENSE file for more details.`,
  },
];

const Projects: React.FC = () => {
  return (
    <>
      <section id="projects" className="py-4 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-100">Projects</h2>
        <ul className="space-y-12">
          {projects.map((project, index) => (
            <li
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                    {project.name}
                  </h3>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    {project.description.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="mr-2 mt-1.5 text-gray-500">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <ChipList items={project.technologies} category="frameworks" />
                  <div className="flex space-x-4 mt-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <FaGithub className="mr-2" />
                        <span>GitHub</span>
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Projects;
