function onChange(control, oldValue, newValue, isLoading) {

    if (isLoading) {
        return;
    }

    if (newValue == 'software') {
        g_form.setMandatory('business_justification', true);
    } else {
        g_form.setMandatory('business_justification', false);
    }
}
