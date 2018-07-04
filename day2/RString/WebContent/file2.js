var reverstr="";
var str="hello world";
for( var p=str.length ;p>0;p--){
	reverstr+=str.substring(p-1,p);
	
}
document.write(str +  "  reverse  " + reverstr );