function checkForSpam(message) {
  const x = String(message).toLowerCase();
  const ban1 = "spam";
  const ban2 = "sale";
  const checkBan1 = x.includes(ban1);
  const checkBan2 = x.includes(ban2);
  const checkMain = checkBan1 || checkBan2;

  if (checkMain) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
