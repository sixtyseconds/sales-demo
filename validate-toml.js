import fs from 'fs';
import TOML from '@iarna/toml';

try {
  const content = fs.readFileSync('netlify.toml', 'utf8');
  const parsed = TOML.parse(content);
  console.log('TOML file is valid!');
  console.log('Parsed content:', JSON.stringify(parsed, null, 2));
} catch (error) {
  console.error('Error parsing TOML file:', error.message);
  console.error('Line:', error.line);
  console.error('Column:', error.col);
} 