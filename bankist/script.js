'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

const account1 = {
  owner: 'Ram Kumar',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-IN', //
};

const account2 = {
  owner: 'Hari Ram',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//FORMATTING THE CURRENCIES
const formatCur = function (value, locale, currency) {
  const options = {
    style: 'currency',
    currency: currency,
  };

  return new Intl.NumberFormat(locale, options).format(value);
};

//TIME OUT FUNCTION
const setTimer = function () {
  let limit = 300;
  const timer = function () {
    const min = String(Math.trunc(limit / 60)).padStart(2, 0);
    const sec = String(limit % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    if (limit === 0) {
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
      clearInterval(timer);
    }

    limit--;
  };
  timer();

  return setInterval(timer, 1000);
};

//DISPLAYING THE TRANSACTION MOVEMENTS
const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';
  const movementAndDates = account.movements.map((mov, i) => {
    return { movement: mov, movementDate: account.movementsDates.at(i) };
  });

  if (sort) {
    movementAndDates.sort((a, b) => a.movement - b.movement);
  }

  for (const [i, { movement, movementDate }] of movementAndDates.entries()) {
    const date = new Date(movementDate);

    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    const displayDate = new Intl.DateTimeFormat(account.locale, options).format(
      date
    );
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const formattedMov = formatCur(movement, account.locale, account.currency);
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }  ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}
          </div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  }
};

//TOTAL BALANCE
const displayBalance = function (account) {
  const date = new Date();

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const displayDate = new Intl.DateTimeFormat(account.locale, options).format(
    date
  );

  labelDate.textContent = displayDate;
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCur(
    account.balance,
    account.locale,
    account.currency
  )}`;
};

//DISPLAYING SUMMARIES
const calcDisplaySummeries = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  const withdraw =
    -1 *
    account.movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur, 0);
  //interest is paid on each deposit lets say 1.2%
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (account.interestRate / 100))
    .reduce((acc, cur) => acc + cur, 0);

  labelSumIn.textContent = `${formatCur(
    incomes,
    account.locale,
    account.currency
  )}`;
  labelSumOut.textContent = `${formatCur(
    withdraw,
    account.locale,
    account.currency
  )}`;
  labelSumInterest.textContent = `${formatCur(
    interest,
    account.locale,
    account.currency
  )}`;
};

//CREATING USER NAMES FOR ACCOUT OWNER
const createUserName = function (account) {
  account.userName = account.owner
    .toLowerCase()
    .split(' ')
    .map(x => x[0])
    .join('');
  return account.userName;
};
accounts.forEach(createUserName);

//update ui
const updateUI = function (account) {
  displayMovements(account);
  calcDisplaySummeries(account);
  displayBalance(account);
};

//LOGIN HANDLING
let currentUser, timer;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentUser = accounts.find(
    account => account.userName === inputLoginUsername.value
  );
  if (currentUser?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `welcome back , ${
      currentUser.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;
    console.log(timer);
    if (timer) clearInterval(timer);
    timer = setTimer();
    console.log(timer);
    updateUI(currentUser);
  } else {
    labelWelcome.textContent = 'Enter valid credentials!!';
    containerApp.style.opacity = 0;
  }
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
  inputLoginPin.blur();
  inputLoginUsername.blur();
});

//IMPLEMENTING TRANSFER
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiver = accounts.find(acc => acc.userName === inputTransferTo.value);
  if (
    amount > 0 &&
    amount <= currentUser.balance &&
    receiver &&
    currentUser.userName !== receiver.userName
  ) {
    currentUser.movements.push(-amount);
    receiver.movements.push(amount);
    currentUser.movementsDates.push(new Date().toISOString());
    receiver.movementsDates.push(new Date().toISOString());
    updateUI(currentUser);
    clearInterval(timer);
    timer = setTimer();
  }
  inputTransferTo.value = '';
  inputTransferAmount.value = '';
});

//Implementing loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loan = Number(inputLoanAmount.value);
  const approve = currentUser.movements.some(mov => mov >= loan * 0.1);
  if (loan > 0 && approve) {
    setTimeout(function () {
      currentUser.movements.push(loan);
      currentUser.movementsDates.push(new Date().toISOString());
      updateUI(currentUser);
    }, 3000);
    clearInterval(timer);
    timer = setTimer();
  }
  inputLoanAmount.value = '';
});

//CLOSE ACCOUNT
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentUser.userName &&
    Number(inputClosePin.value) === currentUser.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentUser.userName
    );
    //removing account
    accounts.splice(index, 1);
    //log out
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
    clearInterval(timer);
  }
  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

//SORTING THE TRANSCATIONS
let toSort = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentUser, !toSort);
  toSort = !toSort;
});
