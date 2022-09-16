const amount = document.querySelector(".form-control");
const balance = document.querySelector(".balance");
const btnIn = document.querySelector(".btn-success");
const btnOut = document.querySelector(".btn-danger");
const feedbackList = document.querySelector('.feedbacks');
const badgeLetter = document.querySelector('feedback__letter')
let badgeLetters = "";

// GET
const getTransactions = () => {
  fetch('./data.json').then(res => {
  return res.json();
}).then(data => {
  console.log(data.transactions)
})
}

//OBIEKT: TRANSAKCJA
const transactionItem = {
  transactionType: "WY",
  transactionAmount: 23300,
  transactionDate: "2022-09-04"
}

//POST
const postTransaction = () => {
  fetch('/data', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transactionItem)
  }).then(response => {
    if(!response.ok) {
      console.log('Something went wrong');
      return;
    } 
      console.log("Successfully submitted")
      getTransactions();
  }).catch(error => console.log(error));
}

//PRZYCISKI
const testIn = () => {
  getTransactions();
}
btnIn.addEventListener("click", testIn)

const testOut = () => {
  postTransaction();
}
btnOut.addEventListener("click", testOut)




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