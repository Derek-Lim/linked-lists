const LinkedList = () => {
  let HEAD = null
  let length = 0

  const append = (value) => {
    const newNode = Node(value)
    length++
    if (HEAD === null) {
      return (HEAD = newNode)
    }
    let pointer = HEAD
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode
    }
    pointer.nextNode = newNode
  }

  const prepend = (value) => {
    const newNode = Node(value)
    length++
    if (HEAD === null) {
      return (HEAD = newNode)
    }
    newNode.nextNode = HEAD
    HEAD = newNode
  }

  const size = () => {
    if (!HEAD) return 0
    return length
  }

  const head = () => {
    if (!HEAD) return null
    return HEAD.value
  }

  const tail = () => {
    if (!HEAD) return null
    let pointer = HEAD
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode
    }
    return pointer.value
  }

  const at = (index) => {
    if (!HEAD) return null
    let pointer = HEAD
    for (let i = 0; i < index; i++) {
      pointer = pointer.nextNode
    }
    return pointer
  }

  const pop = () => {
    if (!HEAD) return null
    if (HEAD.nextNode === null) {
      HEAD = null
    }

    at(size() - 2).nextNode = null
    length--
  }

  const contains = (value) => {
    if (!HEAD) return null
    let pointer = HEAD
    while (pointer.nextNode !== null) {
      if (pointer.value === value) {
        return true
      }
      pointer = pointer.nextNode
    }
    return pointer.value === value
  }

  const find = (value) => {
    if (!HEAD) return null
    let pointer = HEAD
    let index = 0
    while (pointer.nextNode !== null) {
      if (pointer.value === value) {
        return index
      }
      index++
      pointer = pointer.nextNode
    }

    return pointer.value === value ? index : null
  }

  const toString = () => {
    if (!HEAD) return null
    let pointer = HEAD
    let result = ''
    while (pointer.nextNode !== null) {
      result = result.concat(`${pointer.value} --->`)
      pointer = pointer.nextNode
    }
    result.concat(`${pointer.value} ---> null`)
    console.log(result)
    return result
  }

  const insertAt = (value, index) => {
    if (!HEAD) return null
    const newNode = Node(value)
    length++
    let pointer = HEAD
    for (let i = 0; i < index - 1; i++) {
      pointer = pointer.nextNode
    }
    const nextNode = pointer.nextNode
    pointer.nextNode = newNode
    newNode.nextNode = nextNode
  }

  const removeAt = (index) => {
    if (!HEAD) return null
    if (index > length || index < 0) return

    if (index === 0) {
      HEAD = HEAD.nextNode
    } else {
      const prePointer = at(index - 1)
      prePointer.nextNode = prePointer.nextNode.nextNode
    }
    length--
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt
  }
}

const Node = (value) => {
  return {
    value: value || null,
    nextNode: null
  }
}
