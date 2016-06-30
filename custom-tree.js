

class customTree extends HTMLElement {
  constructor(){
    super();
  }

  createdCallback() {
    var tmpl = document.querySelector('template')
    var clone = document.importNode(tmpl.content, true);

    this.appendChild(clone);
  }
}

document.registerElement('custom-tree', customTree);