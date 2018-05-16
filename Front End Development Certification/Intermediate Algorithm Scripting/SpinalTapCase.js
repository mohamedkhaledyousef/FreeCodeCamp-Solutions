
function spinalCase(str) { 
    var st=/([a-z])([A-Z])/g,
        regEx=/[\s_-]/g;

    return str.replace(st,"$1 $2").replace(regEx,"-").toLowerCase();
}

spinalCase('The_Andy_Griffith_Show');

