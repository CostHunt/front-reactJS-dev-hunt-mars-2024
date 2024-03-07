import { _http } from "./http";

export async function getComment(token, idPost){
    const resp = await _http.get('/comment/' + idPost, {
        headers: {
            'X-access-token': token
        }
    })
    return resp.data
}

export async function comment(token, idAccount, idPost, contenu){
    const body = {
        id_account:idAccount,
        id_post:idPost,
        contenu:contenu
    }
    console.log(idAccount)
    console.log(idPost)
    const resp = await _http.post('/comment', body, {
        headers: {
            'X-access-token': token
        }
    })
    return resp.data
}