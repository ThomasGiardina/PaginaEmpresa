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
  
  content = content.replace(/text-\[(\d+)px\]/g, (match, p1) => {
    const oldSize = parseInt(p1, 10);
    let newSize = Math.round(oldSize * 1.15);
    if (newSize - oldSize < 2) newSize = oldSize + 2;
    return `text-[${newSize}px]`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    changedFiles++;
    console.log(`Updated sizes in ${file}`);
  }
}

console.log(`\nSuccessfully updated text sizes in ${changedFiles} files.`);
