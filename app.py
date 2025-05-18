import os
from flask import Flask, request, jsonify, render_template, send_from_directory
import google.generativeai as genai
from flask_cors import CORS

app = Flask(__name__, static_folder="static")
CORS(app)

# 🔒 Secure API Key Handling with immediate validation
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY environment variable is required")

genai.configure(api_key=api_key)
model = genai.GenerativeModel("models/gemini-1.5-flash")
chat = model.start_chat(history=[])

@app.route("/")
def home():
    """Serve the main index.html page"""
    return render_template("index.html")

@app.route("/static/<path:filename>")
def serve_static(filename):
    """Serve static files with proper security"""
    return send_from_directory(app.static_folder, filename)

@app.route('/ask', methods=['POST'])
def ask_ai():
    """
    Enhanced chatbot endpoint with:
    - Input validation
    - Error handling
    - Logging
    - Consistent JSON responses
    """
    # Validate request format
    if not request.is_json:
        return jsonify({
            "status": "error",
            "response": "Content-Type must be application/json",
            "code": 400
        }), 400

    # Parse and validate input
    data = request.get_json()
    user_input = data.get("question", "").strip()

    if not user_input:
        return jsonify({
            "status": "error",
            "response": "Question cannot be empty",
            "code": 400
        }), 400

    # Structured prompt template
    prompt = f"""
You are AbdulBot – a friendly expert full-stack developer based in India.
Specializing in helping clients realize digital products with:

✔ Requirement analysis
✔ Tech stack recommendations
✔ Timeline estimates
✔ Cost projections (INR ₹)
✔ Actionable next steps

Project Details:
\"\"\"
{user_input}
\"\"\"
"""

    try:
        # Get AI response
        response = chat.send_message(prompt)
        return jsonify({
            "status": "success",
            "response": response.text.strip(),
            "code": 200
        })
    
    except Exception as e:
        # Detailed error logging
        app.logger.error(f"AI processing failed: {str(e)}", exc_info=True)
        return jsonify({
            "status": "error",
            "response": "Service temporarily unavailable",
            "details": str(e) if app.debug else None,
            "code": 500
        }), 500

if __name__ == '__main__':
    # Configurable deployment settings
    port = int(os.getenv("PORT", 10000))
    debug = os.getenv("FLASK_DEBUG", "false").strip().lower() == "true"
    
    # Production optimizations
    if not debug:
        app.config.update(
            PROPAGATE_EXCEPTIONS=True,
            JSONIFY_PRETTYPRINT_REGULAR=False
        )

    app.run(
        host="0.0.0.0",
        port=port,
        debug=debug,
        use_reloader=debug
    )