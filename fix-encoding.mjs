/**
 * Fix double-encoded UTF-8 in source files.
 * Run: node fix-encoding.mjs
 *
 * The garbled characters (â"€, â€", etc.) are caused by double-encoded UTF-8 bytes.
 * This script reads each affected file, replaces the garbled comment separators
 * with clean Unicode equivalents, and writes the files back.
 */

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()

const files = [
  'app/services/page.tsx',
  'app/about/page.tsx',
  'app/locations/page.tsx',
  'data/programs.ts',
]

// Map of garbled byte sequences to their correct Unicode characters
// These are the result of double-encoding UTF-8:
//   U+2500 (─) -> bytes E2 94 80 -> double-encoded to C3A2 C294 C280 -> decoded as â<0x94><0x80>
//   U+2014 (—) -> bytes E2 80 94 -> double-encoded to C3A2 C280 C294 -> decoded as â<0x80><0x94>
//   U+2013 (–) -> bytes E2 80 93 -> double-encoded to C3A2 C280 C293 -> decoded as â<0x80><0x93>

let totalFixes = 0

for (const relPath of files) {
  const fullPath = join(ROOT, relPath)
  const buf = readFileSync(fullPath)

  // Work on raw bytes to find the double-encoded sequences
  const result = []
  let i = 0
  let fixes = 0

  while (i < buf.length) {
    // Check for double-encoded U+2500 (─): C3 A2 C2 94 C2 80
    if (
      i + 5 < buf.length &&
      buf[i] === 0xc3 && buf[i + 1] === 0xa2 &&
      buf[i + 2] === 0xc2 && buf[i + 3] === 0x94 &&
      buf[i + 4] === 0xc2 && buf[i + 5] === 0x80
    ) {
      // Replace with ─ (U+2500) = E2 94 80
      result.push(0xe2, 0x94, 0x80)
      i += 6
      fixes++
      continue
    }

    // Check for double-encoded U+2014 (—): C3 A2 C2 80 C2 94
    if (
      i + 5 < buf.length &&
      buf[i] === 0xc3 && buf[i + 1] === 0xa2 &&
      buf[i + 2] === 0xc2 && buf[i + 3] === 0x80 &&
      buf[i + 4] === 0xc2 && buf[i + 5] === 0x94
    ) {
      // Replace with — (U+2014) = E2 80 94
      result.push(0xe2, 0x80, 0x94)
      i += 6
      fixes++
      continue
    }

    // Check for double-encoded U+2013 (–): C3 A2 C2 80 C2 93
    if (
      i + 5 < buf.length &&
      buf[i] === 0xc3 && buf[i + 1] === 0xa2 &&
      buf[i + 2] === 0xc2 && buf[i + 3] === 0x80 &&
      buf[i + 4] === 0xc2 && buf[i + 5] === 0x93
    ) {
      // Replace with – (U+2013) = E2 80 93
      result.push(0xe2, 0x80, 0x93)
      i += 6
      fixes++
      continue
    }

    // No match - copy byte as-is
    result.push(buf[i])
    i++
  }

  if (fixes > 0) {
    writeFileSync(fullPath, Buffer.from(result))
    console.log(`✓ ${relPath}: fixed ${fixes} garbled characters`)
    totalFixes += fixes
  } else {
    console.log(`  ${relPath}: no garbled characters found`)
  }
}

console.log(`\nDone. Fixed ${totalFixes} total characters across ${files.length} files.`)
