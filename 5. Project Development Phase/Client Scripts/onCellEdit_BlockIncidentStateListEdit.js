function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
    if (table !== 'incident') { callback(true); return; }
    alert('Change the Incident state from the record form.');
    callback(false);
}
