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
  const namesCheker = {};
  const editedNames = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i] in namesCheker) {
      editedNames.push(`${names[i]}(${namesCheker[names[i]]})`);
      namesCheker[names[i]] += 1;
    } else if (editedNames.includes(names[i]) && !(names[i] in namesCheker)) {
      namesCheker[names[i]] = 1;
      editedNames.push(`${names[i]}(${namesCheker[names[i]]})`);
    } else {
      namesCheker[names[i]] = 1;
      editedNames.push(names[i]);
    }
  }

  return editedNames;
}

module.exports = renameFiles;
