const getURLSlug = (words) => words.replace(/\s+/g, '-').toLowerCase()

// Example
console.log(getURLSlug('Za Warudo'))
console.log(getURLSlug('Hello WorudO'))
