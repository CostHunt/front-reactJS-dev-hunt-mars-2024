import { _http } from "./http";

export async function getAllDocs(token){
    const resp = await _http.get("/post", {
        headers: {
            'X-access-token': token
        }
    })
    return resp
}