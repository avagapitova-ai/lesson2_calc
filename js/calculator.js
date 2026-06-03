/*
  Логика калькулятора семейного бюджета.
  Считает доходы, расходы, остаток и даёт текстовую рекомендацию.
*/

function getValue(id) {
  return Number(document.getElementById(id).value) || 0;
}

function formatMoney(amount) {
  return amount.toLocaleString('ru-RU') + ' ₽';
}

function calculateBudget() {
  const income =
    getValue('salary1') +
    getValue('salary2') +
    getValue('extraIncome');

  const expenses =
    getValue('rent') +
    getValue('utilities') +
    getValue('loans') +
    getValue('education') +
    getValue('food') +
    getValue('transport') +
    getValue('health') +
    getValue('entertainment');

  const balance = income - expenses;
  let savingPercent = 0;

  if (income > 0) {
    savingPercent = Math.round((balance / income) * 100);
  }

  document.getElementById('totalIncome').textContent = formatMoney(income);
  document.getElementById('totalExpenses').textContent = formatMoney(expenses);
  document.getElementById('balance').textContent = formatMoney(balance);
  document.getElementById('savingPercent').textContent = savingPercent + '%';

  const adviceText = document.getElementById('adviceText');

  if (income === 0) {
    adviceText.textContent =
      'Введите хотя бы один источник дохода, чтобы получить корректный расчёт.';
    adviceText.className = 'advice warning';
  } else if (balance < 0) {
    adviceText.textContent =
      'Расходы превышают доходы. Стоит пересмотреть необязательные траты или найти способ увеличить доход.';
    adviceText.className = 'advice negative';
  } else if (savingPercent < 10) {
    adviceText.textContent =
      'Бюджет в плюсе, но запас небольшой. Желательно стремиться откладывать хотя бы 10–20% дохода.';
    adviceText.className = 'advice warning';
  } else if (savingPercent <= 30) {
    adviceText.textContent =
      'Хороший результат. У семьи остаётся комфортный запас для накоплений и непредвиденных расходов.';
    adviceText.className = 'advice positive';
  } else {
    adviceText.textContent =
      'Отличный результат. У вас высокий потенциал для накоплений, инвестиций или крупных финансовых целей.';
    adviceText.className = 'advice positive';
  }

  document.getElementById('resultBlock').style.display = 'block';
}

function resetCalculator() {
  document.querySelectorAll('.budget-calculator input').forEach(function (input) {
    input.value = '';
  });
  document.getElementById('resultBlock').style.display = 'none';
}
