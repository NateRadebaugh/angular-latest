#!/usr/bin/env node

/**
 * Post-build script to remove JavaScript from prerendered HTML files
 * This creates a truly static site without any client-side JavaScript
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const distPath = 'dist/angular-latest/browser';

function removeScriptTags(htmlContent) {
  // Remove all script tags
  return htmlContent.replace(/<script[^>]*>.*?<\/script>/gis, '');
}

function processHtmlFiles(dir) {
  const files = readdirSync(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      processHtmlFiles(filePath);
    } else if (extname(file) === '.html' && file !== 'index.csr.html') {
      // Skip the CSR fallback file
      console.log(`Processing ${filePath}...`);
      const content = readFileSync(filePath, 'utf8');
      const cleanedContent = removeScriptTags(content);
      writeFileSync(filePath, cleanedContent, 'utf8');
      console.log(`✓ Removed JavaScript from ${filePath}`);
    }
  }
}

console.log('Removing JavaScript from prerendered HTML files...');
processHtmlFiles(distPath);
console.log('✓ Done! Your static site is now JavaScript-free.');
