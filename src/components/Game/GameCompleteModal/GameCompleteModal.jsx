import { useState, useEffect } from 'react';
import axios from 'axios';
import { getTodaysWord } from '../../../assets/wordList';
import ShareButton from './ShareButton';

function GameCompleteModal() {
    const [wordInfo, setWordInfo] = useState({});

    useEffect(() => {
        const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
        const getWordInfo = async () => {
            try {
                const response = await axios.get(baseUrl + getTodaysWord());
                setWordInfo({
                    phonetic: response.data[0].phonetic,
                    definition: response.data[0].meanings[0].definitions[0].definition
                });
            } catch (error) {
                console.error(error);
            }
        }

        getWordInfo();
    }, []);

    return (
        <div className="max-w-sm text-white m-auto">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Whurd of the Day</div>
                <div className='font-bold'>{getTodaysWord()}</div>
                <div className='italic text-sm text-gray-500'>{wordInfo.phonetic}</div>
                <div>{wordInfo.definition}</div>
            </div>
            <ShareButton />
        </div>
    )
}

export default GameCompleteModal;