import { _http } from "./http";

export async function getAllDocs(token, uid){
    const resp = await _http.get("/project/" + uid, {
        headers: {
            'X-access-token': token
        }
    })
    return resp.data
}