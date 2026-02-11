  //20XX
  document.getElementById("year").textContent = new Date().getFullYear();

  //総訪問回数
  fetch('https://script.google.com/macros/s/AKfycbydDLtlQTxlvrm2t9eH0jqs01awiKKPn23kOknQ44eF095C2rm1ZjABGZG-2obDKW1T/exec')
    .then(res => res.json())
    .then(data => {
      document.getElementById('count').innerText = data.count + '';
    })
    .catch(err => {
      document.getElementById('count').innerText = '取得失敗';
      console.error(err);
    });
    
  //kento!
window.addEventListener('load', () => {

  const img = document.createElement('img');
  img.src = 'https://kokyujene.github.io/images/hidden.webp';
  img.className = 'hidden-image';
  img.style.position = 'fixed';
  img.style.zIndex = 9999;
  img.style.cursor = 'pointer';

  // 画面サイズに応じて画像サイズを変更
  if (window.innerWidth > 1024) { 
    img.style.width = '25px';
    img.style.height = '25px';
  } else {
    img.style.width = '10px';
    img.style.height = '10px';
  }

  // ランダムに左右どちらかを選ぶ
  const side = Math.random() < 0.5 ? 'left' : 'right';
  const y = Math.random() * (window.innerHeight - parseInt(img.style.height) - 40) + 20; // 上下に少し余裕

  img.style.top = `${y}px`;

  if (side === 'left') {
    img.style.left = '10px';
    img.style.right = '';
  } else {
    img.style.right = '10px';
    img.style.left = '';
  }

  document.body.appendChild(img);

  // クリック時の演出
  img.addEventListener('click', () => {
    const sound = new Audio('https://kokyujene.github.io/sounds/success.ogg');
    sound.play();
    img.style.transition = 'all 1s ease';
    img.style.transform = 'scale(3) rotate(720deg)';
    img.style.opacity = 0;
    setTimeout(() => img.remove(), 1000);
  });
});

  const themeIcon = document.getElementById('theme-icon');
  const userTheme = localStorage.getItem('theme');

  function applyTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    themeIcon.src = isDark ? 'https://kokyujene.github.io/images/sun.webp' : 'https://kokyujene.github.io/images/moon.webp';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  // 初期状態
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

  const glitchImg = document.getElementById('glitchImage');

  glitchImg.addEventListener('mouseenter', () => {
    glitchImg.src = 'images/glitch_animation.gif'; // バグ風アニメGIFに切替
  });

  glitchImg.addEventListener('mouseleave', () => {
    glitchImg.src = 'images/glitch_static.webp'; // 静止状態に戻す
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  function goBack() {
    // 前のページが同じドメインなら戻る
    if (document.referrer.includes("kokyujene.github.io")) {
      history.back();
    } else {
      // 外部サイトから来た場合はホームに戻す
      window.location.href = "https://kokyujene.github.io/";
    }
  }

