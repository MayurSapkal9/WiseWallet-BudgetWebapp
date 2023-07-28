
function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById('myDropdown').classList.toggle("hide");
}
const dropdownLinks = document.querySelectorAll("#myDropdown a");
  dropdownLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      const targetId = this.getAttribute("data-target");
      const targetDiv = document.getElementById(targetId);

      // Scroll to the selected div
      targetDiv.scrollIntoView({ behavior: "smooth" });

      // Hide the dropdown after selecting an option
      document.getElementById("myDropdown").classList.add("hide");
    });
  });

/*get the element which needed to be updated*/

/*history sheet update*/
const historyTable = document.querySelector('.history-sheet table');
//new transaction
function addTransaction(type, description, amount, date) {
   // amount = parseFloat(amount);
    if (isNaN(amount)) {
      alert('Please enter a valid amount.');
      return;
    }
    if (type === 'Income') {
        income += amount;
        balance += amount;
      } else if (type === 'Expense') {
        expense += amount;
        balance -= amount;
      }
    
      // Update the display of balance, income, and expense
      updateBalanceIncomeExpense();
// update the row
const newRow = document.createElement('tr');
newRow.innerHTML = `
  <td>${date}</td>
  <td>${type}</td>
  <td>${description}</td>
  <td>₹ ${Number(amount).toFixed(2)}</td>
`;
historyTable.appendChild(newRow);
}
function transactionFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const type = form.selecttype.value;
    const description = form.description.value;
    const amount = form.amount.value;
    const date = form.date.value;
  
    addTransaction(type, description, amount, date);
  
    // Reset the form after adding a transaction
    form.reset();
  }
  document.querySelector('.mobile-screen form').addEventListener('submit', transactionFormSubmit);

  /*****homesectionupdate */
  const balanceElement = document.getElementById('rssignbalance');
  const incomeElement = document.getElementById('rssignincome');
  const expenseElement = document.getElementById('rssignexpense');

let balance = 0;
let income = 0;
let expense = 0;
function updateBalanceIncomeExpense() {
    balanceElement.textContent = `₹ ${Number(balance).toFixed(2)}`;
    incomeElement.textContent = `₹ ${Number(income).toFixed(2)}`;
    expenseElement.textContent = `₹ ${Number(expense).toFixed(2)}`;
  }
  //contact button
  document.querySelector('.btn1').addEventListener('click', function() {
    // Define the email address to be used
    const emailAddress = 'mayureshvsapkal9.com';
    
    // Generate the mailto link
    const mailtoLink = `mailto:${emailAddress}`;
    
    // Open the user's email client
    window.location.href = mailtoLink;
});

