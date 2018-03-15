function getBounds(connection,data,callback){
 
    var query = connection.query("SELECT * FROM `bound_profile` ",{category:data.category},function(err, rows, fields) {
   //console.log(query.sql);
  
    if (!err){
                
           if(rows.length > 0){
               var dataArray = [];
               for(var i= 0; i < rows.length; i++){
                   var post_info = {
                        id:rows[i]['id'],
                        name:rows[i]['name'],
                        bound_image:rows[i]['bound_image'],
                        description:rows[i]['description'],
                        category:rows[i]['category'],
                        bounds_length:rows[i]['bounds_length'],
                        bounds_duration:rows[i]['bounds_duration'],
                    }
                    dataArray.push(post_info);
               }
                callback({status:1,data:dataArray,message:"Success"});
           }else{
               callback({status:0,message:"No posts"});
           }
        
    }else{console.log("errror in sql syntax "+err);}
 });
}
function searchBounds(connection,data,callback){
 
    var query = connection.query("SELECT * FROM `bound_profile` WHERE `name` LIKE '%?%'",[data.search_field],function(err, rows, fields) {
   //console.log(query.sql);
  
    if (!err){
                
           if(rows.length > 0){
               var dataArray = [];
               for(var i= 0; i < rows.length; i++){
                   var post_info = {
                        id:rows[i]['id'],
                        name:rows[i]['name'],
                        bound_image:rows[i]['bound_image'],
                        description:rows[i]['description'],
                        category:rows[i]['category'],
                        bounds_length:rows[i]['bounds_length'],
                        bounds_duration:rows[i]['bounds_duration'],
                    }
                    dataArray.push(post_info);
               }
                callback({status:1,data:dataArray,message:"Success"});
           }else{
               callback({status:0,message:"No posts"});
           }
        
    }else{console.log("errror in sql syntax "+err);}
 });
}

exports.getBounds = getBounds;
exports.searchBounds = searchBounds;
