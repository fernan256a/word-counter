export const parse = (data) => {
  let wholeText = data.join(' ').replace(/[^\w\s]/gi, "").toLocaleLowerCase();
  wholeText = wholeText.replace(/\s+/g, ' ');

  const words = wholeText.split(' ');

  const repeated = words.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});

  const sortedWords = Object.entries(repeated).sort(([k1, a], [k2, b]) => b - a);

  return {text: data, words: words.length, chars: wholeText.length, top3: sortedWords.slice(0, 3)}
}
