// Get name of record from sys_id

var gr = new GlideRecord("sys_user_group_type");
gr.addQuery("sys_id","=","1c41edcb1baeb340dbd10d4acd4bcb3b");
gr.query();
while (gr.next()) {
  gs.info(gr.name);
}


// Pull list of variables for catalog item
var gr = new GlideRecord("item_option_new");
gr.addQuery("cat_item","=","ace7fe8a2f4508107693e0252e99b69e");
gr.addQuery("name","=","client_list");
gr.query();

while (gr.next()) {
  gs.info(gr.name);
}