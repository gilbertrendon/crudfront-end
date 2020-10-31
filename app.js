var mysql = require('mysql');
const XLSX = require('xlsx');
var conexion = mysql.createConnection({
host: 'localhost',
database: 'usuarios_db',
user: 'root',
password:''
});

function leerExcel(ruta) {
    const workbook = XLSX.readFile(ruta);
    const workbookSheets = workbook.SheetNames;

    //console.log(workbookSheets);
    //lo que va en los corchetes es el número de la página
    const sheet = workbookSheets[1];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

    //console.log(dataExcel);
    for(const itemFila of dataExcel){
        console.log(itemFila['nombre']);
    }
}

leerExcel('baseDatos.xlsx');