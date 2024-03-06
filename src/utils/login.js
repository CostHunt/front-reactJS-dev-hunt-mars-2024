import { _http } from "./http"

export const login = async (username, password) => {
    const data = {
        username: username,
        password: password
    }
    const resp = await _http.post('/auth/login', JSON.stringify(data))
    return resp.data.token
}
