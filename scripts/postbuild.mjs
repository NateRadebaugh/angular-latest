#!/usr/bin/env node

/**
 * Post-build script to remove render-blocking resources from prerendered HTML files
 * This creates a truly static site without any client-side JavaScript and with fully inlined CSS
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const distPath = 'dist/angular-latest/browser';

function removeScriptTags(htmlContent) {
  // Remove all script tags with comprehensive handling
  // Using a more thorough approach that handles all edge cases
  let result = htmlContent;
  let prevResult;
  
  // Repeat until no more changes to handle nested/malformed cases
  do {
    prevResult = result;
    // Match <script> tags with any attributes and content, handling whitespace variations
    // \s* allows for any whitespace (including tabs, newlines) before closing >
    result = result.replace(/<script(?:\s+[^>]*)?\s*>[\s\S]*?<\/script(?:\s+[^>]*)?\s*>/gi, '');
  } while (result !== prevResult);
  
  return result;
}

function removeExternalStylesheets(htmlContent) {
  // Remove external stylesheet links that would block rendering
  // Angular already inlines critical CSS, so external stylesheets are redundant
  return htmlContent.replace(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi, '');
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
      let cleanedContent = removeScriptTags(content);
      cleanedContent = removeExternalStylesheets(cleanedContent);
      writeFileSync(filePath, cleanedContent, 'utf8');
      console.log(`✓ Removed render-blocking resources from ${filePath}`);
    }
  }
}

console.log('Removing render-blocking resources from prerendered HTML files...');
processHtmlFiles(distPath);
console.log('✓ Done! Your static site has no render-blocking resources.');
