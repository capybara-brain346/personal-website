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
            <item>Built media generation pipelines using Stable Diffusion models and RunwayML, OpenCV integration, and ElevenLabs for voiceovers.</item>
            <item>Worked on state-of-the-art text-to-video models and depth-based cinematic motion effects.</item>
            <item>Built graph-based generative agents using LangGraph and fine-tuned LLaMA and OpenAI models.</item>
            <item>Developed semantic matching pipelines with BERT, LLaMA 2, TrOCR-based OCR.</item>
            <item>Trained object detection models (YOLOv8, YOLOv11, MobileNetV2) for AR filters using Snap Lens Studio.</item>
            <item>Deployed scalable APIs using Flask, AWS Lambda, SageMaker, and PostgreSQL.</item>
        </responsibilities>
    </experience>
    
    <projects>
        <project>
            <name>AtjBot</name>
            <description>RAG chatbot for the Department of Justice India website using LangChain, ChromaDB, and Google Generative AI.</description>
            <github>https://github.com/capybara-brain346/atjbot</github>
        </project>
        <project>
            <name>RecycleNet18</name>
            <description>Recyclable item image classification (ResNet18) + fine-tuned Gemma-1.1-2b chatbot for recycling advice.</description>
            <github>https://github.com/capybara-brain346/RecycleNet18</github>
            <demo>https://www.youtube.com/watch?v=K3wz3cSf9is</demo>
        </project>
        <project>
            <name>SAP Stocks</name>
            <description>Financial news sentiment analysis platform using LangChain RAG, Gemini-1.5-Flash, and finBERT.</description>
            <github>https://github.com/capybara-brain346/SAP-Stock</github>
        </project>
    </projects>
    
    <volunteering>
        <activity>
            <organization>Intel AI Students Club</organization>
            <role>AIML Team Lead</role>
            <projects>
                <item>Gesture-based TicTacToe using OpenCV and MediaPipe with AI opponent.</item>
                <item>AI Dungeon Master DnD game using Gemini LLM, FastAPI, and Streamlit.</item>
            </projects>
        </activity>
    </volunteering>

    <skills>
        <languages>Python, Java, SQL, JavaScript, Bash</languages>
        <ai_models>Stable Diffusion (SDXL, RealVisXL_V5.0_Lightning, DreamShaper, Flux1, epicRealism), AnimeDiff, DynamicCrafter, Step-Video T2V</ai_models>
        <tools>OpenCV, DepthFlow, RunwayML, FreePic, LangGraph, LangChain, Hugging Face Transformers, OpenAI SDKs, Gemini SDKs, SentencePiece</tools>
        <api_development>FastAPI, Flask, Django, REST APIs</api_development>
        <cloud_services>AWS (Lambda, SageMaker, API Gateway, S3), Docker, Render, Vercel</cloud_services>
        <databases>PostgreSQL, MySQL, MongoDB, SQLite3, ChromaDB</databases>
        <devops>GitHub Actions, Docker Compose</devops>
        <platforms>Snap Lens Studio, RoboFlow, ElevenLabs, Git, GitHub, Streamlit, Gradio</platforms>
    </skills>

    <achievements>
        <item>1st Rank - Software Category at SIH Internal Hackathon</item>
        <item>2nd Rank - Data Visualization Hackathon, ISA Club, D.Y.Patil College</item>
        <item>4th Rank - Visionary Hackathon, Vishwakarma University & Binghamton University</item>
    </achievements>

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
