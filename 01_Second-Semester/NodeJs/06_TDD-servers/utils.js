function getBookCount(books){
    return books.length
}

function getBookTitle(books){
    return books.map(book => book.title)
}

function getHighestBookYear(book){
    const bookYears = book.map(book => book.year)
    return Math.max(...bookYears)
}


function bookIsInDb(id, books){
    const book = books.some(book => book.id === id)

    try{
        if (book){
        return true
    }
    else{
        throw new Error (`Book with id ${id} not found`)
    }
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    getBookCount, getBookTitle, getHighestBookYear, bookIsInDb
}