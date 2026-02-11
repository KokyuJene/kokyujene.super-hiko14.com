  document.getElementById("year").textContent = new Date().getFullYear();

  fetch('https://script.google.com/macros/s/AKfycbydDLtlQTxlvrm2t9eH0jqs01awiKKPn23kOknQ44eF095C2rm1ZjABGZG-2obDKW1T/exec')
    .then(res => res.json())
    .then(data => {
      document.getElementById('count').innerText = data.count + '';
    })
    .catch(err => {
      document.getElementById('count').innerText = '取得失敗';
      console.error(err);
    });
    
// kento!
window.addEventListener('load', () => {

  function spawnHiddenImage() {
    const img = document.createElement('img');
    img.src = 'https://kokyujene.github.io/images/hidden.webp';
    img.className = 'hidden-image';
    img.style.position = 'fixed';
    img.style.zIndex = 9999;
    img.style.cursor = 'pointer';
    img.style.transition = 'all 1s ease';

    // 画面サイズに応じて大きさを調整
    if (window.innerWidth > 1024) { 
      img.style.width = '25px';
      img.style.height = '25px';
    } else {
      img.style.width = '10px';
      img.style.height = '10px';
    }

    // ランダムな左右配置と高さ
    const side = Math.random() < 0.5 ? 'left' : 'right';
    const y = Math.random() * (window.innerHeight - parseInt(img.style.height) - 40) + 20;

    img.style.top = `${y}px`;
    if (side === 'left') {
      img.style.left = '10px';
      img.style.right = '';
    } else {
      img.style.right = '10px';
      img.style.left = '';
    }

    document.body.appendChild(img);

    // クリック時の処理
    img.addEventListener('click', () => {
      const sound = new Audio('https://kokyujene.github.io/sounds/success.ogg');
      sound.play();

      // アニメーション
      img.style.transform = 'scale(3) rotate(720deg)';
      img.style.opacity = 0;

      // 削除して10秒後に再出現
      setTimeout(() => {
        img.remove();
        setTimeout(spawnHiddenImage, 10000); // 10秒後に新たに出現
      }, 1000);
    });
  }

  // 最初の1回生成
  spawnHiddenImage();
});

  const themeIcon = document.getElementById('theme-icon');
  const userTheme = localStorage.getItem('theme');

  function applyTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    themeIcon.src = isDark ? 'https://kokyujene.github.io/v6_karis/images/sun.webp' : 'https://kokyujene.github.io/v6_karis/images/moon.webp';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  if (userTheme === 'dark') {
    applyTheme(true);
  } else {
    applyTheme(false);
  }

  // クリックで切り替え
  themeIcon.addEventListener('click', () => {
    const isNowDark = !document.documentElement.classList.contains('dark');
    applyTheme(isNowDark);
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  function goBack() {
    if (document.referrer.includes("kokyujene.github.io")) {
      history.back();
    } else {
      window.location.href = "https://kokyujene.github.io/";
    }
  }

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const mobileMenu = document.getElementById("mobileMenu");
  const headerIconMenu = document.querySelector(".header-icon-menu");

  function openMenu() {
    mobileMenu.classList.add("active");
    document.body.classList.add("menu-open");
    menuIcon.classList.add("hidden");
    closeIcon.classList.add("show");
    menuIcon.setAttribute("aria-hidden", "true");
    closeIcon.setAttribute("aria-hidden", "false");
  }

  function closeMenu() {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.remove("show");
    menuIcon.setAttribute("aria-hidden", "false");
    closeIcon.setAttribute("aria-hidden", "true");
  }

  menuIcon.addEventListener("click", openMenu);
  closeIcon.addEventListener("click", closeMenu);

  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      closeMenu();
    }
  });
});