const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..','..','uploads'),
        filename: (req, file, callBack) => {
            const ext = path.extname(file.originalname);
            const baseName = path.basename(file.originalname, ext);
            callBack(null, `${baseName} - ${Date.now()}${ext}`) // funçãoque retorna o nome do arquivo, mais a data que ele foi salvo mais a extenção dele no fim;
        },
    }),
}