(function executeRule(current, previous /*null when async*/) {

    if (current.priority == 1) {
        current.approval = 'requested';
    }

})(current, previous);
