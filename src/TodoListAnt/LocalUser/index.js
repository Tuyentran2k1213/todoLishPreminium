const KEY = 'save user to local';

const LocalUser = {
    setUser(value) {
        const stringData = JSON.stringify(value);
        localStorage.setItem(KEY, stringData);
    },
    getUser() {
        const data = localStorage.getItem(KEY);
        return JSON.parse(data);
    },
    removeUser() {
        if(this.getUser())
            localStorage.removeItem(KEY);
    }
}

export default LocalUser;