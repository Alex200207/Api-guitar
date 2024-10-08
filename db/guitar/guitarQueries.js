import config from '../../config.js';

const respuesta = (err,result,resolve,reject) => {
    if(err){
        console.log(err);
        reject(err);
    }
    else{
        resolve(result);
    }
};

const guitarQueries = () => {
    return new Promise((reject,resolve) => {
        config.query('SELECT * FROM guitarras', (err,result) => {
            respuesta(err,result,resolve,reject);
        });
    })
}

const guitarQuery = (id) => {
    return new Promise((reject,resolve) => {
        config.query('SELECT * FROM guitarras WHERE id = ?',[id],(err,result) => {
            respuesta(err,result,resolve,reject);
        })
    })


}

export {
     guitarQueries,
     guitarQuery,
}