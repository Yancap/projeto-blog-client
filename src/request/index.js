export const SRC = 'http://localhost:3001/'


// ARTICLE AND COMMENTS GET
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

export async function getUserArticles(token){
    const response =  await fetch(SRC + `articles/show/user`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    const author = await response.json()
    return author
}
export async function getUserComments(token){
    const response =  await fetch(SRC + `comments/show/user`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    const author = await response.json()
    return author
}

// SEARCH REQUEST
export async function searchArticleByContent(query){
    const response =  await fetch(SRC + `search?title=${query}`)
    const article = await response.json()
    return article
}

// USERS REQUEST
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

export async function authTokenRequest(token){
    const response =  await fetch(SRC + `users/login`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    const userData = await response.json()
    return userData
}

export async function registerRequest(data){
    const response =  await fetch(SRC + `users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const userData = await response.json()
    return userData
}

export async function changeAvatar(avatar, token){
    const response =  await fetch(SRC + `users/avatar`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({avatar: avatar})
    })
    const message = await response.json()
    return message
}

// ARTICLES POST / PUT / DELETE
export async function createArticles(article, token){
    const response =  await fetch(SRC + `articles/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(article)
    })
    const message = await response.json()
    return message
}

export async function deleteArticles(article_id, token){
    const response =  await fetch(SRC + `articles/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({article_id: article_id})
    })
    const message = await response.json()
    return message
}