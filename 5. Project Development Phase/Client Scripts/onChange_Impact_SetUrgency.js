function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || isTemplate || newValue === '') return;
    if (newValue === '1' && g_form.getValue('urgency') !== '1') {
        g_form.setValue('urgency', '1');
        g_form.addInfoMessage('Urgency was set to High for this high-impact incident.');
    }
}
