"use client";

import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      // English
      // "No",
      // "Are you sure??🙄",
      // "Really sure?🤔",
      // "Are you positive???😶",
      // "Please my love...🙏",
      // "Just think about it🥺",
      // "If you say no, I'll be very sad🙁",
      // "I'll be very very sad😕",
      // "I'll be very very very sad😓",
      // "I'll be very very very very sad😖",
      // "Ok fine😡, I'll stop asking...",
      // "Just kidding, PLEASE SAY YES🙏",
      // "I'll be very very very very very sad🥴",
      // "You're breaking my heart😥😥😥",
      
      // Vietnamese
      "Нет",
      "Ты уверена?",
      "А если я хорошо попрошу?",
      "Пожалуйста",
      "Куплю покушать",
      "Попить?",
      "ААААА Пожалуйста, умоляю",
      "Но..... :*(",
      "Спрыгну с 10-го этажа",
      "Ладно я умер",
      "Разговариваешь с моим призраком",
      "ААААААААААА",
      ":((((",
      "Еще раз подумай",
      ".....",
      "Да или да? :(",
      "НЕТ???, пожалуйста ДА :((",
      "Либо ДА или ДА))))",
      "Все ровно ДА",
      "Я плачу ;(((((",
      ";(((((((",

    ];

    return phrases[noCount % phrases.length];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <img src="https://1.bp.blogspot.com/-jRienZ4Hk8w/XxA1gwv7LsI/AAAAAAAAXtg/9KRMrGR6YpYpxH5Zmyh6gSsBINb89hNrACLcBGAsYHQ/s1600/download%2B-%2B2020-07-16T180935.058.gif" />
          <div className="text-[2rem] font-bold text-center leading-tight md:text-5xl md:leading-snug bg-gradient-to-r from-green-600 via-yellow-600 to-red-600 inline-block text-transparent bg-clip-text">
            {/* Thanks! Ok yay */}
            РЕАЛЬНО????!!! ПАСИБООООО...Я ПЛАЧУ!!
          </div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-[2rem] text-center leading-tight md:text-5xl md:leading-snug bg-gradient-to-r from-green-600 via-yellow-600 to-red-600 inline-block text-transparent bg-clip-text">
            {/* Will you be my Valentine? */}
            Пойдешь со мной куда-то?
          </h1>
          <div className="text-center space-y-5">
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              {/* Yes */}
              ДА
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? 
                // "No" 
                "НЕТ 😥"
                : getNoButtonText()
              }
            </button>
          </div>
        </>
      )}
    </div>
  );
}
