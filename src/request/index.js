export const SRC = 'http://localhost:3001/'

export async function getArticlesforHome(){
    const response =  await fetch(SRC + 'articles/show-all')
    const articles = await response.json()
    return articles
}

export async function getCommentsforArticles(id){
    const response =  await fetch(SRC + 'articles/comments?id=' + id)
    const comments = await response.json()
    return comments
}

export async function getAllComments(){
    const response =  await fetch(SRC + 'articles/all-comments')
    const comments = await response.json()
    return comments
}

export async function getArticles(id){
    const response =  await fetch(SRC + `articles/show?id=${id}`)
    const article = await response.json()
    return article
}

export async function getAuthor(id){
    const response =  await fetch(SRC + `users/author?id=${id}`)
    const article = await response.json()
    return article
}