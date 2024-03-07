import { _http } from "./http";

export async function getAllDocs(token, uid){
    const resp = await _http.get("/project/" + uid, {
        headers: {
            'X-access-token': token
        }
    })
    return resp.data
}


export async function createDocs(token, data){
    console.log(data)
    const resp = await _http.post("/project/" ,data, {
        headers: {
            'X-access-token': token
        }
    })
    return resp.data
}

export async function updateDocs(token, data, pid){
    const resp = await _http.put("/project/" +  pid ,data, {
        headers: {
            'X-access-token': token
        }
    })
    return resp.data
}