var express = require('express');
var routers = express.Router();
var path = require('path');
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('usda_nutrition.json', 'utf8'));

routers.get('/', function(req, res){
    res.render('index', {
        json: obj
    });
});

routers.post('/get-nutrition-values&:item_id', function(req, res){
    var item_id = req.params.item_id.split('=').pop();
    for(var i = 0; i < obj.A266FF2A662E84b639DA.length; i++){
        if(obj.A266FF2A662E84b639DA[i].NDB_No == item_id){
            res.send(obj.A266FF2A662E84b639DA[i]);
        }
    }
});

module.exports = routers;