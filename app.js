const loadBooks = () =>{
    const searchBox = document.getElementById('search-box')
    const searchValue = searchBox.value
    searchResult(searchValue)
}

const searchResult = searchText => {
    if(searchText !== ''){
        url = `https://openlibrary.org/search.json?q=${searchText}`
        fetch(url)
        .then(res => res.json())
        .then(data => loadDetails(data.docs))
    }
    else{
        const emptyDiv = document.getElementById('countDivShow')
        emptyDiv.innerHTML = `
        <h1>Invalid Search Text</h1>
        <p class="text-center">Please Enter Valid Name</p>
        `
        const resultBox = document.getElementById('result-box') 
        resultBox.innerText= ''
    }
}

const loadDetails = results => {
    document.getElementById('search-box').value = ''
    const resultBox = document.getElementById('result-box') 
    const countDivShow = document.getElementById('countDivShow') 
    countDivShow.textContent = ''
    const parentDiv = document.createElement('div')
    // Counting search result
    const countResult = document.createElement('div')
    countResult.innerHTML = `
    <h3>Total Search Result : ${results.length}</h3>
    `
    countDivShow.append(countResult)
    // For Each Using
    results.forEach(result => {
        const div = document.createElement('div')
        const imageUrl = (`https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`)
        div.innerHTML = `
            <div class="card h-100">
                <img src = ${imageUrl ? imageUrl:'No Image'} class="mx-auto"  width='250px' height='300px'>
                <h5> Name : ${result.title}</h5>
                <h5>Author Name: ${result.author_name}</h5>
                <h5>Publish year : ${result.first_publish_year}</h5>
                <h6>Publishers : ${result.publisher}</h6>
            </div>
        `
        // Addig styles to child div
        div.classList.add('p-1')
        div.style.border = '3px solid #ccc'
        div.style.borderRadius = '10px'
        div.style.color = '#000'
        div.style.padding = '10px'
        div.style.margin = '5px'
        parentDiv.append(div)
    })
    // Adding style in
    parentDiv.classList.add('text-center')
    parentDiv.style.display = 'grid'
    parentDiv.style.gridTemplateColumns = 'repeat(4, 1fr)'
    // Adding All Element in Result-Box div
    resultBox.textContent = ''
    resultBox.append(parentDiv)
}
