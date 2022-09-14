const btn = document.querySelector('.start-game');

function getMonthByNumber() {
    let monthNumber = Number(prompt('Введите число'));
    if (monthNumber > 0 && monthNumber <= 2 || monthNumber === 12) {
      alert('Зима');
      return;
    }
    else if (monthNumber > 2 && monthNumber <= 5) {
      alert('Весна');
      return;
    }
    else if (monthNumber > 5 && monthNumber <= 8) {
      alert('Лето');
      return;
    }
    else if (monthNumber > 8 && monthNumber <= 11) {
      alert('Осень');
      return;
    }
    
     else {
       alert('Неверный результат');
      
    }
    
  }