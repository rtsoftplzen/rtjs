export function elementsIterator(elementCallback, outputType) {
    const output = []
    for (let i = 0; i < this._elements.length; i++) {
        if (typeof elementCallback === 'function') {
            output.push(elementCallback(this._elements[i]))
        } else if (elementCallback) {
            console.error('RTJS: provided callback is not a function')
        }
    }
    return outputType === 'callback' ? output : this
}

export const isElementInCollection = (list, element) => {
    for(let i = 0; i < list.length; i++){
        if (list[i] === element) return true
    }

    return false
}