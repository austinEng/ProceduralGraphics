

function LinkedList() {
  // LOOK: this is the object we will return. Attach functions and values to this
  var linkedList = {}

  // LOOK: define private variables for your object
  var _length = 0
  var _head = null
  var _tail = null

  // LOOK: define public variables for your object (discouraged)
  linkedList.publicThing = 'trynottodothis'


  // LOOK: define a private inner class / private functions
  function Node(value) {

    var node = {
      value: value, // LOOK: this is a public variable on Node
    }

    var _next = null
    var _prev = null

    node.next = function() {
      return _next
    }

    node.prev = function() {
      return _prev
    }

    return node
  }


  // LOOK: define public methods for your object
  linkedList.head = function() {
    return _head
  }

  linkedList.tail = function() {
    return _tail
  }

  linkedList.length = function() {
    return _length
  }

  linkedList.append = function(value) {
    var node = Node(value)
    if (_length == 0) {
      _head = node
      _tail = node
    } else {
      _tail.next = node
      node.prev = _tail
      _tail = node
    }
    _length += 1
  }

  linkedList.prepend = function(value) {
    var node = Node(value)
    if (_length == 0) {
      _head = node
      _tail = node
    } else {
      _head.prev = node
      node.next = _head
      _head = node
    }
    _length += 1
  }

  linkedList.pop = function() {
    var node = _tail
    if (_length == 1) {
      _head = null
      _tail = null  
    } else {
      _tail = node.prev
      _tail.next = null
    }
    _length -= 1
    return node.value
  }

  linkedList.shift = function() {
    var node = _head
    if (_length == 1) {
      _head = null
      _tail = null
    } else {
      _head = node.next
      _head.prev = null
    }
    _length -= 1
    return node.value
  }

  // return the object
  return linkedList
}

// LOOK: These are the functions we want to expose for this module
export default {
  LinkedList
}