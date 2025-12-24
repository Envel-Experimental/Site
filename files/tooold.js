function checkOSAge() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const userAgent = navigator.userAgent.toLowerCase();
  let osReleaseYear;

  // --- WINDOWS ---
  if (userAgent.includes("windows nt 10.0")) {
      return 0;
  } 
  else if (userAgent.includes("windows nt 5.1") || userAgent.includes("windows xp")) {
      osReleaseYear = 2006;
  } else if (userAgent.includes("windows nt 6.0")) {
      osReleaseYear = 2009;
  } else if (userAgent.includes("windows nt 6.1")) {
      osReleaseYear = 2012;
  } else if (userAgent.includes("windows nt 6.2")) {
      osReleaseYear = 2013;
  } else if (userAgent.includes("windows nt 6.3")) {
      osReleaseYear = 2015;
  }

  // --- MACOS ---
  else if (userAgent.includes("mac os x")) {
      // Если версия новее 10.11, считаем её актуальной
      if (!userAgent.includes("10.9") && !userAgent.includes("10.10") && !userAgent.includes("10.11")) {
          return 0; 
      }
      
      if (userAgent.includes("mac os x 10.9")) {
          osReleaseYear = 2014;
      } else if (userAgent.includes("mac os x 10.10")) {
          osReleaseYear = 2015;
      } else if (userAgent.includes("mac os x 10.11")) {
          osReleaseYear = 2016;
      }
  }

  // --- НЕИЗВЕСТНАЯ ИЛИ НЕПОДДЕРЖИВАЕМАЯ ---
  if (!osReleaseYear) {
      return -1;
  }

  // Считаем возраст для старых систем
  const age = currentYear - osReleaseYear;
  return age;
}

function updateOSMessage() {
  const osAge = checkOSAge();
  const messageElement = document.querySelector('.message');

  if (messageElement) {
      if (osAge === 0) {
           // Система новая, ничего не пишем или пишем "ОК"
           messageElement.textContent = "Ваша система поддерживается!";
           messageElement.style.color = "green";
      } else if (osAge === -1) {
          messageElement.textContent = `Вы используете неизвестную или неподдерживаемую систему.`;
      } else {
          messageElement.textContent = `Вы используете систему, устаревшую ${osAge} лет назад. Программа может не запуститься.`;
      }
  }
}

document.addEventListener('DOMContentLoaded', updateOSMessage);