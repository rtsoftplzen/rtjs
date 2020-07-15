"use strict";

import { elementsIterator } from "./helpers/common";

let RTJS = {}

function InitRTJS() {

    RTJS = {

        // test injection 

        test: () => {
            console.log('RTJS injected...')
        },

        // actions witch nodes list

        query: function (selector) {

            const queryContext = {

                // returned (by query selector) elements collection 

                elements: document.body.querySelectorAll(selector),

                // each iterator

                each: function(elementCallback) {
                    return elementsIterator.call(this, elementCallback)
                },

                // classList modifications

                addClass: function(className) {
                    return elementsIterator.call(this, (element) => {
                        element.classList.add(className)
                    })
                },
                removeClass: function(className) {
                    return elementsIterator.call(this, (element) => {
                        element.classList.remove(className)
                    })
                },
                toggleClass: function(className) {
                    return elementsIterator.call(this, (element) => {
                        element.classList.toggle(className)
                    })
                },

                // attributes

                attr: function(name, value){
                    if (value === null || value === undefined){
                        return elementsIterator.call(this, (element) => {
                            return element.getAttribute(name)
                        }, 'callback')
                    } else {
                        return elementsIterator.call(this, (element) => {
                            element.setAttribute(name, value)
                        })
                    }
                }

            }
            return queryContext
        }

        // future (XHR, ...) ?
    }

}

export default (function() {
    InitRTJS()
    return RTJS
})()