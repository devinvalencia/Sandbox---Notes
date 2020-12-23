var gr = new GlideRecord('automation_error_msg');
gr.query();
while (gr.next()) {
  gr.status = 3;
  gr.update();
}