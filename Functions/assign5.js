function Average(arr) {
    const totalItems = arr.length;
    if (totalItems === 0) {
      return 0;
    }
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / totalItems;
  }
  console.log(Average([10,29]))