const loadBooks = () =>{
    const searchBox = document.getElementById('search-box')
    const searchValue = searchBox.value
    searchValue.value = ''
    searchResult(searchValue)
}

const searchResult = searchText => {
    url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => showDetails(data))
    // .then(data => console.log(data))
}

const showDetails = details =>{
    // console.log(details)
    const resultBox = document.getElementById('result-box')
    const div = document.createElement('div')
    div.innerHTML = `
    <h3>Total Search Result : ${details.numFound}</h3>
    `
    div.classList.add('text-ceter')
    resultBox.append(div)
    loadDetails(details.docs)
}

// const loadDetails = results => {
//     console.log(results)
//     const div = document.createElement('div')
//     for(const res of results){
//         const name = results.title
//         console.log(name)
//     }
//     // results.forEach(result => {
//     //     const name = results.title
//     //     console.log(name)
//     // })
// }
