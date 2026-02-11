const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 動きの加減速
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

function switchTab(element, index) {
  const tabs = document.querySelectorAll('.tab-item');
  tabs.forEach(tab => tab.classList.remove('active'));
  element.classList.add('active');

  const menu = document.querySelector('.tab-menu');
  const indicator = document.querySelector('.tab-indicator');

  // 親要素（menu）とクリックされた要素（element）の正確な位置関係を計算
  const menuRect = menu.getBoundingClientRect();
  const elemRect = element.getBoundingClientRect();

  // 親要素の左端と上端からの距離を算出（これでズレません）
  const leftPos = elemRect.left - menuRect.left;
  const topPos = elemRect.bottom - menuRect.top - 3; // 3pxはインジケーターの高さ

  indicator.style.width = elemRect.width + 'px';
  indicator.style.left = leftPos + 'px';
  indicator.style.top = topPos + 'px';

  // コンテンツの切り替え
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));
  if (contents[index]) {
    contents[index].classList.add('active');
  }
}

// 初期化：すべての読み込み（画像やフォント）が終わってから実行
window.addEventListener('load', () => {
  const activeTab = document.querySelector('.tab-item.active');
  if (activeTab) {
    // 最初の実行。念のため少しだけ待機
    setTimeout(() => {
      switchTab(activeTab, 0);
    }, 50);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.toggle-head');

  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      // ボタンの親要素から見て、次にあるコンテナを探す
      const container = btn.parentElement.querySelector('.naiyou-container');
      const arrow = btn.querySelector('.yajirusi');

      if (container) {
        container.classList.toggle('open');
      }
      if (arrow) {
        arrow.classList.toggle('open');
      }
    });
  });
});