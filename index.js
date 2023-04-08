

function tim(){

const pName=document.getElementsByClassName('product-name')
// console.log(pName)
const product=document.querySelectorAll('.product')
// console.log(product)
const searchBar=document.getElementById('search-btn').value.toUpperCase();
// console.log(searchBar)
const pList=document.getElementById('product-list')
// console.log(pList)


for(let letter=0; letter<pName.length ; letter++){
	let match=product[letter].getElementsByTagName('h4')[0]
	console.log(match ,'match')

if(match){
	let textValue=match.innerHTML
	console.log(textValue , 'textvalue')
	if(textValue.toUpperCase().indexOf(searchBar) > -1){
		console.log(textValue.toUpperCase().indexOf(searchBar))
		product[letter].style.display = ''
	}else{
		product[letter].style.display = 'none'
	}


	
}

}

}

