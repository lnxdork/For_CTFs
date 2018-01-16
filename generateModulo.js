/* The majority of this code is based on Heap's Permutation Algorithm.
The original source is available here: https://gist.github.com/dsernst/2570de0dc7d44a8cbbd0

The remainder of this code is from https://codemash.hacking-lab.com/codemash/challenge.html?id=15

A javascript unpacker ( http://matthewfl.com/unPacker.html) was used to deobfuscate the code.
Jan 2018
lnxdork
*/

var swap = function (array, pos1, pos2) {
	var temp = array[pos1];
	array[pos1] = array[pos2];
	array[pos2] = temp;
  };
  
  var heapsPermute = function (array, output, n) {
	n = n || array.length; // set n default to array.length
	if (n === 1) {
	  output(array);
	} else {
	  for (var i = 1; i <= n; i += 1) {
		heapsPermute(array, output, n - 1);
		if (n % 2) {
		  var j = 1;
		} else {
		  var j = i;
		}
		swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
	  }
	}
};
  
var print = function(input){
var p = input.join("");
checkEntries(p);
};
  
heapsPermute(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], print);
  

function checkEntries(p)
	{
	var u="cavs";
	//var p="";
	var used=[0,0,0,0,0,0,0,0,0,0];
	var ok=false;
	if(u==='cavs')
		{
		if(p>0&&p.length==10)
			{
			ok=true;
			for(i=1;i<=10;i++){
				var digit=p.charAt(i-1);
				var part=p.substring(0,i);
				if(used[digit]!=0||part%i!=0)
					{
					ok=false
				}
				if(used[digit]==0)
					{
					used[digit]=1
				}
			}
		}
	}
	if(ok)
		{
		console.log('palm_'+u+'_'+p+'.html');
	}
	else
		{
		//console.log('nope')
	}
}
