const phoneBook = {
    'John Doe': '123-456-7890',
    'Jane Smith': '987-654-3210',
    'Alice Johnson': '555-555-5555'
  };
  
  function findPhoneNumber(userName) {
    return phoneBook[userName] || 'User not found';
  }
  console.log(findPhoneNumber('John Doe'))
  console.log(findPhoneNumber('Alice Johnson'))
  console.log(findPhoneNumber('Bob Smith'))