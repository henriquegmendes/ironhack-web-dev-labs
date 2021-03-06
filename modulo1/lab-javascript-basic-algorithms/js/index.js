// Iteration 1: Names and Input
let hacker1 = 'Henrique Mendes';
let hacker2 = 'Fulano de Talsss';

const hacker1Sentence = "The driver's name is" + ' ' + hacker1;
const hacker2Sentence = `The navigator's name is ${hacker2}`;

console.log(hacker1Sentence);
console.log(hacker2Sentence);
// Iteration 2: Conditionals
const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
} else if (hacker2Length > hacker1Length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}

// Iteration 3: Loops
let hacker1CaptilizedName = '';

for (let i = 0; i < hacker1.length; i += 1) {
  if (i === hacker1.length - 1) {
    hacker1CaptilizedName += `${hacker1[i].toUpperCase()}`;
  } else {
    hacker1CaptilizedName += `${hacker1[i].toUpperCase()} `;
  }
  
}

// Bonus 1

const phrase = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit blandit nisl eu molestie. Nam nibh quam, aliquam sed fermentum ac, placerat quis tortor. Integer et mi. Nullam nisl tellus, ullamcorper eleifend ipsum ut, mollis porttitor ligula. Maecenas in efficitur tellus, in rhoncus erat. Vestibulum arcu velit, bibendum eget mauris vitae, tristique facilisis arcu. Sed vestibulum rhoncus magna, sed congue ipsum luctus eget. Aliquam ullamcorper, elit at consequat congue, elit mauris rhoncus purus, non lacinia massa tellus eu neque. Curabitur turpis nisi, dictum et tortor ac, dapibus interdum turpis.

Aliquam vel metus porta, semper nulla vitae, ullamcorper dolor. Suspendisse erat diam, viverra ac felis in, ultricies sodales erat. Integer commodo rhoncus pretium. Morbi sollicitudin eget ipsum in ultricies. Fusce arcu dolor, vestibulum ut nunc eu, placerat dictum nunc. Vivamus consequat interdum iaculis. Suspendisse vitae arcu rhoncus, rutrum risus sit amet, tristique tellus. Sed eu sodales purus. Donec rhoncus, purus eget imperdiet pulvinar, nulla turpis accumsan est, sed facilisis sem lorem quis magna. Duis id imperdiet sapien.

Maecenas ipsum leo, consectetur ut risus et, iaculis ullamcorper tortor. Aliquam erat volutpat. Praesent vel lacinia nisl. Proin viverra congue lorem in laoreet. Quisque interdum, mauris vitae bibendum luctus, enim metus finibus est, vitae hendrerit ex ex ut nulla. Donec ultrices efficitur varius. Cras suscipit neque magna, ac ornare diam malesuada quis. Ut massa mauris, mollis a imperdiet et, consequat ut orci. Aenean purus turpis, varius nec interdum sit amet, iaculis ut tellus. Phasellus magna est, convallis ut tristique lacinia, convallis quis tortor. Sed vel vehicula urna. Vivamus augue dolor, efficitur ac nulla nec, aliquam porttitor massa.`;

// result --- 264

let result = phrase.split(' ').length; // 262

const regularExpressionToFindLineBreaks = /[\n]{1,}/g
const backSpacesFound = phrase.match(regularExpressionToFindLineBreaks) !== null ? phrase.match(regularExpressionToFindLineBreaks).length : 0;
result += backSpacesFound;

// for (let i = 0; i < phrase.length; i += 1) {
//   if (phrase[i - 1] !== '\n' && (phrase[i] === '\n' || (phrase[i] === '\n' && phrase[i + 1] === '\n'))) {
//     result += 1;
//   }
// }

let countEtWords = 0;

for (let i = 0; i < phrase.length; i += 1) {
  
  if (phrase.slice(i, i + 2) === 'et') {

    const characterBeforeIsALetter = (phrase.charCodeAt(i - 1) >= 65 && phrase.charCodeAt(i - 1) <= 90) || (phrase.charCodeAt(i - 1) >= 97 && phrase.charCodeAt(i - 1) <= 122);

    const characterAfterIsALetter = (phrase.charCodeAt(i + 2) >= 65 && phrase.charCodeAt(i + 2) <= 90) || (phrase.charCodeAt(i + 2) >= 97 && phrase.charCodeAt(i + 2) <= 122);

    
    if (!characterBeforeIsALetter && !characterAfterIsALetter) {
      countEtWords += 1;
    }

  }

}

console.log(countEtWords)

// Bonus 2:
const phraseToCheck = 'akldsjdm u89sudoasdumas09odia90id9a0i()U(*&)(ID()sadjmasdi  adosi,aspodi';
// Converter as letras da string para caixa baixa - OK
// Fazer um loop na string resultante - OK
// Dentro do loop, fazer a verificação do intervalo numérico (97 até 122) referente a cada caractere usando o charCodeAt() - OK
// Caso esteja dentro deste intervalo, concatenar em uma nova string que deverá começar vazia - OK
// Montar outra string, sendo ela o inverso da string montada anteriormente sem os caracteres especiais - OK
// Checar se as duas strings são iguais e printar no console - OK

const lowerCaseString = phraseToCheck.toLowerCase();

let onlyLettersString = '';

for (let i = 0; i < lowerCaseString.length; i += 1) {
  const charCode = lowerCaseString.charCodeAt(i)
  if (charCode >= 97 && charCode <= 122) {
    onlyLettersString += lowerCaseString[i];
  }
}

let reversedString = '';

for (let i = onlyLettersString.length - 1; i >= 0; i -= 1) {
  reversedString += onlyLettersString[i];
}

console.log(onlyLettersString === reversedString);
