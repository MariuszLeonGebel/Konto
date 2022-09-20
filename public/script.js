const amount = document.querySelector(".form-control");
const balance = document.querySelector(".balance");
const btnIn = document.querySelector(".btn-success");
const btnOut = document.querySelector(".btn-danger");
const btnPut = document.querySelector(".btn-info");
const feedbackList = document.querySelector('.feedbacks');
const badgeLetter = document.querySelector('feedback__letter')
let badgeLetters = "";
let maxId = 0;

// GET
const getTransactions = () => {
  fetch('./data.json').then(res => {
  return res.json();
}).then(data => {
  console.log(data.transactions)
})
}

// GET MAX ID
const getMaxId = () => {
  let maxIdArray = [];
  fetch('./data.json').then(res => {
  return res.json();
}).then(data => {
  console.log(data.transactions);
  data.transactions.forEach(item => {
    maxIdArray.push(item.id)
  })
  maxId = Math.max(...maxIdArray);
  console.log(`MaxID: ${maxId}`);
})
}

//OBIEKT: TRANSAKCJA POST
const transactionItemPost = {
  id: 3,
  transactionType: "WY",
  transactionAmount: 23300,
  transactionDate: "2022-09-04"
}

//OBIEKT: TRANSAKCJA PUT
const transactionItemPut = {
  id: 1,
  transactionType: "WY",
  transactionAmount: 10000,
  transactionDate: "2019-08-01"
}

//PUT
const putTransaction = () => {
  fetch('/data', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transactionItemPut)
  }).then(response => {
    if(!response.ok) {
      console.log('Something went wrong (PUT transaction)');
      return;
    } 
      console.log("PUT successfully submitted")
      getTransactions();
  }).catch(error => console.log(error));
}

//POST
const postTransaction = () => {
  fetch('/data', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transactionItemPost)
  }).then(response => {
    if(!response.ok) {
      console.log('Something went wrong');
      return;
    } 
      console.log("POST successfully submitted")
      getTransactions();
  }).catch(error => console.log(error));
}

//PRZYCISKI
const testIn = () => {
  getMaxId();
}
btnIn.addEventListener("click", testIn)

const testOut = () => {
  postTransaction();
}
btnOut.addEventListener("click", testOut)

const testPut = () => {
  putTransaction();
}
btnOut.addEventListener("click", testPut)




//PRZYKŁADOWE ZAPISY "NA SZTYWNO" DO PRACY NAD CSS
badgeLetters = "WY"
const feedbackItemHTML = `
<li class="feedback">

<section class="feedback__badge feedback__letter-color-red">
    <p class="feedback__letter">${badgeLetters}</p>
</section>
<div class="feedback__content">
    <p class="feedback__company">WYPŁATA</p>
    <p class="feedback__text">360,00</p>
</div>
<p class="feedback__date">15-08-2022</p>
</li>
`;

// insert new feedback item into classList
feedbackList.insertAdjacentHTML('afterbegin', feedbackItemHTML);

badgeLetters = "WP"
const feedbackItemHTML1 = `
<li class="feedback">

<section class="feedback__badge feedback__letter-color-green">
    <p class="feedback__letter">${badgeLetters}</p>
</section>
<div class="feedback__content">
    <p class="feedback__company">WPŁATA</p>
    <p class="feedback__text">2000,00</p>
</div>
<p class="feedback__date">22-09-2022</p>
</li>
`;

// insert new feedback item into classList
feedbackList.insertAdjacentHTML('afterbegin', feedbackItemHTML1);

badgeLetters = "WP"
const feedbackItemHTML2 = `
<li class="feedback">

<section class="feedback__badge feedback__letter-color-green">
    <p class="feedback__letter">${badgeLetters}</p>
</section>
<div class="feedback__content">
    <p class="feedback__company">WPŁATA</p>
    <p class="feedback__text">600,00</p>
</div>
<p class="feedback__date">20-09-2022</p>
</li>
`;

// insert new feedback item into classList
feedbackList.insertAdjacentHTML('afterbegin', feedbackItemHTML2);

badgeLetters = "WY"
const feedbackItemHTML3 = `
<li class="feedback">
  <section class="feedback__badge feedback__letter-color-red">
      <p class="feedback__letter">${badgeLetters}</p>
  </section>
  <div class="feedback__content">
      <p class="feedback__company">WYPŁATA</p>
      <p class="feedback__text">1600,00</p>
  </div>
  <p class="feedback__date">03-09-2022</p>
</li>
`;


// insert new feedback item into classList
feedbackList.insertAdjacentHTML('afterbegin', feedbackItemHTML3);