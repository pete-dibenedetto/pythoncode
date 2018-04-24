function addRedactedName(){

  db.assets.find({}).forEach(function(doc){
       print("name ->"+doc.overview.name);
  
       db.assets.update({"_id":doc._id},{"$set":{"security.redacted":[{"data":{"overview":{"name":doc.overview.name,"email":doc.overview.email,"phone":doc.overview.phone,
         																	             "address":{"city":doc.overview.address.city,"zip":doc.overview.address.zip,"address1":doc.overview.address.address1,"address2":doc.overview.address.address2,"county":doc.overview.address.county,"state":doc.overview.address.state,"country":doc.overview.address.country}},
         																	 "details":{"gender":doc.details.gender,"cellphone":doc.details.cellphone,"birthdate":doc.details.birthdate,"title":doc.details.title}},"readers":["read_redacted_data"]},
   																	 {"data":{"details":{"title":doc.details.title}},"readers":["read_redacted_data_title"]}]}})  
  
    }
  );
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 7; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


function redactData(){
 db.assets.find({}).forEach(function(doc){
   name_scramble = makeid()
   email_scramble = makeid()
   phone_scramble = makeid()
   dob_scramble = makeid()
   title_scramble = makeid()
   cellphone_scramble = makeid()
   address1_scramble = makeid()
   address2_scramble = makeid()
   city_scramble = makeid()
   gender_scramble = makeid()
   zipcode_scramble = makeid()
   county_scramble = makeid()
   state_scramble = makeid()
   country_scramble = makeid()
   print ("Scramble-->"+name_scramble)
   db.assets.update({"_id":doc._id},{"$set":{"overview.name":name_scramble,"overview.email":email_scramble,"overview.phone":phone_scramble,
     										"overview.address.address1":address1_scramble,"overview.address.address2":address2_scramble,"overview.address.city":city_scramble,"overview.address.zipcode":zipcode_scramble,"overview.address.county":county_scramble,
     										"overview.address.state":state_scramble,"overview.address.country":country_scramble,
                                             "details.cellphone":cellphone_scramble,"details.gender":gender_scramble,"details.title":title_scramble,"details.birthdate":dob_scramble}})
   
 } 

 );  //end of for each

}


addRedactedName();

redactData();

//"security.redacted.0.data.overview.name" : "Derek Arnold"