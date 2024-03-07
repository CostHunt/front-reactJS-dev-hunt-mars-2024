import { _http } from "./http";

export async function getUser(token, id){
    const resp = await _http.get('/account/' + id, {
        headers: token
    })
    return resp.data
}