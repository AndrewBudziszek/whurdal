import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { getTodaysWord } from '../assets/wordList';
import ShareButton from './ShareButton';

function GameCompleteModal() {
    const [wordInfo, setWordInfo] = useState({});

    useEffect(() => {
        const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
        const getWordInfo = async () => {
            try {
                const response = await axios.get(baseUrl + getTodaysWord());
                setWordInfo(response.data[0]);
            } catch(error) {
                console.error(error);
            }
        }

        getWordInfo();
    }, []);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-white max-w-screen-sm m-auto border-2">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Whurd of the Day</div>
                <div className='font-bold'>{getTodaysWord()}</div>
                <div className='text-sm text-gray-500'>{wordInfo.phonetic}</div>
                <div>{wordInfo.meanings[0].definitions[0].definition}</div>
            </div>
            <ShareButton />
        </div>
    )
}

export default GameCompleteModal;