(() => {
  const downloadBtn = document.getElementById('downloadBtn');
  const toastEl = document.getElementById('toast');

  const showToast = (msg) => {
    clearTimeout(toastEl._timer);
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    toastEl._timer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 2800);
  };

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      showToast('Starting download: qriova.apk');
    });
  }
})();
