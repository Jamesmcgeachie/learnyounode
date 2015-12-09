function addArgs(arguments) {
	var total = 0;
	for (var i = 2; i < arguments.length; i++ ) {
		total += Number(arguments[i]);
	};
	console.log(total);
};

addArgs(process.argv)