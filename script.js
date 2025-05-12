document.addEventListener('DOMContentLoaded', function() {
  // CUSTOMER LOGIN
  document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('customerUsername').value.trim();
    const password = document.getElementById('customerPassword').value.trim();

    if (!username || !password) {
      alert('Please fill in all Customer fields!');
    } else {
      alert(`Customer Logged In\nUsername: ${username}`);
    }
  });
  document.getElementById('customerSignupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('newCustomerUsername').value.trim();
    const password = document.getElementById('newCustomerPassword').value.trim();

    if (!username || !password) {
      alert('Please fill in all fields!');
    } else {
      alert(`Customer Signed Up!\nUsername: ${username}`);
      showCustomerLogin();
    }
  });
  document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const empID = document.getElementById('employeeID').value.trim();
    const password = document.getElementById('employeePassword').value.trim();

    if (!empID || !password) {
      alert('Please fill in all Employee fields!');
    } else {
      alert(`Employee Logged In\nEmployee ID: ${empID}`);
    }
  });
  document.getElementById('employeeSignupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const empID = document.getElementById('newEmployeeID').value.trim();
    const password = document.getElementById('newEmployeePassword').value.trim();

    if (!empID || !password) {
      alert('Please fill in all fields!');
    } else {
      alert(`Employee Signed Up!\nEmployee ID: ${empID}`);
      showEmployeeLogin();
    }
  });
  function showCustomerSignup() {
    document.getElementById('customerLogin').style.display = 'none';
    document.getElementById('customerSignup').style.display = 'block';
  }

  function showCustomerLogin() {
    document.getElementById('customerSignup').style.display = 'none';
    document.getElementById('customerLogin').style.display = 'block';
  }
  function showEmployeeSignup() {
    document.getElementById('employeeLogin').style.display = 'none';
    document.getElementById('employeeSignup').style.display = 'block';
  }

  function showEmployeeLogin() {
    document.getElementById('employeeSignup').style.display = 'none';
    document.getElementById('employeeLogin').style.display = 'block';
  }
  window.showCustomerSection = function() {
    document.querySelector('.selection-container').style.display = 'none'; 
    document.getElementById('formSection').style.display = 'block';        
    document.getElementById('customerSection').style.display = 'block';   
  };
  window.showEmployeeSection = function() {
    document.querySelector('.selection-container').style.display = 'none'; 
    document.getElementById('formSection').style.display = 'block';         
    document.getElementById('employeeSection').style.display = 'block';     
  };
  window.showCustomerSignup = showCustomerSignup;
  window.showCustomerLogin = showCustomerLogin;
  window.showEmployeeSignup = showEmployeeSignup;
  window.showEmployeeLogin = showEmployeeLogin;
});
