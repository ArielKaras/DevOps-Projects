from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import subprocess

app = Flask(__name__)
# Enable CORS for all domains to allow Opal connection
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "ONLINE", "system": "IDX-Linux"})

@app.route('/execute', methods=['POST'])
def execute_command():
    try:
        # For security, currently hardcoded to list files.
        # Later we will accept dynamic commands.
        result = subprocess.check_output(['ls', '-la'], text=True, stderr=subprocess.STDOUT)
        return jsonify({"output": result})
    except subprocess.CalledProcessError as e:
        return jsonify({"output": e.output, "error": str(e)})

if __name__ == '__main__':
    print("Starting Server on port 5000...")
    app.run(host='0.0.0.0', port=5000)
