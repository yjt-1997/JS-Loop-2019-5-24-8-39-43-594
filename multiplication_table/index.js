var str="";
for(var i=1;i<10;i++){
	for(var j=1;j<=i;j++)
		str += i + " * " + j + " = " + i*j + (j==i?"\n":"\t");
}
console.log(str);