<script>
	// Javascript implementation of the above approach.
	
	// Recursive function to return 
	// gcd of a and b 
	function __gcd(a, b) 
	{ 
		// Everything divides 0 
		if (a == 0) 
			return b; 
		if (b == 0) 
			return a; 
		
		// base case 
		if (a == b) 
			return a; 
		
		// a is greater 
		if (a > b) 
			return __gcd(a - b, b); 
		return __gcd(a, b - a); 
	} 
	
	// Function to find the ratio of 
	// two mixtures
	function alligation(x, y, m)
	{
		// Find the cheaper among x and y
		let c = (x <= y) ? x : y;
		
		// Find the dearer among x and y
		let d = (x >= y) ? x : y;
	
		// Find ratio r1:r2
		let r1 = (d - m);
		let r2 = (m - c);
	
		// Convert the ration into 
		// simpler form
		let gcd = __gcd(r1, r2);
	
		document.write(parseInt(r1 / gcd, 10) + ":" + parseInt(r2 / gcd, 10));
	}
	
	let x, y, z;
	x = 50;
	y = 70;
	z = 65;

	alligation(x, y, z);


</script>
