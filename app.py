import os
from flask import Flask, request, jsonify, render_template
import google.generativeai as genai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Gemini config
genai.configure(api_key="AIzaSyBHuqzNGEA_qLWcfKYD3VPxcFdkPb_cXos")
model = genai.GenerativeModel("models/gemini-1.5-flash")
chat = model.start_chat(history=[])

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/ask', methods=['POST'])
def ask_ai():
    data = request.json
    user_input = data.get("question", "")

    prompt = f"""
You are AbdulBot – a friendly, expert-level freelance full-stack web developer based in India.  
You help potential clients plan and execute digital product ideas with efficiency and quality.

When a user shares a project idea, respond as a **consultant**, covering:
✅ Clearly interpreting their idea & defining key features  
✅ Recommending the **best tech stack** for scalability & performance  
✅ Suggesting **relevant AI, APIs, or cloud services**  
✅ Estimating a **realistic timeline** for development  
✅ Providing a **rough cost range in INR ₹**, based on market rates  
✅ Offering **next steps or a clear call to action**  

Keep it:  
- **Clear & Insightful** (Client should understand everything easily)  
- **Encouraging & Confident** (You're an expert, guide them well)  
- **Slightly casual but professional** (Make them feel comfortable)  

User's project idea:  
\"\"\"  
{user_input}  
\"\"\"
"""

    try:
        response = chat.send_message(prompt)
        return jsonify({"response": response.text.strip()})
    except Exception as e:
        return jsonify({"response": f"Error: {str(e)}"}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 10000))  # Default to port 10000 if not specified
    app.run(host="0.0.0.0", port=port, debug=True)