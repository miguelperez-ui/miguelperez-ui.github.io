class TareaModel {  // MAnejar las bases de datos

    lista=[];

    insertTarea(tareaEntity){
        this.lista.push(tareaEntity);
    }

    // Update

    updateTarea(id, objTarea){
        let pos = this.#buscarTarea(id);
        if(pos !== null){
            lista[pos] = objTarea;
            return false;
        }
        lista[pos]=objTarea;
        return true;
    }
    // Read
    getTareaById(id){
        return this.lista.find(tarea => tarea.id === id) ?? null;
    }

    getAllTarea(){
        return this.lista;
    }

    // Delete
    deleteTarea(id){
        let pos = this.#buscarTarea(id);
        if(pos !== null){
            lista.splice(pos,1);
            return true;
        }
        return false;
    }

    #buscarTarea(id){
        let c = 0;
        do{
            var objLista = lista[c];
            c++;
        }while(objLista.id === id && c<lista.length);
        if(c == lista.length){
            return null;

        }
        return c - 1;
    }
}