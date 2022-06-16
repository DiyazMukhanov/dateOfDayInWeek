function findDayOfThisWeek(dayIndex) {
     const date = new Date();
     const day = date.getDay();
     const diff = date.getDate() - day + dayIndex;
     const requiredDate = new Date(date.setDate(diff));
     const stringifiedDate = requiredDate.toDateString();
     const splittedStr = stringifiedDate.split(' ');
     const weekDayInSplStr = splittedStr[0];
     let weekDayInRu;
     switch(weekDayInSplStr) {
         case 'Mon': 
         weekDayInRu = 'Понедельник';
         break;
         case 'Tue': 
         weekDayInRu = 'Вторник';
         break;
         case 'Wed': 
         weekDayInRu = 'Среда';
         break;
         case 'Thu': 
         weekDayInRu = 'Четверг';
         break;
         case 'Fri': 
         weekDayInRu = 'Пятница';
         break;
         case 'Sat': 
         weekDayInRu = 'Суббота';
         break;
         case 'Sun': 
         weekDayInRu = 'Воскресенье';
         break;
         default:
            weekDayInRu = 'Ошибка';
     }

     const monthInSplStr = splittedStr[1];
     const monthsEn = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
     const monthRuArr = ['Декабря', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября'];
     let indexOfMonInStr;
     monthsEn.map((date, i) => {
         if(date == monthInSplStr) {
            indexOfMonInStr = i;
         }
     })

     const monthRu = monthRuArr[indexOfMonInStr];
     const dateDay = splittedStr[2]
     const dateString = `${weekDayInRu} ${dateDay} ${monthRu}`;
     return dateString;
    }
