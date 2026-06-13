const fs = require('fs');
const path = require('path');

function getFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, filesList);
    } else if (name.endsWith('.tsx') || name.endsWith('.ts')) {
      filesList.push(name);
    }
  }
  return filesList;
}

const files = getFiles('./src');
let changedFiles = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace standalone px-18 with px-22
  content = content.replace(/\bpx-18\b/g, 'px-22');

  if (content !== original) {
    fs.writeFileSync(file, content);
    changedFiles++;
    console.log(`Updated padding in ${file}`);
  }
}

console.log(`\nSuccessfully updated padding in ${changedFiles} files.`);
