export function elementsIterator(elementCallback, outputType) {
    const output = []
    for (let i = 0; i < this.elements.length; i++) {
        if (typeof elementCallback === 'function') {
            output.push(elementCallback(this.elements[i]))
        } else if (elementCallback) {
            console.error('provided callback is not a function')
        }
    }
    return outputType === 'callback' ? output : this
}