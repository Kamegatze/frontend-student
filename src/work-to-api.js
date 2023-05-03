export class WorkToApi {
    __url = 'http://127.0.0.1:8000/dean/student';

    async getResourse (url) {
        const res = await fetch(`${this.__url}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        const body = await res.json();
        return body;
    }

    async addResourse(url, body) {
        const res = await fetch(`${this.__url}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body),
        })

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
    }

    async removeResource(url, body) {
        const res = await fetch(`${this.__url}${url}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body),
        })

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
    }

    async updateResource(url, body) {
        const res = await fetch(`${this.__url}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body),
        })

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
    }

    async getAllStudent () {
        const res = await this.getResourse('/getAll');
        return res;
    }

    addStudent (body) {
        this.addResourse('/create', body);
    }
    
    remeoveStudent (body, id) {
        this.removeResource(`/delete_and_update/${id}`, body);
    }
    
    updateStudent(body, id) {
        this.updateResource(`/delete_and_update/${id}`, body);
    }
}


