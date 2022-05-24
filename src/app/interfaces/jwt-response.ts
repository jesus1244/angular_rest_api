export interface JwtResponse {
    dataUser: {
        id:             number,
        nombre:         string,
        usuario:        string,
        accesToken:     string,
        expiresIn:      string
    }
}
