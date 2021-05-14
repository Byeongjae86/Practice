/*In this exercise, we will be building an advanced case maker that can convert strings into all different kinds of case styles; like camel, pascal, snake, or even kebab.
This an extension to the previous Case Maker kata. Create a new file (and gist) for this kata instead of updating the one from your Case Maker submission.
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.
Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:
Precedence of each of the casing styles are as follows, values higher in the list should be processed first:
1.camel, pascal, snake, kebab, title
2.vowel, consonant
3.upper, lower
Our function should be able to handle all of these cases.
For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.*/

const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; // any constant that are globally true, can be defined at the very top of the program right after the imports. Use Uppercases for variable name

const makeCase = function(input, type) { // Looks like type receives an array, then it should be types instead of type
  
  let initialInput = input.toLowerCase()
  let output = initialInput; // is there any reason why we are copying the value to the different variable?
  

  // if type is already a array, why are we doing this?
  // I am assuming that you are doing this because the argument type can be either string(containing a single value) or an array (containing multiple values)
  // When you desing a function, it is not the best practice to receive an argument that can be something or something else (like string or array).
  // the reason is because it makes functions to handle many different scenarios and it causes the function to be more complicated => more bugs and harder to maintain
  // You should decide if you want to receive type as string or array.
  const typesInArray = [];  
  (Array.isArray(type)) ? type.forEach(type => typesInArray.push(type)) : typesInArray.push(type);

  
  // below is functions and functions without input? I am confused
  // I see why you created duplicated called `output`. I would encourage you to make below functions to receive inputs instead of directly accessing the exsiting variables.
  const camelCase = () => initialInput.split(' ').map((word, index) => (index > 0) ? `${word[0].toUpperCase()}${word.slice(1)}` : word).join('');
  const pascalCase = () => initialInput.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join('');
  const snakeCase = () => initialInput.split(' ').map((word, index, array) => (index < array.length-1) ? word + '_' : word).join('');
  const kebabCase = () => initialInput.split(' ').map((word, index, array) => (index < array.length-1) ? word + '-' : word).join('');
  const titleCase = () => initialInput.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
  const vowelCase = () => output.split('').map(character => (VOWELS.includes(character)) ? character.toUpperCase(): character).join('');
  const consonantCase = () => output.toUpperCase().split('').map(character => (VOWELS.includes(character)) ? character.toLowerCase(): character).join('');
  const upperCase = () => output.toUpperCase();
  const lowerCase = () => output.toLowerCase();

  for (aType of typesInArray) {
    switch (aType) {
      case 'camel': output = camelCase(); break;
      case 'pascal': output = pascalCase(); break;
      case 'snake': output = snakeCase(); break;
      case 'kebab': output = kebabCase(); break;
      case 'title': output = titleCase(); break;
      case 'vowel': output = vowelCase(); break;
      case 'consonant': output = consonantCase(); break;
      case 'upper': output = upperCase(); break;
      case 'lower': output = lowerCase(); break; 
      // missing a default case
      // also in this case, the output will only have the latest conversion result.
      // e.g. if there are multiple types passed, [camel, upper], then at the end the output will have upper conversion only. camel case conversion will be lost.
    }
  }
    //firstClassTypes should be entered at index of 0, and SecondClassTypes come after.
    // from here to return output, I dont understand what is coing on. 
    const firstClassTypes = ['camel', 'pascal', 'snake', 'kebab', 'title'];
    const secondClassTypes = ['vowel', 'consonant', 'upper', 'lower' ];
    const allClasses = firstClassTypes.concat(secondClassTypes);
    typesInArray.length === 1 && !allClasses.includes(typesInArray[0])  ? output = 'undefined' : null;
    typesInArray.length === 2 && (!allClasses.includes(typesInArray[0]) || !allClasses.includes(typesInArray[1])) ? output = 'undefined' : null;
    typesInArray.length === 2 && secondClassTypes.includes(typesInArray[0]) ? output = `${typesInArray[0]}type has to be the second type` : null;
    typesInArray.length === 2 && firstClassTypes.includes(typesInArray[1]) ? output = `${typesInArray[1]}type has to be the first type` : null;
    typesInArray.length > 2 || typesInArray.length < 1 ? output = `type should be entered at least 1, and the limit 2!!` : null;

  return output;
}

  console.log(makeCase("this is a string", "camel"));
  console.log(makeCase("this is a string", "pascal"));
  console.log(makeCase("this is a string", "snake"));
  console.log(makeCase("this is a string", "kebab"));
  console.log(makeCase("this is a string", "title"));
  console.log(makeCase("this is a string", "vowel"));
  console.log(makeCase("this is a string", "consonant"));
  console.log(makeCase("this is a string", ['upper', "snake"]));
  console.log(makeCase("this is a string", "lower"));
  console.log(makeCase("this is a string", 'asd;flkj'));