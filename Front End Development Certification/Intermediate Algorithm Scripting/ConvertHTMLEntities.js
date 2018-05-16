
function convertHTML(str) {
    
    str=str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
    
    return str;
    
}

convertHTML("Dolce & Gabbana");

//Second solution
/*
function convertHTML(str) {
    var subStr=str.split('');

    for (var i=0; i<subStr.length ;++i) 
    {
        if (subStr[i]=='&') 
            subStr[i]='&amp;';
        else if (subStr[i]=='>') 
            subStr[i]='&gt;';
        else if (subStr[i]=='<') 
            subStr[i]='&lt;';
        else if (subStr[i]=='\"') 
            subStr[i]='&quot;';
        else if (subStr[i]=='\'') 
            subStr[i]="&apos;";

    }

    subStr=subStr.join('');
    
    return subStr;
}

convertHTML("Dolce & Gabbana");

*/