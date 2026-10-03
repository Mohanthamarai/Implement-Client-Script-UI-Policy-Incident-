function onSubmit() {
    if (g_form.getValue('impact') !== '1') return true;
    var valid = true;
    if (g_form.getValue('assignment_group') === '') {
        g_form.showFieldMsg('assignment_group','Select an assignment group for a high-impact incident.','error',false);
        valid = false;
    }
    if (g_form.getValue('assigned_to') === '') {
        g_form.showFieldMsg('assigned_to','Select an assignee for a high-impact incident.','error',false);
        valid = false;
    }
    return valid;
}
