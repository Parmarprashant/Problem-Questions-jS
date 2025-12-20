function removeSpaces(str) {
  let start = [...str].findIndex(ch => ch !== " ");
  let end = [...str].length - 1 - [...str].reverse().findIndex(ch => ch !== " ");
  return str.slice(start, end + 1);
}

console.log("*****" + removeSpaces("    Hello World    ") + "*****");