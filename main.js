function wordSearch(query, seq){
    let result = seq.filter(str => str.toLowerCase().includes(query.toLowerCase()))
    return result.length ? result : ['Empty']
  }


console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])) // => [ 'ab', 'abc', 'zab' ]
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"])) // => [ 'ab', 'abc', 'zab' ]
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"])) // => [ 'Empty' ]