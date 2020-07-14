export function elementsIterator(elementCallback) {
    for (let i = 0; i < this.elements.length; i++) {
        if (typeof elementCallback === 'function') {
            elementCallback(this.elements[i])
        } else if (elementCallback) {
            console.error('provided callback is not a function')
        }
    }
    return this
}