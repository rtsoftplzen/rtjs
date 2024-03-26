

export const getCustomItemProviderByContentType = (contentType, customItemsProvider) => {
    if (!customItemsProvider) {
        return undefined;
    }
    
    return customItemsProvider.find((item) => item.contentType === contentType);
}