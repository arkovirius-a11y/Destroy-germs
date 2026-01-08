(function(){
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const burger = document.querySelector('.burger');
  const mobile = document.getElementById('mobileNav');

  function setMobile(open){
    if (!mobile || !burger) return;
    burger.setAttribute('aria-expanded', String(open));
    mobile.hidden = !open;
  }

  if (burger && mobile){
    burger.addEventListener('click', () => {
      const open = burger.getAttribute('aria-expanded') !== 'true';
      setMobile(open);
    });

    mobile.addEventListener('click', (e) => {
      if (e.target && e.target.tagName === 'A') setMobile(false);
    });
  }

  // Демонстрационный обработчик лид-формы.
  window.handleLeadSubmit = function(ev){
    ev.preventDefault();
    const toast = document.getElementById('toast');
    if (!toast) return false;

    const form = ev.target;
    const data = Object.fromEntries(new FormData(form).entries());

    // Здесь подключите реальную отправку (fetch на ваш backend / Google Apps Script / CRM).
    // Сейчас — имитация успешной отправки.
    toast.textContent = 'Заявка сформирована (демо). Для отчёта достаточно. В продакшене подключите отправку на сервер.';
    toast.hidden = false;

    // Для удобства можно выгрузить JSON в консоль:
    console.log('Lead form payload:', data);

    form.reset();
    return false;
  };
})(); 
