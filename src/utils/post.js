import { _http } from "./http";

export async function getAllPosts(token){
    const resp = await _http.get("/post", {
        headers: {
            'X-access-token': token
        }
    })
    return resp
}

export async function createNewPost(token, descr, idGroupe, idAccount){
    const body = {
        description : descr,
        id_groupe : idGroupe,
        id_account : idAccount
    }
    const resp = await _http.post("/post",body, {
        headers: {
            'X-access-token': token
        }
    })
    return resp
}

export async function getPostsbyGroup(token, idGroupe){
    const body = {
        description : descr,
        id_groupe : idGroupe,
        id_account : idAccount
    }
    const resp = await _http.groupe("/groupe/"+ idGroupe ,body, {
        headers: {
            'X-access-token': token
        }
    })
    return resp
}