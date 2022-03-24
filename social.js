class People {
    constructor(name) {
        this.name = name;
        this.relatives = [];
    }
    getAllRelatives() {
        return this.relatives;
    }
    addrelative(id) {
        this.relatives.push(id)
    }
}