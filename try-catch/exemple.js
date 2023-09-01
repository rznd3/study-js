function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error('Division by zero is not allowed.'); // create an exception
      }
      return a / b;
    } catch (e) {
      return `Error: ${e.message}`;
    } finally { //
      console.log('Split operation completed.');
    }
  }
  
  console.log(divide(10, 2)); // Output: 5
  console.log('\n')
  console.log(divide(10, 0)); // Output: Error: Division by zero is not allowed. 