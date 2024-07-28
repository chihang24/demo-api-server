import { User } from "./autu.model";

export const createNewUser = async (username, email, password) {
    const newUser = {
        USERNAME: username,
        EMAIL: email,
        PASSWORD: password
    }
    const response = await User.create(newUser)
    return response
}