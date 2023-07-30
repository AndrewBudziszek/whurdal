import { useState, useEffect } from 'react';
import axios from 'axios';
import { getNonSowpodsDefinition, getTodaysWord, Definition } from '../../../assets/wordList';
import ShareButton from './ShareButton';
import { nonSowpodsAcceptedWords } from '../../../assets/wordList';
import HeartIcon from '@heroicons/react/solid/HeartIcon';


function GameCompleteModal() {
  const [wordInfo, setWordInfo] = useState<Definition>();

  useEffect(() => {
    const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
    const getWordInfo = async () => {
      try {
        if (nonSowpodsAcceptedWords.includes(getTodaysWord())) {
          const definition: Definition | null = getNonSowpodsDefinition(getTodaysWord());

          setWordInfo({
            phonetic: definition?.phonetic ?? '',
            definition: definition?.definition ?? ''
          });
        } else {
          const response = await axios.get(baseUrl + getTodaysWord());

          setWordInfo({
            phonetic: response.data[0].phonetic,
            definition: response.data[0].meanings[0].definitions[0].definition
          });
        }
      } catch (error) {
        const definition: Definition | null = getNonSowpodsDefinition(getTodaysWord());

        if (definition) {
          setWordInfo({
            phonetic: definition.phonetic,
            definition: definition.definition
          });
        }
      }
    }

    getWordInfo();
  }, []);

  const buttonClassName = 'hover:text-green-700'
  const iconClassName = 'h-5 w-9 sm:h-8 sm:w-11'


  return (
    <>
      {wordInfo &&
        <>
          <div className="max-w-sm text-white m-auto">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Whurd of the Day</div>
              <div className='font-bold'>{getTodaysWord()}</div>
              <div className='italic text-sm text-gray-500'>{wordInfo?.phonetic}</div>
              <div>{wordInfo?.definition}</div>
            </div>
            <ShareButton />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            color: 'white',
            marginTop: '1rem'
          }}>
            <button className={buttonClassName} onClick={() => { window.open('https://www.buymeacoffee.com/SonBrooks', '_blank') }} style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              Support <HeartIcon className={iconClassName} />
            </button>
          </div>
        </>
      }
    </>
  )
}

export default GameCompleteModal;