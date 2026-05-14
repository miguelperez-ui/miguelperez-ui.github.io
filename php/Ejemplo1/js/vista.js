// view.js
const View = {
    render(items) {
        const $list = $('#ol-item-list');
        $list.empty(); // Limpia la lista

        items.forEach((item,id) => {
            $list.append(`<li data-index="${id}">${item}</li>`);
        });
    },
};
