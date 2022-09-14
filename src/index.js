const btn = document.querySelector('.start-game');

function getMonth() {
    let num = Number(prompt('Введите число'));
    if (num > 0 && num <= 2 || num === 12) {
      alert('Зима');
      return;
    }
    else if (num > 2 && num <= 5) {
      alert('Весна');
      return;
    }
    else if (num > 5 && num <= 8) {
      alert('Лето');
      return;
    }
    else if (num > 8 && num <= 11) {
      alert('Осень');
      return;
    }
    
     else {
       alert('Неверный результат');
      
    }
    
  }