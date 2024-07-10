import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineDoubleRight } from "react-icons/ai";

const Search = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/generate', { input: inputText });
      setOutputText(response.data.result); 
      setError('');
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="relative mt-40">
          <input
            type='text'
            className="border border-gray-100/50 p-3 rounded-lg bg-[#024950] w-[600px] text-white text-lg pl-10"
            placeholder={'Ask The ChatBot '}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={handleSearch}
          >
            <AiOutlineDoubleRight className="text-white" />
          </div>
        </div>
        <div className="mt-4">
          <textarea
            className="border border-gray-300 p-3 rounded-lg w-[600px] h-[300px] resize-none bg-[#024950] text-white text-lg"
            placeholder="Response..."
            value={outputText}
            readOnly
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Search;
