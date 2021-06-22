/*
Implementação de lista duplamente encadeada
em javaScript com diversas funções de manipu-
lação de lista testadas.
*/



const prompt = require('prompt-sync')();

var head = Symbol("head");
var tail = Symbol("tail");


class DoublyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}


class DoublyLinkedList {

  constructor() {
    this[head] = null;
    this[tail] = null;
    this.length = 0;
  }

  iteratesNormal() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }

  iteratesInverse() {
    let current = this.tail;
    while (current != null) {
      console.log(current.data);
      current = current.previous;
    }
  }


  push(val) {
    //cria um novo nó e coloca o data nele
    var newNode = new DoublyLinkedListNode(val);

    //se alista está vazia
    if (!this.head) {
      this.head = newNode;
    }
    else {//junta o tail atual e o novo
      this.tail.next = newNode;
      newNode.previous = this.tail;
    }
    this.tail = newNode;//newNode agora é o tail

    this.length++;
    return this;
  }


  pop() {
    if (this.length === 0) {//lista vazia
      return false;
    }

    var popped = this.tail;
    const newTail = this.tail.previous;

    if (newTail) {
      newTail.next = null;
      this.tail.previous = null;
    }
    else this.head = null;

    this.tail = newTail
    this.length--;
    return popped;

  }

  shift() {
    if (this.length === 0) {//lista vazia
      return false;
    }
    var shifted = this.head;
    const newHead = this.head.next;

    if (newHead) {//há uma segunda pos.
      newHead.previous = null;
      this.head.next = null;
    }
    else {//se não há segunda pos.
      this.tail = newHead;
    }
    this.head = newHead;
    this.length--;
    return this;
  }

  unshift(val) {//add como primeiro elemento
    //cria um novo nó e coloca o data nele
    var novoNoAntes = new DoublyLinkedListNode(val);

    if (!this.head) {
      this.head = novoNoAntes;
    }
    else {//junta o head atual e o novo
      this.head.previous = novoNoAntes;
      novoNoAntes.next = this.head;
      novoNoAntes.previous = null;
    }
    this.head = novoNoAntes;//newNode agora é o head

    this.length++;
    return this;
  }

  delete() {
    while (this.length > 0) {
      this.pop();
    }
  }

  count() {
    return this.length
  }

  printList() {
    //console.log(data);
    if (this.head) {
      let current = this.head;
      while (current.next) {
        console.log(current.data);
        current = current.next;
      }
      console.log(current.data);
    }
    else {
      console.log('empty list');
    }
  }
};


var list = new DoublyLinkedList;
