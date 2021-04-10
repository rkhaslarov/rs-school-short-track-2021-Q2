/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) {
    return [];
  }
  const convertedFileNames = [];
  convertedFileNames[0] = names[0];

  for (let i = 1; i < names.length; i++) {
    if (convertedFileNames.includes(names[i])) {
      let amount = 0;
      let newFileName = '';
      for (let j = 0; j < i; j++) {
        if (names[j] === names[i]) {
          amount++;
        }
      }
      if (amount === 0) {
        newFileName = names[i].concat('(1)');
      } else {
        newFileName = names[i].includes(')') ? names[i].concat(`(${amount + 1})`) : names[i].concat(`(${amount})`);
      }
      convertedFileNames.push(newFileName);
    } else {
      convertedFileNames.push(names[i]);
    }
  }
  return convertedFileNames;
}

module.exports = renameFiles;
