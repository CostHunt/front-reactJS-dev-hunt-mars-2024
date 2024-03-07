import { _http } from "./http";

export async function getAllPosts(token){
    const resp = await _http.get("post/limit/30", {
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

    const resp = await _http.get("/groupe/"+ idGroupe , {
        headers: {
            'X-access-token': token
        }
    })
    return resp
}

export async function likePost(token, userid, postid){ 
    const resp = await _http.put(`/post/${userid}/like/${postid}/`, {
        headers: {
            'X-access-token': token
        }
    })
    return resp
}

export async function deletePost(token, postid){
    const resp = await _http.delete(`/post/${postid}`, {
        headers: {
            'X-access-token': token
        }
    })
    return resp
}

export async function isResolved(token, postid){
    const resp = await _http.put(`post/isresolved/${postid}`, {
        headers: {
            'X-access-token': token
        }
    })
    return resp
}