document.write("Find the 2nd largest number in an array"+"<br>");
document.write("----------------------------------------"+"<br>");

let arr=[0,30,12,5,69,-2,4,-10];
let b=[];
temp=0;
document.write("the given array:" +arr+"<br>");

for(let i=0;i<arr.length;i++)
{
	for(let j=i+1;j<arr.length;j++)
	{
		if(arr[i]<arr[j])
		{
			temp=arr[j];
			arr[j]=arr[i];
			arr[i]=temp;
		}
		
	}
	b.push(arr[i]);
}
 
 document.write("The Descending array elements:"+b+"<br>");
 document.write("The 2nd largest number in array :"+b[1]);