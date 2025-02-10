/*
 * function that makes it easier to dynamically import images
 */

export const getImageUrl = (path) => {
    return new URL(`assets/${path}`, import.meta.url).href
}
