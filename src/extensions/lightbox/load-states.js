
export const LOAD_STATES = Object.freeze({
    PENDING: "pending",
    LOADED: "loaded",
    ERROR: "error",
});


export const isLoadingFinished = (itemLoadState) => {
    return itemLoadState === LOAD_STATES.LOADED || itemLoadState === LOAD_STATES.ERROR;
}
