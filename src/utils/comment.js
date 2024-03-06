import { _http } from "./http";

export async function getComment(token, idPost){
    const resp = await _http.get('/comment/' + idPost, {
        headers: {
            'X-access-token': token
        }
    })
    return resp.data
}