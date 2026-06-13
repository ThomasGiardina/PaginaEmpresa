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
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Remove broken phantom classes
  content = content.replace(/ -mx-22 px-22/g, '');
  content = content.replace(/-mx-22 px-22 /g, '');
  content = content.replace(/ -mx-22 px-10/g, '');
  content = content.replace(/-mx-22 px-10 /g, '');
  content = content.replace(/ -mx-22/g, '');
  content = content.replace(/ -mx-22"/g, '"');
  content = content.replace(/-mx-22 /g, '');
  content = content.replace(/px-22 /g, '');
  content = content.replace(/ px-22/g, '');
  content = content.replace(/className="-mx-22 px-22"/g, 'className=""');

  // Add px-14 to max-w containers
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('max-w-[1500px]') || lines[i].includes('max-w-[1200px]')) {
      // Remove any existing px-\d+ on that line
      lines[i] = lines[i].replace(/\s+px-\d+/g, '');
      // Add px-14 after max-w-[...px]
      lines[i] = lines[i].replace(/(max-w-\[\d+px\])/g, '$1 px-14');
    }
  }
  content = lines.join('\n');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
}
