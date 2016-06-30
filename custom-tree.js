class customTree extends HTMLElement {
  constructor(){
    super();
  }

  setItems(items){
    var list = this.querySelector('ul');

    for (var item of items){
      var listItem = document.createElement('li');
      var itemLink = document.createElement('a');
      itemLink.textContent = item.title;
      itemLink.href = '#';
      listItem.appendChild(itemLink);
      list.appendChild(listItem);

      if (item.items instanceof Array){
        var subTree = document.createElement('custom-tree');

        subTree.setItems(item.items);
        listItem.appendChild(subTree);
      }
    }
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