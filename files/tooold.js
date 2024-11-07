function checkOSAge() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const userAgent = navigator.userAgent.toLowerCase();
    let osReleaseYear;
  
    // Проверка для Windows (с устареванием после следующей версии ОС)
    if (userAgent.includes("windows nt 5.1") || userAgent.includes("windows xp")) {
      // Windows XP устарела с выходом Windows Vista (2006)
      osReleaseYear = 2006;
    } else if (userAgent.includes("windows nt 6.0")) {
      // Windows Vista устарела с выходом Windows 7 (2009)
      osReleaseYear = 2009;
    } else if (userAgent.includes("windows nt 6.1")) {
      // Windows 7 устарела с выходом Windows 8 (2012)
      osReleaseYear = 2012;
    } else if (userAgent.includes("windows nt 6.2")) {
      // Windows 8 устарела с выходом Windows 8.1 (2013)
      osReleaseYear = 2013;
    } else if (userAgent.includes("windows nt 6.3")) {
      // Windows 8.1 устарела с выходом Windows 10 (2015)
      osReleaseYear = 2015;
    }

    // Проверка для macOS (с устареванием после следующей версии)
    else if (userAgent.includes("mac os x")) {
      if (userAgent.includes("mac os x 10.9")) {
        // OS X Mavericks устарела с выходом OS X Yosemite (2014)
        osReleaseYear = 2014;
      } else if (userAgent.includes("mac os x 10.10")) {
        // OS X Yosemite устарела с выходом OS X El Capitan (2015)
        osReleaseYear = 2015;
      } else if (userAgent.includes("mac os x 10.11")) {
        // OS X El Capitan устарела с выходом macOS Sierra (2016)
        osReleaseYear = 2016;
      }
    }

    // Если не удалось определить ОС, предполагаем, что она устарела 10 лет назад
    if (!osReleaseYear) {
      osReleaseYear = currentYear - 10;
    }
  
    // Возвращаем количество лет с момента выхода следующей версии ОС
    return currentYear - osReleaseYear;
}
  
// Обновляем сообщение на странице в зависимости от возраста ОС
function updateOSMessage() {
    const osAge = checkOSAge();
    const messageElement = document.querySelector('.message');
  
    if (messageElement) {
      messageElement.textContent = `Вы используете операционную систему, устаревшую ${osAge} лет назад. Скорее всего, программу запустить не удасться.`;
    }
}
  
// Ждем загрузки контента и обновляем сообщение
document.addEventListener('DOMContentLoaded', updateOSMessage);
