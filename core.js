'use strict'
import './helpers/polyfills'
import { elementsIterator, isElementInCollection } from './helpers/common'
import lightbox from './extensions/lightbox/lightbox'

const InitRTJS = () => {

    return {

        // events

        _eventsLiveListeners: { click: [] },

        onLiveEvent: function (eventName, selector, eventCallback) {
            if (!this._eventsLiveListeners[eventName].length) {
                document.body.addEventListener(eventName, (event) => {
                    this._eventsLiveListeners[eventName].forEach(eventListener => {
                        if (isElementInCollection(document.body.querySelectorAll(eventListener.selector), event.target)) {
                            eventListener.eventCallback(event)
                        }
                    })
                })
            }
            this._eventsLiveListeners[eventName].push({ selector, eventCallback })

        },

        // actions witch nodes list

        query: function (selector) {

            const queryContext = {

                // returned (by query selector) elements collection 

                _elements: document.body.querySelectorAll(selector),

                // closest parent

                closest: function (closestSelector) {
                    const newElements = []
                    elementsIterator.call(this, (element) => {
                        const closestEl = element.closest(closestSelector)
                        closestEl ? newElements.push(closestEl) : null
                    })
                    this._elements = newElements
                    return this
                },

                // each iterator

                each: function (elementCallback) {
                    return elementsIterator.call(this, elementCallback)
                },

                // classList modifications

                addClass: function (className) {
                    return elementsIterator.call(this, (element) => {
                        element.classList.add(className)
                    })
                },
                removeClass: function (className) {
                    return elementsIterator.call(this, (element) => {
                        element.classList.remove(className)
                    })
                },
                toggleClass: function (className) {
                    return elementsIterator.call(this, (element) => {
                        element.classList.toggle(className)
                    })
                },

                // visibility

                toggle: function (toggle) {
                    return elementsIterator.call(this, (element) => {
                        if (toggle === true) {
                            element.style.display === 'none' ? element.style.removeProperty('display') : null
                        } else if (toggle === false) {
                            element.style.display = 'none'
                        } else {
                            element.style.display === 'none' ? element.style.removeProperty('display') : element.style.display = 'none'
                        }
                    })
                },

                // attributes

                attr: function (name, value) {
                    if (value === null || value === undefined) {
                        return elementsIterator.call(this, (element) => {
                            return element.getAttribute(name)
                        }, 'callback')
                    } else {
                        return elementsIterator.call(this, (element) => {
                            element.setAttribute(name, value)
                        })
                    }
                },

                // html content

                html: function (content) {
                    return elementsIterator.call(this, (element) => {
                        if (content) {
                            element.innerHTML = content
                        } else {
                            return element.innerHTML
                        }
                    }, content ? undefined : 'callback')
                },
            }

            return queryContext
        }

        // future (XHR, ...) ?
    }

}

export default (() => InitRTJS())()