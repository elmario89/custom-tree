

class customTree extends HTMLElement {
  constructor(){
    super();
  }

  createdCallback() {
    var link = document.querySelector('link[rel="import"]');
    var linkContent = link.import;

    var tmpl = linkContent.querySelector('template');
    var clone = document.importNode(tmpl.content, true);

    this.appendChild(clone);
  }
}

document.registerElement('custom-tree', customTree);