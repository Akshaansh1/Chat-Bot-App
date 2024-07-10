from flask import Flask, request, jsonify
from flask_cors import CORS  
from langchain_huggingface import HuggingFaceEndpoint
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)  

load_dotenv()

os.environ['HUGGINGFACE_API_TOKEN'] = os.getenv("sec")

repo_id = "mistralai/Mistral-7B-Instruct-v0.3"
llm = HuggingFaceEndpoint(repo_id=repo_id, max_length=200, temperature=0.7, token=os.getenv("sec"))

@app.route('/api/generate', methods=['POST'])
def generate_text():
    data = request.json
    if 'input' not in data:
        return jsonify({'error': 'Input not provided'}), 400
    
    input_text = data['input']
    
    try:
        response = llm.invoke(input_text + "?")
        return jsonify({'result': response}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
