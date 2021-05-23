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
const SORTED_TYPES_ALL = [ 'consonant', 'camel', 'pascal', 'snake', 'kebab', 'title', 'vowel','upper', 'lower'] 

const makeCase = function(input, type) { // Looks like type receives an array, then it should be types instead of type
  
  let inputLower = input.toLowerCase()
  // if type is already a array, why are we doing this?
  // I am assuming that you are doing this because the argument type can be either string(containing a single value) or an array (containing multiple values)
  // When you desing a function, it is not the best practice to receive an argument that can be something or something else (like string or array).
  // the reason is because it makes functions to handle many different scenarios and it causes the function to be more complicated => more bugs and harder to maintain
  // You should decide if you want to receive type as string or array.
  const types = [];  
  (Array.isArray(type)) ? type.forEach(type => types.push(type)) : types.push(type)
  // const typesInArray = (Array.isArray(type)) ? type : type.split(' ')

  sortedTypes = []
  
  types.forEach((type) => {
    if(!SORTED_TYPES_ALL.includes(type)) {
      console.error(`Error: Invalid type input, input: ${type}, skipping the conversion for this type`)
    }
  })


  
  for(type of SORTED_TYPES_ALL) {
    for(inputType of types) {
      if(type === inputType) {
        sortedTypes.push(inputType)
      }

      
  for (aType of typesInArray) {
    switch (aType) {
      case 'camel': output = camelCse(); break;
      case 'pascal': output = pascalCase(); break;
      case 'snake': output = snakeCase(); break;
      case 'kebab': output = kebabCase(); break;
      case 'title': output = titleCase(); break;
      case 'vowel': output = vowelCase(); break;
      case 'consonant': output = consonantCase(); break;
      case 'upper': output = upperCase(); break;
      case 'lower': output = lowerCase(); break;

    }
  }

  // below is functions and functions without input? I am confused
  // I see why you created duplicated called `output`. I would encourage you to make below functions to receive inputs instead of directly accessing the exsiting variables.
  const camelCase = (input) => {
    const result = input.split(' ').map((word, index) => (index > 0) ? `${word[0].toUpperCase()}${word.slice(1)}` : word).join('');
    return result
  }
  const pascalCase = (input) => input.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join('');
  const snakeCase = (input) => input.split(' ').map((word, index, array) => (index < array.length-1) ? word + '_' : word).join('');
  const kebabCase = (input) => input.split(' ').map((word, index, array) => (index < array.length-1) ? word + '-' : word).join('');
  const titleCase = (input) => input.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
  const vowelCase = (input) => input.split('').map(character => (VOWELS.includes(character)) ? character.toUpperCase(): character).join('');
  const consonantCase = (input) => {
    // problem here
    const result = input.toUpperCase().split('').map(character => (VOWELS.includes(character)) ? character.toLowerCase(): character).join('');
    return result
  }
  const upperCase = (input) => input.toUpperCase();
  const lowerCase = (input) => input.toLowerCase();

  for (aType of sortedTypes) {
    switch (aType) {
      case 'camel': inputLower = camelCase(inputLower); break;
      case 'pascal': inputLower = pascalCase(inputLower); break;
      case 'snake': inputLower = snakeCase(inputLower); break;
      case 'kebab': inputLower = kebabCase(inputLower); break;
      case 'title': inputLower = titleCase(inputLower); break;
      case 'vowel': inputLower = vowelCase(inputLower); break;
      case 'consonant': inputLower = consonantCase(inputLower); break;
      case 'upper': inputLower = upperCase(inputLower); break;
      case 'lower': inputLower = lowerCase(inputLower); break; 
      // missing a default case
      // also in this case, the output will only have the latest conversion result.
      // e.g. if there are multiple types passed, [camel, upper], then at the end the output will have upper conversion only. camel case conversion will be lost.
    }
  }
  return inputLower;
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
