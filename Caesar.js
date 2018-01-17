var coupons = ["nvojubmq",
"emph",
"sfwmjt",
"faopsc",
"fopttfsq",
"pxuttfsq"];

function isValidCoupon(coupon) {
	coupon = coupon.toUpperCase();
	for(var i=0; i<coupons.length; i++) {
		decrypted = decrypt(coupons[i]);
		if(coupon == decrypted){
			ajaxFunction(coupon);
			return true;
		}
	}
	return false;	
}

function decrypt(code){
	code = code.toUpperCase();
	alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	caesar = '';
	for (i = code.length ;i >= 0;i--){	
		for (j = 0;j<alpha.length;j++){		
			if(code.charAt(i) == alpha.charAt(j)){
				caesar = caesar + alpha.charAt((j+(alpha.length-1))%alpha.length);
			}		
		}
	}	
        print(caesar);
	return caesar;
}

for (var i in coupons){
  decrypt(coupons[i]);
}
