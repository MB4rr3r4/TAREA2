var app = new function(){
	this.el = document.getElementById('tareas');

	this.tareas=[];
    var idtask;

	this.FetchAll = function(){	
	var data='';

		if (this.tareas.length > 0) {
                for (i = 0; i < this.tareas.length; i++){
			            data+='<tr>';
                        data+='<td>'+(i + 1)+". "+this.tareas[i] + '</td>';
                        data+='<td><button onclick="app.Edit(' + i + ')" class="btn btn-warning">Editar</button></td>';
                        data+='<td><button onclick="app.Delete(' + i + ')" class="btn btn-danger">Borrar</button></td>';
                        data+='</tr>';
                }
            }
            this.Count(this.tareas.length);
            return this.el.innerHTML = data
    };
    
    this.Add = function () {
        el = document.getElementById('AGREGAR');
        var task = el.value; 
        if(task) {
            this.tareas.push(task.trim());
            this.el.value='';
            this.FetchAll();
        } 
    };

    this.Edit = function(item){
        el = document.getElementById('editguardar');
        this.el.value = this.tareas[item]
        document.getElementById('editcelda').style.display = 'block';
        idtask = item;

    };

    this.Save = function() {
        let val = document.getElementById('edittarea').value;
            console.log("GATO", val);
                    
                if (val) {
                    this.tareas.splice(idtask, 1, val.trim());
                this.FetchAll();
                    CloseInput();
                }
                    }
        this.Delete = function (item) {
            this.tareas.splice(item, 1)
            this.FetchAll();
        
    }
    
    this.Count = function(data){
        var el = document.getElementById('contador');
        var name = 'Tarea'       
        if (data){
            if(data==1){
                name=='Tarea';
            }
            el.innerHTML = data+' '+name;
        } 
        else {
            el.innerHTML = "No "+name;   

        }
        
    };
    
}

app.FetchAll();

function CloseInput(){
    document.getElementById('editcelda').style.display = 'none';
}