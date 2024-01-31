function get_full_sum(value){
    var fullsumm = value.replace(/\s+/g, '');
    fullsumm = fullsumm * 1;
    return fullsumm
}
function normalizate_num(value){
    //value = parseInt(value)
    return value.toLocaleString();
}