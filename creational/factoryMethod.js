// Product interface
class Document {
  constructor() {
    if (this.constructor === Document) {
      throw new Error('Cannot intantiate abstract class')
    }
  }
  print() {
    throw new Error('Method print() must be implemented')
  }
}

// Concret products
class PDFDocument extends Document {
  print() {
    console.log('Printing PDF document...')
  }
}

class WordDocument extends Document {
  print() {
    console.log("Printing Word document...")
  }
}

class ExcelDocument extends Document {
  print() {
    console.log("Printing Excel document...")
  }
}

// Creator (declares the factory method - abstract)
class DocumentCreator {
  createDocument(type) {
    throw new Error('Method createDocument() must be implemented')
  }
}

// Concret creators
class PDFDocumentCreator extends DocumentCreator {
  createDocument() {
    return new PDFDocument()
  }
}

class WordDocumentCreator extends DocumentCreator {
  createDocument() {
    return new WordDocument()
  }
}

class ExcelDocumentCreator extends DocumentCreator {
  createDocument() {
    return new ExcelDocument()
  }
}

// Client code
function clientCode(creator) {
  const document = creator.createDocument()
  document.print()
}

const pdfCreator = new PDFDocumentCreator()
const wordCreator = new WordDocumentCreator()
const excelCreator = new ExcelDocumentCreator()

clientCode(pdfCreator)
clientCode(wordCreator)
clientCode(excelCreator)
