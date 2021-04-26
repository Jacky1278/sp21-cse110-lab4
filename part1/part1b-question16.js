for(const obj in statistics){
    if(obj[0] === 'r' || (s[obj]%2) === 1) {
      console.log(`${s[obj]}`);
    }
  }