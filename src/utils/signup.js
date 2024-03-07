import { _http } from "./http";

export async function signup(data){
    const val = await _http.post('/auth/register/', data)
    return val.data
}