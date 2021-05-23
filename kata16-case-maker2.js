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

const makeCase = function(input, type) {
  let output = input.toLowerCase();
  const acceptableTypesInOrder = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
  const typesInArray = (Array.isArray(type)) ? type : type.split(' ');
  const sortedType = [];
  for (eachType of acceptableTypesInOrder) {
    for (inputType of typesInArray) {
      if (eachType === inputType) {
        sortedType.push(eachType);
      } else if (!acceptableTypesInOrder.includes(inputType)){
        output = "undefined, please enter valid case(s)";
      } 
    }
  };
  
  
      
  const camelCase = (input) => {
    const result = input.split(' ').map((word, index) => {
      return (index > 0) ? `${word[0].toUpperCase()}${word.slice(1)}`: word;
    }).join('');
    return result;
  };
  
  const pascalCase = (input) => {
    const result = input.split(' ').map(word => {
      return `${word[0].toUpperCase()}${word.slice(1)}`
    }).join('');
    return result;
  };

  const snakeCase = (input) => {
    const result = input.split(' ').map((word, index, array) => {
      return (index < array.length-1) ? word + '_' : word;
    }).join('');
    return result;
  };
    
  const kebabCase = (input) => {
    const result = input.split(' ').map((word, index, array) => {
      return (index < array.length-1) ? word + '-' : word;
    }).join('');
    return result;
  };
  
  const titleCase = (input) => {
    const result = input.split(' ').map(word => {
      return `${word[0].toUpperCase()}${word.slice(1)}`;
    }).join(' ');
    return result;
  };

  const vowelCase = (input) => {
    const result = input.split('').map(character => {
      return vowels.includes(character) ? character.toUpperCase(): character;
    }).join('');
    return result;
  };
  
  const consonantCase = (input) => {
    const result = input.split('').map(character => {
      return (!vowels.includes(character)) ? character.toUpperCase() : character;
    }).join('');
    return result;
  };
  
  const upperCase = (input) => input.toUpperCase();
  
  const lowerCase = (input) => input.toLowerCase();

  for (aType of sortedType) {
    switch (aType) {
      case 'camel': output = camelCase(output); break;
      case 'pascal': output = pascalCase(output); break;
      case 'snake': output = snakeCase(output); break;
      case 'kebab': output = kebabCase(output); break;
      case 'title': output = titleCase(output); break;
      case 'vowel': output = vowelCase(output); break;
      case 'consonant': output = consonantCase(output); break;
      case 'upper': output = upperCase(output); break;
      case 'lower': output = lowerCase(output); break;
    }
  }
   
  return output;
}

  console.log(makeCase("this is a string", "camel"));
  console.log(makeCase("this is a string", "pascal"));
  console.log(makeCase("this is a string", "snake"));
  console.log(makeCase("this is a string", "kebab"));
  console.log(makeCase("this is a string", "title"));
  console.log(makeCase("this is a string", "vowel"));
  console.log(makeCase("this is a string", "consonant"));
  console.log(makeCase("this is a string", ['snake', "consonant"]));
  console.log(makeCase("this is a string", ["snake", 'upper']));
  console.log(makeCase("this is a string", ['vowel', "camel"]));
  console.log(makeCase("this is a string", 'a;sdlkfja;lkdj'));