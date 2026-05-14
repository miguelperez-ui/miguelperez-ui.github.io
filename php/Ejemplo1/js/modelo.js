// model.js
const Model = {
    data: {
        items: [],		// Usamos un array como BD para usar como ejemplo
    },
    addItem(item) {
        this.data.items.push(item);
    },
    getItems() {
        return this.data.items;
    },
    deleteItem(id) {
        this.data.items.splice(id, 1);
    }
};
