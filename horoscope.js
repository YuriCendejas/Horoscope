        const months = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
        const signs = ['Capricorn','Aquarius','Pisces','Aries','Taurus',
         'Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius'];

         function getRandomWord(wordsArray) {
            const index = Math.floor(
                Math.random() * (wordsArray.length)
            ); 
            return wordsArray[index];
         };

         for ( let i = 0 ; i < 2;i++) {
          const yourMonth = getRandomWord(months);
          const yourSign = getRandomWord(signs);

          const notYourStars = `${yourMonth} ${yourSign}`;
          console.log(notYourStars);
         }




