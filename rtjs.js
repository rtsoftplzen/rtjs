"use strict";

import { elementsIterator } from "./helpers/common";

(function (namespace) {

    window[namespace] = {

        // test injection 

        test: () => {
            console.log('RTJS injected...')
        },

        // actions witch nodes list

        query: function (selector) {

            const queryContext = {
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
                    // return queryContext
                },
                removeClass: function(className) {
                    return elementsIterator.call(this, (element) => {
                        element.classList.remove(className)
                    })
                    // return queryContext
                },
                toggleClass: function(className) {
                    return elementsIterator.call(this, (element) => {
                        element.classList.toggle(className)
                    })
                    // return queryContext
                }
            }
            return queryContext

        }
    }

})('RTJS')