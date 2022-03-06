import { createServer } from "miragejs";

let users = [
    {email: "labas@a", pass: "abc"},
    {email: "frontend@isawesome.com", pass: "cool"}
]

createServer({
    routes() {
        this.namespace = "api"

        this.post("/users", (schema, request) => {
            let attrs = JSON.parse(request.requestBody);
            let user = attrs.user;
            let pass = attrs.pass;
            let status = false;
            if(users.find(x => x.email === user)){
                var index = users.findIndex(x => x.email === user)
                if(users[index].pass === pass){
                    status = true;
                }
            }
            return {
                status: status
            }
        })
    },
})