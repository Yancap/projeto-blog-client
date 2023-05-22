export const SRC = 'https://artech-api.onrender.com/'

export async function getArticlesForHome(){
    const response =  await fetch(SRC + 'articles/show-all')
    const articles = await response.json()
    return articles
}

export async function getSpecificComments(id){
    const response =  await fetch(SRC + 'comments/show?id=' + id)
    const comments = await response.json()
    return comments
}

export async function getAllCommentsForArticles(id){
    const response =  await fetch(SRC + 'comments/all?article_id=' + id)
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
    const author = await response.json()
    return author
}

export async function getAuthorArticles(user_id){
    const response =  await fetch(SRC + `articles/show?user_id=${user_id}`)
    const author = await response.json()
    return author
}

export async function searchArticleByContent(query){
    console.log(query);
    const response =  await fetch(SRC + `search?content=${query}`)
    console.log(response);
    const article = await response.json()
    return article
}

export async function loginRequest(data){
    const response =  await fetch(SRC + `users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const userData = await response.json()
    return userData
}