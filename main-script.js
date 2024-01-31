let input_body = document.querySelector('#container');
let destr = false;
let dropdown_selecter = ['каждый месяц','раз в месяц',"один раз"];
const year_input = document.getElementById('year');
let input_type = 'text'
function add_selecter(container,add_class,select1,select2,select3,default_value){
    const selectElement = document.createElement('select');
    selectElement.classList.add(add_class);

    const option1 = document.createElement('option');
    option1.textContent = select1;
    option1.value = '1';
    selectElement.appendChild(option1);

    const option2 = document.createElement('option');
    option2.textContent = select2;
    option2.value = '2';
    selectElement.appendChild(option2);

    const option3 = document.createElement('option');
    option3.textContent = select3;
    option3.value = '3';
    selectElement.appendChild(option3);

    selectElement.classList.add('selecter');
    
    selectElement.value=default_value;

    container.appendChild(selectElement);

}
if (localStorage.getItem('start-moneys')==null){
    localStorage.setItem('start-moneys','0');
}
if (localStorage.getItem('types')==null){
    localStorage.setItem('types','');
}
if (localStorage.getItem('names')==null){
    localStorage.setItem('names','') 
}
if (localStorage.getItem('date-values')==null){
    localStorage.setItem('date-values','');
}
if (localStorage.getItem('inputs')==null){
}
else {
    let local_list = localStorage.getItem('inputs').split(',');
    let local_list_names = localStorage.getItem('names').split(',');
    let local_types = localStorage.getItem('types').split(',');
    let date_list = localStorage.getItem('date-values').split(',');
    for(let i=0;i<local_list.length;i++){
        const add_div = document.createElement('div');
        add_div.classList.add('string');
        if (local_list[i]!=''){
        const newInputElement = document.createElement('input');
        newInputElement.type = input_type;
        newInputElement.classList.add('input');
        newInputElement.classList.add('right_input');
        newInputElement.value=local_list[i];

        if (local_list_names[i]!=''){
            const newInputElement = document.createElement('input');
            newInputElement.type = 'text';
            newInputElement.classList.add('name_input');
            newInputElement.value=local_list_names[i];
            add_div.appendChild(newInputElement);
        }
        add_div.appendChild(newInputElement);
        add_selecter(add_div,'selecter',dropdown_selecter[0],dropdown_selecter[1],dropdown_selecter[2],local_types[i]);
        const newDateElement = document.createElement('input');
        if (local_types[i]=='2'){
            newDateElement.type=input_type
        }
        else{
            newDateElement.type='date';
        }
        newDateElement.placeholder='дата...'
        newDateElement.value=date_list[i];
        newDateElement.classList.add('date_input');
        const del_button = document.createElement('div');
        del_button.classList.add('del_button');
        add_div.appendChild(del_button);
        add_div.appendChild(newDateElement);
    }
    document.querySelector("#start_moneys").value=localStorage.getItem('start-moneys');
    if (local_list[i]!=''){
        input_body.appendChild(add_div);
    }

}
}
function get_full_sum(value){
    var fullsumm = value.replace(/\s+/g, '');
    fullsumm = fullsumm * 1;
    return fullsumm
}
function normalizate_num(value){
    value = parseInt(value)
    return value.toLocaleString();
}
function get_only_num(num){
    return ''+num.replaceAll(' ','');
}
function update(){
    add_btn_del();
    if (localStorage.getItem('koo')=='yes'){
        document.querySelector('.like').innerHTML='';
        let l = document.createElement('label')
        l.textContent='спасибо за оценку!';
        document.querySelector('.like').appendChild(l)
    }
    let allINPUTS = document.querySelectorAll('.input');
    let values_for_local_save = [];
    for (let i =0;i<allINPUTS.length;i++){
        allINPUTS[i].onchange = (e)=>{allINPUTS[i].value=normalizate_num(get_only_num(allINPUTS[i].value.toString()))}
        values_for_local_save.push(allINPUTS[i].value);
        if (allINPUTS[i].value!=''){
            if (parseInt(allINPUTS[i].value)>0){
                allINPUTS[i].classList.remove('red_input');
                allINPUTS[i].classList.remove('yellow_input');
                allINPUTS[i].classList.add('green_input');
            }
            else if (parseInt(allINPUTS[i].value)<0){
                allINPUTS[i].classList.remove('green_input');
                allINPUTS[i].classList.remove('yellow_input');
                allINPUTS[i].classList.add('red_input');
            }
            else{
                allINPUTS[i].classList.remove('green_input');
                allINPUTS[i].classList.remove('red_input');
                allINPUTS[i].classList.add('yellow_input');
            }
        }
        
    }
    localStorage.setItem('inputs',values_for_local_save);
    let allnameinput = document.querySelectorAll('.name_input');
    let namesforlocalsave = [];
    for (let i=0;i<allnameinput.length;i++){
        namesforlocalsave.push(allnameinput[i].value);
    }
    localStorage.setItem('names',namesforlocalsave);
    let dropdowns = document.querySelectorAll('.selecter');
    let dropdowns_inputs = document.querySelectorAll('.date_input');
    for(let i =0;i<dropdowns.length;i++){
        if (dropdowns[i].value==1){
            dropdowns_inputs[i].style.display='none';
        }
        else if (dropdowns[i].value==2){
            dropdowns_inputs[i].style.display='block';
            dropdowns_inputs[i].type=input_type;
        }
        else{
            dropdowns_inputs[i].style.display='block';
            dropdowns_inputs[i].type='date';
        }
    }
    let all_type_dropdowns =document.querySelectorAll('.selecter');
    let types = [];
    for(let i =0;i<all_type_dropdowns.length;i++){
        types.push(all_type_dropdowns[i].value);
    }
    localStorage.setItem('types',types);
    localStorage.setItem('start-moneys',document.querySelector("#start_moneys").value);
    let date_values = [];
    let all_tags = document.querySelectorAll('.date_input')
    for(let i=0;i<all_tags.length;i++){
        date_values.push(all_tags[i].value);
    }
    localStorage.setItem('date-values',date_values);
}
function new_input() {
    // Create a new input element.
    let allINPUTS = document.querySelectorAll('.input');
    const newInputElement = document.createElement('input');
    newInputElement.type = input_type;
    newInputElement.classList.add('input');
    newInputElement.classList.add('right_input');

    const newNameElement = document.createElement('input');
    newNameElement.type='text'
    newNameElement.placeholder='название...'
    newNameElement.classList.add('name_input');

    const add_div = document.createElement('div');
    add_div.classList.add('string');

    const newDateElement = document.createElement('input');
    newDateElement.type='date'
    newDateElement.placeholder='дата...'
    newDateElement.classList.add('date_input');

    const del_button = document.createElement('div');
    del_button.classList.add('del_button');
    add_div.appendChild(newNameElement);
    add_div.appendChild(newInputElement);
    add_div.appendChild(newDateElement);
    add_div.appendChild(del_button)
    add_selecter(add_div,'selecter',dropdown_selecter[0],dropdown_selecter[1],dropdown_selecter[2],'1');
    let values_for_local_save = [''];
    for (let i =0;i<allINPUTS.length;i++){
        values_for_local_save.push(allINPUTS[i].value);
        
    }
    localStorage.setItem('inputs',values_for_local_save);
    input_body.appendChild(add_div);
    
  }

setInterval(update,1000);
function convert_date(d){
    if (d==undefined){
        return null;
    }
    let month,day,year;
    year = d.getFullYear();
    if (parseInt(d.getMonth())<=8){
        month = '0'+(d.getMonth()+1);
    }
    else{
        month = ''+(d.getMonth()+1);
    }
    if (parseInt(d.getDate())<=9){
        day = '0'+(d.getDate());
    }
    else{
        day = ''+(d.getDate());
    }
    return (''+day+'-'+month+'-'+year);
}
blur_all_inputs('.right_input');
blur_all_inputs('.name_input');
function get_all_month_data(){
    let allNormMoney = document.querySelectorAll('.selecter');
    let allnumsNorm = document.querySelectorAll('.right_input');
    let inp_date = document.querySelectorAll('.date_input');
    let sorted_inputs = [];
    let sorted_days = [];
    for (let i=0;i<allNormMoney.length;i++){
        if (allNormMoney[i].value=='2'){
            sorted_inputs.push(get_full_sum(allnumsNorm[i].value));
            if (inp_date[i].value<=9){
                sorted_days.push('0'+inp_date[i].value);
            }
            else{
                sorted_days.push(inp_date[i].value);
            }
        }
    }
    return {nums:sorted_inputs,days:sorted_days};

}
function get_all_one_date(){
    let one_date = document.querySelectorAll('.selecter');
    let inp_date = document.querySelectorAll('.date_input');
    let inp_num = document.querySelectorAll('.right_input');
    let sorted_date = [];
    let sorted_inputs = [];
    for (let i=0;i<one_date.length;i++){
        if (one_date[i].value=='3'){
            sorted_date.push(inp_date[i]);
            sorted_inputs.push(get_full_sum(inp_num[i].value));
        }
}
    return {date:sorted_date,nums:sorted_inputs};
}
function get_values_from_list(list){
    let values = [];
    for(let i=0;i<list.length;i++){
        values.push(list[i].value);
    }
    return values;
}
function normalized_date(str){
    let s = str.split("-");
    return ""+s[2]+'-'+s[1]+'-'+s[0];
}
function get_all_norm_date(days){
    let allNormMoney = document.querySelectorAll('.selecter');
    let allnumsNorm = document.querySelectorAll('.right_input');
    let sorted_inputs = [];
    for (let i=0;i<allNormMoney.length;i++){
        if (allNormMoney[i].value=='1'){
            sorted_inputs.push(get_full_sum(allnumsNorm[i].value)/days);

        }
}   
    let value =0
    for (let i=0;i<sorted_inputs.length;i++){
        value+=sorted_inputs[i];
    }
    return value
}
function generate_data(new_date){
    let month_data = get_all_month_data();
    let nums_month = month_data.nums;
    let days_month = month_data.days;
    let date = [get_full_sum(document.querySelector("#start_moneys").value)];
    let date2 = [0]
    let sorted_one_inputs = get_all_one_date();
    let norm_value = get_all_norm_date(30);
    let sorted_one = sorted_one_inputs.date;
    let sorted_one_nums = sorted_one_inputs.nums;
    let sorted_one_values = get_values_from_list(sorted_one);
    sorted_one_values.forEach(e=>{
        let i = sorted_one_values.indexOf(e);
        sorted_one_values[i] = normalized_date(sorted_one_values[i]);
    });
    for (let i=0;i<new_date.length;i++){
        date2.push(0);
        let n=parseInt(date[i]);
        let now_day = new_date[i].split('-')[0];
        if (days_month.includes(now_day)){
            n+=parseInt(nums_month[days_month.indexOf(now_day)])
        }
        if (sorted_one_values.includes(new_date[i])){
            let num_index = sorted_one_values.indexOf(new_date[i]);
            console.log(sorted_one_nums,num_index)
            n+=parseInt(sorted_one_nums[num_index]);
        }
        n+=norm_value;
        n = Math.round(n);
        date.push(n)
    }
    return {'1':date,'2':date2};
}
function add_btn_del(){
    for (btn of document.querySelectorAll('.del_button')){
        btn.addEventListener('click', function(event) {
            const button = event.target;
            let all_string = document.querySelectorAll('.string');
            for(let string of all_string){
                if(string.contains(button)){
                    document.querySelector('#container').removeChild(string)
                }
            }
            
        });
    }
}
  
function view(){
    let all_nums_inputs = document.querySelectorAll('.right_input');
    let all_select_inputs = document.querySelectorAll('.selecter');
    for (let i = 0;i<all_nums_inputs.length;i++){
        if (all_nums_inputs[i].value==''){
            alert('вы не заполнили все платежные значения');
            return;
        }
    }
    let all_date_inputs = document.querySelectorAll('.date_input')
    for (let i = 0;i<all_nums_inputs.length;i++){
        if (all_date_inputs[i].value==''){
            if (all_select_inputs[i].value!='1'){
                alert('вы не заполнили все даты');
                return;
            }
        }
        if(all_date_inputs[i].type==input_type){
            
            if (all_date_inputs[i].value>=32){
                alert('вы поставили число, которого не бывает');
                return;
            }
        }
    }
    let date = getDateRange(new Date(getNowDate()),new Date(getDateBiggerNow(parseInt(year_input.value))));
    let new_date = [];
    for (let i =0;i<date.length;i++){
        new_date.push(convert_date(date[i]));
    }
    let gd = generate_data(new_date)
    let d = gd['1'];
    document.querySelector('#end').value=normalizate_num(d[d.length-1]);
    add_chart(new_date,gd['1'],gd['2']);
    fetch('https://script.google.com/macros/s/AKfycbxg4m5doQJJjeFoQhIRJl9uu8ZpKDdSPyvp2mQJaBOfLtjuuLgIOLMGG7N-W_PL48Kc1A/exec',{
        method:'GET',
        mode: "cors"
    })
}

year_input.addEventListener('change',(e)=>{
    if (year_input.value<1){
        year_input.value=1;
    }
    if (year_input.value>20){
        year_input.value=20;
    }
    year_input.value = Math.round(year_input.value);
})

update();


document.querySelector('#start_moneys').addEventListener("change", function(event){
    add_separator(event.target.value)
})

function add_separator(value){
  var chars = value.split("").reverse()
  var withCommas = []
  for(var i = 1; i <= chars.length; i++ ){
    withCommas.push(chars[i-1])
    if(i%3==0 && i != chars.length ){  
      withCommas.push("")
    }
  }
  var val = withCommas.reverse().join("")
  document.querySelector('#start_moneys').value = val
}
