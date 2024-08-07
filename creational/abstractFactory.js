// Abstract Products
class Button {
  paint() {
    throw new Error('Method paint() must be implemented')
  }
}

class Checkbox {
  paint() {
    throw new Error('Method paint() must be implemented')
  }
}

// Concrete products for Windows
class WindowsButton extends Button {
  paint() {
    console.log('Rendering a button in Windows style.')
  }
}

class WindowsCheckbox extends Checkbox {
  paint() {
    console.log('Rendering a checkbox in Windows style.')
  }
}

// Conrecte products for MacOS
class MacOSButton extends Button {
  paint() {
    console.log('Rendering a button in MacOS style.')
  }
}

class MacOSCheckbox extends Checkbox {
  paint() {
    console.log('Rendering a checkbox in MacOS style.')
  }
}

// Abstract Facotory
class GUIFactory {
  createButton() {
    throw new Error('Method createButton() must be implemented.')
  }
  createCheckbox() {
    throw new Error('Method createCheckbox() must be implemented.')
  }
}

// Concrete Factories
class WindowsFactory extends GUIFactory {
  createButton() {
    return new WindowsButton()
  }
  createCheckbox() {
    return new WindowsCheckbox()
  }
}

class MacOSFactory extends GUIFactory {
  createButton() {
    return new MacOSButton()
  }
  createCheckbox() {
    return new MacOSCheckbox()
  }
}

// Client code
function clientCode(factory) {
  const button = factory.createButton()
  const checkbox = factory.createCheckbox()

  button.paint()
  checkbox.paint()
}

const windowsFactory = new WindowsFactory()
const macOSFacotory = new MacOSFactory()

clientCode(windowsFactory)
clientCode(macOSFacotory)
