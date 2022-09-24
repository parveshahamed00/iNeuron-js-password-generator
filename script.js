let result_box = document.querySelector("#result");
let heading = document.querySelector("h2");
let button_generate = document.querySelector("#generate");
function passwordd() {
  let password_length = document.querySelector("#length").value;
  let uppercase_checkbox = document.querySelector("#uppercase");
  let lowercase_checkbox = document.querySelector("#lowercase");
  let number_checkbox = document.querySelector("#numbers");
  let symbol_checkbox = document.querySelector("#symbols");
  let password_array = [];
  let lowercase_letters = "abcdefghijklmnopqrstuvwxyz";
  let uppercase_letters = lowercase_letters.toUpperCase();
  let numbers = "1234567890";
  let symbols = "@#$%^&*()_-;:";
  let password;
  function generate_password(x) {
    for (let i = 0; i < password_length; i++) {
      let random = Math.floor(Math.random() * x.length);
      password_array.push(x[random]);
    }
    return password_array;
  }
  // For only uppercase
  if (
    uppercase_checkbox.checked == true &&
    lowercase_checkbox.checked == false &&
    number_checkbox.checked == false &&
    symbol_checkbox.checked == false
  ) {
    password = uppercase_letters;
    let generated_password = generate_password(password);
    // console.log(generated_password);
    result_box.value = generated_password.join("");
    password_array.splice(0, password_array.length);
  }
  // For only lowercase
  if (
    uppercase_checkbox.checked == false &&
    lowercase_checkbox.checked == true &&
    number_checkbox.checked == false &&
    symbol_checkbox.checked == false
  ) {
    password = lowercase_letters;
    let generated_password = generate_password(password);
    // console.log(generated_password);
    result_box.value = generated_password.join("");
    password_array.splice(0, password_array.length);
  }
  // For only numbers
  if (
    uppercase_checkbox.checked == false &&
    lowercase_checkbox.checked == false &&
    number_checkbox.checked == true &&
    symbol_checkbox.checked == false
  ) {
    password = numbers;
    let generated_password = generate_password(password);
    // console.log(generated_password);
    result_box.value = generated_password.join("");
    password_array.splice(0, password_array.length);
  }
  // For only symbols
  if (
    uppercase_checkbox.checked == false &&
    lowercase_checkbox.checked == false &&
    number_checkbox.checked == false &&
    symbol_checkbox.checked == true
  ) {
    password = symbols;
    let generated_password = generate_password(password);
    // console.log(generated_password);
    result_box.value = generated_password.join("");
    password_array.splice(0, password_array.length);
  }
  // For uppercase and lowercase
  if (
    uppercase_checkbox.checked == true &&
    lowercase_checkbox.checked == true &&
    number_checkbox.checked == false &&
    symbol_checkbox.checked == false
  ) {
    password = uppercase_letters + lowercase_letters;
    let generated_password = generate_password(password);
    let for_uppercase;
    let for_lowercase;
    generated_password.forEach((e) => {
      if (lowercase_letters.includes(e)) {
        for_lowercase = true;
      }
    });
    generated_password.forEach((e) => {
      if (uppercase_letters.includes(e)) {
        for_uppercase = true;
      }
    });
    if (for_uppercase && for_lowercase) {
      result_box.value = generated_password.join("");
      //   console.log(generated_password);

      password_array.splice(0, password_array.length);
    } else {
      console.log("Upper and Lower !!");
      passwordd();
    }
  }
  // For uppercase and numbers
  if (
    uppercase_checkbox.checked == true &&
    lowercase_checkbox.checked == false &&
    number_checkbox.checked == true &&
    symbol_checkbox.checked == false
  ) {
    password = uppercase_letters + numbers;
    let generated_password = generate_password(password);
    let for_uppercase;
    let for_numbers;
    generated_password.forEach((e) => {
      if (uppercase_letters.includes(e)) {
        for_uppercase = true;
      }
    });
    generated_password.forEach((e) => {
      if (numbers.includes(e)) {
        for_numbers = true;
      }
    });
    if (for_uppercase && for_numbers) {
      result_box.value = generated_password.join("");
      //   console.log(generated_password);

      password_array.splice(0, password_array.length);
    } else {
      console.log("upper and number !!");
      passwordd();
    }
  }
  // For uppercase and symbols
  if (
    uppercase_checkbox.checked == true &&
    lowercase_checkbox.checked == false &&
    number_checkbox.checked == false &&
    symbol_checkbox.checked == true
  ) {
    password = uppercase_letters + symbols;
    let generated_password = generate_password(password);
    let for_uppercase;
    let for_symbols;
    generated_password.forEach((e) => {
      if (uppercase_letters.includes(e)) {
        for_uppercase = true;
      }
    });
    generated_password.forEach((e) => {
      if (symbols.includes(e)) {
        for_symbols = true;
      }
    });
    if (for_uppercase && for_symbols) {
      result_box.value = generated_password.join("");
      //   console.log(generated_password);

      password_array.splice(0, password_array.length);
    } else {
      console.log("upper and symbols !!");
      passwordd();
    }
  }

  // lowercase and numbers
  if (
    uppercase_checkbox.checked == false &&
    lowercase_checkbox.checked == true &&
    number_checkbox.checked == true &&
    symbol_checkbox.checked == false
  ) {
    password = lowercase_letters + numbers;
    let generated_password = generate_password(password);
    let for_lowercase;
    let for_numbers;
    generated_password.forEach((e) => {
      if (lowercase_letters.includes(e)) {
        for_lowercase = true;
      }
    });
    generated_password.forEach((e) => {
      if (numbers.includes(e)) {
        for_numbers = true;
      }
    });
    if (for_lowercase && for_numbers) {
      result_box.value = generated_password.join("");
      //   console.log(generated_password);

      password_array.splice(0, password_array.length);
    } else {
      console.log("lower and numbers !!");
      passwordd();
    }
  }

  // lowercase and symbols
  if (
    uppercase_checkbox.checked == false &&
    lowercase_checkbox.checked == true &&
    number_checkbox.checked == false &&
    symbol_checkbox.checked == true
  ) {
    password = lowercase_letters + symbols;
    let generated_password = generate_password(password);
    let for_lowercase;
    let for_symbols;
    generated_password.forEach((e) => {
      if (lowercase_letters.includes(e)) {
        for_lowercase = true;
      }
    });
    generated_password.forEach((e) => {
      if (symbols.includes(e)) {
        for_symbols = true;
      }
    });
    if (for_lowercase && for_symbols) {
      result_box.value = generated_password.join("");
      //   console.log(generated_password);

      password_array.splice(0, password_array.length);
    } else {
      console.log("lower and symbols !!");
      passwordd();
    }
  }
  // when number and symbol
  if (
    uppercase_checkbox.checked == false &&
    lowercase_checkbox.checked == false &&
    number_checkbox.checked == true &&
    symbol_checkbox.checked == true
  ) {
    password = numbers + symbols;
    let generated_password = generate_password(password);
    let for_numbers;
    let for_symbols;
    generated_password.forEach((e) => {
      if (numbers.includes(e)) {
        for_numbers = true;
      }
    });
    generated_password.forEach((e) => {
      if (symbols.includes(e)) {
        for_symbols = true;
      }
    });
    if (for_numbers && for_symbols) {
      result_box.value = generated_password.join("");
      //   console.log(generated_password);

      password_array.splice(0, password_array.length);
    } else {
      console.log("number and symbols !!");
      passwordd();
    }
  }
  //   when upper, lower and number
  if (
    uppercase_checkbox.checked == true &&
    lowercase_checkbox.checked == true &&
    number_checkbox.checked == true &&
    symbol_checkbox.checked == false
  ) {
    let for_uppercase;
    let for_lowercase;
    let for_numbers;
    password = lowercase_letters + uppercase_letters + numbers;
    let generated_password = generate_password(password);

    generated_password.forEach((e) => {
      if (numbers.includes(e)) {
        for_numbers = true;
      }
    });
    generated_password.forEach((e) => {
      if (lowercase_letters.includes(e)) {
        for_lowercase = true;
      }
    });
    generated_password.forEach((e) => {
      if (uppercase_letters.includes(e)) {
        for_uppercase = true;
      }
    });

    if (for_numbers && for_lowercase && for_uppercase) {
      result_box.value = generated_password.join("");
      password_array.splice(0, password_array.length);
    } else {
      console.log("upper lower number !!");

      passwordd();
    }
  }

  // when upper lower symbol
  if (
    uppercase_checkbox.checked == true &&
    lowercase_checkbox.checked == true &&
    number_checkbox.checked == false &&
    symbol_checkbox.checked == true
  ) {
    let for_uppercase;
    let for_lowercase;
    let for_symbols;
    password = lowercase_letters + uppercase_letters + symbols;
    let generated_password = generate_password(password);
    // checking, is number, symbols, uppercase and lowercase letters are present in generated_password Array

    generated_password.forEach((e) => {
      if (lowercase_letters.includes(e)) {
        for_lowercase = true;
      }
    });
    generated_password.forEach((e) => {
      if (uppercase_letters.includes(e)) {
        for_uppercase = true;
      }
    });
    generated_password.forEach((e) => {
      if (symbols.includes(e)) {
        for_symbols = true;
      }
    });
    if (for_lowercase && for_uppercase && for_symbols) {
      result_box.value = generated_password.join("");
      password_array.splice(0, password_array.length);
    } else {
      console.log(" upper lower symbol");

      passwordd();
    }
  }
  //  when lower number symbol
  if (
    uppercase_checkbox.checked == false &&
    lowercase_checkbox.checked == true &&
    number_checkbox.checked == true &&
    symbol_checkbox.checked == true
  ) {
    let for_lowercase;
    let for_numbers;
    let for_symbols;
    password = lowercase_letters + numbers + symbols;
    let generated_password = generate_password(password);
    // checking, is number, symbols, uppercase and lowercase letters are present in generated_password Array
    generated_password.forEach((e) => {
      if (numbers.includes(e)) {
        for_numbers = true;
      }
    });
    generated_password.forEach((e) => {
      if (lowercase_letters.includes(e)) {
        for_lowercase = true;
      }
    });

    generated_password.forEach((e) => {
      if (symbols.includes(e)) {
        for_symbols = true;
      }
    });
    if (for_numbers && for_lowercase && for_symbols) {
      result_box.value = generated_password.join("");
      password_array.splice(0, password_array.length);
    } else {
      console.log("lower number symbol !!");

      passwordd();
    }
  }
  // when upper number symbol
  if (
    uppercase_checkbox.checked == true &&
    lowercase_checkbox.checked == false &&
    number_checkbox.checked == true &&
    symbol_checkbox.checked == true
  ) {
    let for_uppercase;
    let for_numbers;
    let for_symbols;
    password = uppercase_letters + numbers + symbols;
    let generated_password = generate_password(password);
    // checking, is number, symbols, uppercase and lowercase letters are present in generated_password Array
    generated_password.forEach((e) => {
      if (numbers.includes(e)) {
        for_numbers = true;
      }
    });

    generated_password.forEach((e) => {
      if (uppercase_letters.includes(e)) {
        for_uppercase = true;
      }
    });
    generated_password.forEach((e) => {
      if (symbols.includes(e)) {
        for_symbols = true;
      }
    });
    if (for_numbers && for_uppercase && for_symbols) {
      result_box.value = generated_password.join("");
      password_array.splice(0, password_array.length);
    } else {
      console.log(" upper number symbol !!");

      passwordd();
    }
  }
  // when all checkbox are checked
  if (
    uppercase_checkbox.checked == true &&
    lowercase_checkbox.checked == true &&
    number_checkbox.checked == true &&
    symbol_checkbox.checked == true
  ) {
    let for_uppercase;
    let for_lowercase;
    let for_numbers;
    let for_symbols;
    password = lowercase_letters + uppercase_letters + numbers + symbols;
    let generated_password = generate_password(password);
    // checking, is number, symbols, uppercase and lowercase letters are present in generated_password Array
    generated_password.forEach((e) => {
      if (numbers.includes(e)) {
        for_numbers = true;
      }
    });
    generated_password.forEach((e) => {
      if (lowercase_letters.includes(e)) {
        for_lowercase = true;
      }
    });
    generated_password.forEach((e) => {
      if (uppercase_letters.includes(e)) {
        for_uppercase = true;
      }
    });
    generated_password.forEach((e) => {
      if (symbols.includes(e)) {
        for_symbols = true;
      }
    });
    if (for_numbers && for_lowercase && for_uppercase && for_symbols) {
      result_box.value = generated_password.join("");
      password_array.splice(0, password_array.length);
    } else {
      console.log("everything !!");

      passwordd();
    }
  }
  heading.innerText = "Password Created.. ";
}

button_generate.addEventListener("click", passwordd);

function clicking() {
  result_box.select();
  navigator.clipboard.writeText(result_box.value);
  heading.innerText="Scuessfully copied ❗"
}
