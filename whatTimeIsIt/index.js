const whatTimeIsIt = (time) => {
  //do code here
  var bilangan = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
  ];
  var puluhan = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  var clock = time.split(" ");
  //   console.log(clock);
  var status = "";
  if (clock[0] == "12:00") {
    if (clock[1] == "pm") {
      return "It's noon";
    } else if (clock[1] == "am") {
      return "It's midnight";
    }
  } else {
    if (clock[1] == "am") {
      status = "morning";
    } else {
      status = "afternoon";
    }
    // console.log(bilangan[parseInt(clock[0][0] - 1)]);
    if (clock[0][2] == "1" && clock[0][3] == "1") {
      return `It's ${
        bilangan[parseInt(clock[0][0]) - 1]
      } past eleven in the ${status}`;
    } else {
      return `It's ${bilangan[parseInt(clock[0][0]) - 1]} past ${
        puluhan[parseInt(clock[0][2]) - 2]
      } ${bilangan[parseInt(clock[0][3]) - 1]} in the ${status}`;
    }
  }
};

// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(whatTimeIsIt("12:00 pm"), "It's noon");
test(whatTimeIsIt("3:49 pm"), "It's three past forty nine in the afternoon");
test(whatTimeIsIt("12:00 am"), "It's midnight");
test(whatTimeIsIt("5:31 am"), "It's five past thirty one in the morning");
test(whatTimeIsIt("9:11 am"), "It's nine past eleven in the morning");

// rizkyian78@gmail.com
