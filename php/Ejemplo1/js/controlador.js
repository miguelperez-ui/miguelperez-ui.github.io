// controller.js
const Controller = {
    init() {
        this.bindEvents();
        this.updateView();
    },
    bindEvents() {
        $('#add-item-button').on('click', function(){
            const newItem=$('#item-input').val();

            if (newItem) {
                Model.addItem(newItem);
                Controller.updateView();
            }
        });
        $('#ol-item-list').on('click','li', function(){
            const index = $(this).data('index');
            Model.deleteItem(index);
            Controller.updateView();
        })
    },
    updateView() {
        const items = Model.getItems();
        View.render(items);
    },

};
