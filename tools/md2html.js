const fs = require('fs')
const path = require('path')
const archivePath = path.resolve(__dirname, '../src/archive')
var recursive = require('recursive-readdir')
const concat = require('concat-stream')
var md = require('markdown-it')()

init()

async function init () {
  const filePaths = await recursive(archivePath, ['*.png', '*.jpeg', '*.html', '*.js'])
  console.log('filePaths: ', filePaths)

  for (const filePath of filePaths) {
    const concatStream = concat(flush(filePath))
    const file = fs.createReadStream(filePath)
    file.pipe(concatStream)
  }
}

function flush (filePath) {
  const filePathDest = filePath.replace('.md', '.js')

  return (markdownBuffer) => {
    var html = md.render(markdownBuffer.toString())
    const writeStream = fs.createWriteStream(filePathDest, { flags: 'w' })

    // TODO: at this point it will be better to create entries direclty in APP.js and routes
    writeStream.write(composeReactComponent(escapeCodeBlocks(html)))
  }
}

function escapeCodeBlocks (html) {
  return html.replace(/(<code>)([^>]*)(<\/code>)/gm, substitueBlocks)
}

function substitueBlocks (match, p1, p2, p3) {
  console.log('match: ', match)
  console.log('p1: ', p1)
  return `${p1}{\`${p2}\`}${p3}`
}

function composeReactComponent (post) {
  return `
import React from 'react'

const Post = () => {
  return (
    <>
    ${post}
    </>
  )
}
export default Post
`
}
