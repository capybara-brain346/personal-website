import Groq from "groq-sdk";

const CONTEXT = `
<profile>
    <personal_info>
        <name>Piyush Choudhari</name>
        <location>Pune, Maharashtra, India</location>
        <email>choudhari.piyush@gmail.com</email>
        <phone>+91 9168088565</phone>
        <github>https://github.com/capybara-brain346</github>
        <linkedin>https://www.linkedin.com/in/piyush-choudhari/</linkedin>
        <portfolio>https://piyush-choudhari.vercel.app/</portfolio>
    </personal_info>
    
    <experience>
        <role>AI Engineer Intern</role>
        <company>Ronin Labs</company>
        <duration>Jan 2025 - Present</duration>
        <responsibilities>
            <project name="Reelskit – GenAI Video Agent">
                <item>Built a modular agent using LangGraph & GPT for dynamic video generation (chat, FX, music)</item>
                <item>Developed a web-based editor (DepthFlow, Stable Diffusion XL, ControlNets) for customizable visual scenes</item>
                <item>Reduced generation latency to <20s through backend optimization</item>
            </project>
            <project name="Sketchbot – AI Drawing on Raspberry Pi">
                <item>Created an offline-capable image generation system with ControlNet & Antelopev2</item>
                <item>Deployed full-stack solution (FastAPI, AWS EC2, Nginx), cutting server costs by 30%</item>
            </project>
            <project name="OnePlus 13s Quiz Campaign">
                <item>Built fast, scalable APIs (Node.js, TypeScript) for a 70K+ user global event</item>
                <item>Developed Django admin panel and managed GCP Cloud SQL infrastructure</item>
            </project>
        </responsibilities>
        <skills>Python, Typescript, FastAPI, Node.js, Pytorch, Huggingface, LLMs, Stable Diffusion, Automatic1111, Comfy UI, Llama LLMs</skills>
    </experience>

    <club_experience>
        <role>AIML Team Lead</role>
        <organization>Intel AI Students Club</organization>
        <duration>2024 - 2025</duration>
        <responsibilities>
            <item>Led a team of AI/ML enthusiasts in developing projects and organizing technical workshops</item>
            <item>Mentored junior members in AI/ML concepts, computer vision, and LLM applications</item>
            <item>Organized hands-on workshops and technical sessions on emerging AI technologies</item>
        </responsibilities>
        <projects>
            <project>
                <name>Gesture-based TicTacToe</name>
                <description>Interactive game using computer vision with OpenCV and MediaPipe, featuring an AI opponent</description>
                <github>https://github.com/IASC-DYPCOE/OpenCV-Tic-Tac-Toe</github>
            </project>
            <project>
                <name>AI Dungeon Master</name>
                <description>Dynamic D&D game utilizing Gemini LLM for story generation and character interactions</description>
                <github>https://github.com/IASC-DYPCOE/LLM-Role-Playing-Game</github>
            </project>
        </projects>
        <technologies>Python, OpenCV, MediaPipe, Gemini LLM, FastAPI, Streamlit</technologies>
    </club_experience>
    
    <projects>
        <project>
            <name>TrackML</name>
            <description>Comprehensive tool for tracking and managing machine learning models</description>
            <technologies>Python, Langchain, Flask, React, Webscraping, Dockers</technologies>
            <github>https://github.com/capybara-brain346/TrackML-Backend</github>
        </project>
        <project>
            <name>AtjBot</name>
            <description>RAG-based chatbot for the Department Of Justice India website</description>
            <technologies>Python, Langchain, Flask, React, Webscraping, Dockers</technologies>
            <github>https://github.com/capybara-brain346/atjbot</github>
        </project>
        <project>
            <name>Mars Weather Data ETL Pipeline</name>
            <description>Automated ETL pipeline for NASA's InSight API Mars weather data using Java and MongoDB</description>
            <technologies>Java, MongoDB, MySQL, JDBC, Apache Airflow, Dockers</technologies>
            <github>https://github.com/capybara-brain346/Mars-Data-ETL-Pipeline</github>
        </project>
        <project>
            <name>RecycleNet18</name>
            <description>Deep learning model to classify images of recyclable items into 30 categories</description>
            <technologies>Python, Streamlit, Pytorch, Ollama, Langchain</technologies>
            <github>https://github.com/capybara-brain346/RecycleNet18</github>
        </project>
        <project>
            <name>SAP Stocks</name>
            <description>Real-time stock insights and AI-powered chatbot for market analysis</description>
            <technologies>Python, React, Flask, Langchain, Ollama</technologies>
            <github>https://github.com/capybara-brain346/SAP-Stocks</github>
        </project>
    </projects>

    <achievements>
        <item>
            <title>Indovate AI Sprint Hackathon</title>
            <position>First Place 🏆</position>
            <organization>IEEE CIS CCEW</organization>
            <year>2025</year>
        </item>
        <item>
            <title>Data Visualization Hackathon</title>
            <position>Second Place 🏆</position>
            <organization>Intellex AI Students Club</organization>
            <year>2024</year>
        </item>
        <item>
            <title>VU Visionary Techfest Hackathon</title>
            <position>Fourth Place 🏆</position>
            <organization>Vishwakarma University</organization>
            <year>2024</year>
        </item>
    </achievements>

    <skills>
        <languages>Python, Java, TypeScript, JavaScript</languages>
        <frameworks>FastAPI, Flask, React, Node.js, Django</frameworks>
        <ai_ml>PyTorch, Langchain, LangGraph, Hugging Face, OpenAI, Gemini, Stable Diffusion, ControlNet</ai_ml>
        <cloud>AWS (EC2, Lambda, SageMaker), GCP Cloud SQL, Docker, Nginx</cloud>
        <databases>MongoDB, PostgreSQL, MySQL, SQLite3, ChromaDB</databases>
        <tools>Git, OpenCV, MediaPipe, Apache Airflow</tools>
    </skills>

    <education>
        <college>D.Y.Patil College Of Engineering, Akurdi</college>
        <degree>Bachelor of Engineering in A.I.D.S</degree>
        <duration>2022-2026</duration>
        <cgpa>8.12</cgpa>
    </education>
</profile>
`;

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are an AI assistant for Piyush Choudhari's portfolio website. Be helpful, friendly, and provide detailed responses about Piyush's experience, skills, and projects.\n\nContext about Piyush:\n${CONTEXT}`,
        },
        ...messages.map(
          ({ role, content }: { role: string; content: string }) => ({
            role: role === "user" ? "user" : "assistant",
            content,
          })
        ),
      ],
      model: "meta-llama/llama-4-scout-17b-16e-instruct",
      temperature: 0.5,
    });

    return new Response(
      JSON.stringify({
        message:
          completion.choices[0]?.message?.content || "No response generated",
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: "Failed to generate response. Please try again.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
