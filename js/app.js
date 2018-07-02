function calc2000()
{
	bundle2000=parseInt(document.getElementById('bundle2000').value);
	packet2000=parseInt(document.getElementById('packet2000').value);
	loose2000=parseInt(document.getElementById('loose2000').value);

	if (isNaN(bundle2000)) {bundle2000=0;}
	if (isNaN(packet2000)) {packet2000=0;}
	if (isNaN(loose2000)) {loose2000=0;}

	sl2000=(packet2000*100+loose2000)*2000;
	total2000=(bundle2000*1000+packet2000*100+loose2000)*2000;

	single_lock2000=document.getElementById('sl2000');
	total_2000=document.getElementById('tot2000');
	single_lock2000.innerHTML=sl2000;
	total_2000.innerHTML=total2000;
	if (sl2000==0) 
	{
		single_lock2000.innerHTML="Single Lock";
	}
	if (total2000==0) 
	{
		total_2000.innerHTML="Total";
	}
}
/*######################################################*/
function calc500()
{
	bundle500=parseInt(document.getElementById('bundle500').value);
	packet500=parseInt(document.getElementById('packet500').value);
	loose500=parseInt(document.getElementById('loose500').value);

	if (isNaN(bundle500)) {bundle500=0;}
	if (isNaN(packet500)) {packet500=0;}
	if (isNaN(loose500)) {loose500=0;}

	sl500=(packet500*100+loose500)*500;
	total500=(bundle500*1000+packet500*100+loose500)*500;

	single_lock500=document.getElementById('sl500');
	total_500=document.getElementById('tot500');
	single_lock500.innerHTML=sl500;
	total_500.innerHTML=total500;
	if (sl500==0) 
	{
		single_lock500.innerHTML="Single Lock";
	}
	if (total500==0) 
	{
		total_500.innerHTML="Total";
	}
}
/*#########################################################*/
function calc200()
{
	bundle200=parseInt(document.getElementById('bundle200').value);
	packet200=parseInt(document.getElementById('packet200').value);
	loose200=parseInt(document.getElementById('loose200').value);

	if (isNaN(bundle200)) {bundle200=0;}
	if (isNaN(packet200)) {packet200=0;}
	if (isNaN(loose200)) {loose200=0;}


	sl200=(packet200*100+loose200)*200;
	total200=(bundle200*1000+packet200*100+loose200)*200;

	single_lock200=document.getElementById('sl200');
	total_200=document.getElementById('tot200');
	single_lock200.innerHTML=sl200;
	total_200.innerHTML=total200;
	if (sl200==0) 
	{
		single_lock200.innerHTML="Single Lock";
	}
	if (total200==0) 
	{
		total_200.innerHTML="Total";
	}
}
/*########################################################*/
function calc100()
{
	bundle100=parseInt(document.getElementById('bundle100').value);
	packet100=parseInt(document.getElementById('packet100').value);
	loose100=parseInt(document.getElementById('loose100').value);

	if (isNaN(bundle100)) {bundle100=0;}
	if (isNaN(packet100)) {packet100=0;}
	if (isNaN(loose100)) {loose100=0;}

	sl100=(packet100*100+loose100)*100;
	total100=(bundle100*1000+packet100*100+loose100)*100;

	single_lock100=document.getElementById('sl100');
	total_100=document.getElementById('tot100');
	single_lock100.innerHTML=sl100;
	total_100.innerHTML=total100;
	if (sl100==0) 
	{
		single_lock100.innerHTML="Single Lock";
	}
	if (total100==0) 
	{
		total_100.innerHTML="Total";
	}
}
/*############################################################*/
function calc50()
{
	bundle50=parseInt(document.getElementById('bundle50').value);
	packet50=parseInt(document.getElementById('packet50').value);
	loose50=parseInt(document.getElementById('loose50').value);

	if (isNaN(bundle50)) {bundle50=0;}
	if (isNaN(packet50)) {packet50=0;}
	if (isNaN(loose50)) {loose50=0;}

	sl50=(packet50*100+loose50)*50;
	total50=(bundle50*1000+packet50*100+loose50)*50;

	single_lock50=document.getElementById('sl50');
	total_50=document.getElementById('tot50');
	single_lock50.innerHTML=sl50;
	total_50.innerHTML=total50;
	if (sl50==0) 
	{
		single_lock50.innerHTML="Single Lock";
	}
	if (total50==0) 
	{
		total_50.innerHTML="Total";
	}
}
/*####################################################################*/
function calc20()
{
	bundle20=parseInt(document.getElementById('bundle20').value);
	packet20=parseInt(document.getElementById('packet20').value);
	loose20=parseInt(document.getElementById('loose20').value);

	if (isNaN(bundle20)) {bundle20=0;}
	if (isNaN(packet20)) {packet20=0;}
	if (isNaN(loose20)) {loose20=0;}

	sl20=(packet20*100+loose20)*20;
	total20=(bundle20*1000+packet20*100+loose20)*20;

	single_lock20=document.getElementById('sl20');
	total_20=document.getElementById('tot20');
	single_lock20.innerHTML=sl20;
	total_20.innerHTML=total20;
	if (sl20==0) 
	{
		single_lock20.innerHTML="Single Lock";
	}
	if (total20==0) 
	{
		total_20.innerHTML="Total";
	}
}
/*##################################################################*/
function calc10()
{
	bundle10=parseInt(document.getElementById('bundle10').value);
	packet10=parseInt(document.getElementById('packet10').value);
	loose10=parseInt(document.getElementById('loose10').value);

	if (isNaN(bundle10)) {bundle10=0;}
	if (isNaN(packet10)) {packet10=0;}
	if (isNaN(loose10)) {loose10=0;}


	sl10=(packet10*100+loose10)*10;
	total10=(bundle10*1000+packet10*100+loose10)*10;

	single_lock10=document.getElementById('sl10');
	total_10=document.getElementById('tot10');
	single_lock10.innerHTML=sl10;
	total_10.innerHTML=total10;
	if (sl10==0) 
	{
		single_lock10.innerHTML="Single Lock";
	}
	if (total10==0) 
	{
		total_10.innerHTML="Total";
	}
}
/*##################################################################*/
function calc5()
{
	 bundle5=parseInt(document.getElementById('bundle5').value);
	 packet5=parseInt(document.getElementById('packet5').value);
	 loose5=parseInt(document.getElementById('loose5').value);

	if (isNaN(bundle5)) {bundle5=0;}
	if (isNaN(packet5)) {packet5=0;}
	if (isNaN(loose5)) {loose5=0;}

	sl5=(packet5*100+loose5)*5;
	total5=(bundle5*1000+packet5*100+loose5)*5;

	 single_lock5=document.getElementById('sl5');
	 total_5=document.getElementById('tot5');
	single_lock5.innerHTML=sl5;
	total_5.innerHTML=total5;
	if (sl5==0) 
	{
		single_lock5.innerHTML="Single Lock";
	}
	if (total5==0) 
	{
		total_5.innerHTML="Total";
	}
}
/*#################################################################*/
function calc10coin()
{
	 bundle10coin=parseInt(document.getElementById('bundle10coin').value);

	if (isNaN(packet10coin)){packet10coin=0;}

	 packet10coin=bundle10coin*10;

	document.getElementById('packet10coin').innerHTML=packet10coin;

	if (packet10coin==0)
	{
		document.getElementById('packet10coin').innerHTML="Packet";
	}
}
/*#################################################################*/
function calc5coin()
{
	bundle5coin=parseInt(document.getElementById('bundle5coin').value);

	if (isNaN(packet5coin)){packet5coin=0;}

	packet5coin=bundle5coin*5;

	document.getElementById('packet5coin').innerHTML=packet5coin;

	if (packet5coin==0)
	{
		document.getElementById('packet5coin').innerHTML="Total";
	}
}
/*##################################################################*/
function calc2coin()
{
	bundle2coin=parseInt(document.getElementById('bundle2coin').value);

	if (isNaN(packet2coin)){packet2coin=0;}

	packet2coin=bundle2coin*2;

	document.getElementById('packet2coin').innerHTML=packet2coin;

	if (packet2coin==0)
	{
		document.getElementById('packet2coin').innerHTML="Total";
	}
}
/*##############################################################*/
function calc1coin()
{
	bundle1coin=parseInt(document.getElementById('bundle1coin').value);

	if (isNaN(packet1coin)){packet1coin=0;}

	packet1coin=bundle1coin*1;

	document.getElementById('packet1coin').innerHTML=packet1coin;

	if (packet1coin==0)
	{
		document.getElementById('packet1coin').innerHTML="Total";
	}
}
/*###############################################################*/
function calculate_all()
{

	if (isNaN(packet10coin)){packet10coin=0;}
	if (isNaN(packet5coin)){packet5coin=0;}
	if (isNaN(packet2coin)){packet2coin=0;}
	if (isNaN(packet1coin)){packet1coin=0;}

	if (isNaN(sl2000)){sl2000=0;}
	if (isNaN(sl500)){sl500=0;}
	if (isNaN(sl200)){sl200=0;}
	if (isNaN(sl100)){sl100=0;}
	if (isNaN(sl50)){sl50=0;}
	if (isNaN(sl20)){sl20=0;}
	if (isNaN(sl10)){sl10=0;}
	if (isNaN(sl5)){sl5=0;}

	if (isNaN(bundle2000)){bundle2000=0;}
	if (isNaN(bundle500)){bundle500=0;}
	if (isNaN(bundle200)){bundle200=0;}
	if (isNaN(bundle100)){bundle100=0;}
	if (isNaN(bundle50)){bundle50=0;}
	if (isNaN(bundle20)){bundle20=0;}
	if (isNaN(bundle10)){bundle10=0;}
	if (isNaN(bundle5)){bundle5=0;}


	total_coins=packet10coin+packet5coin+packet2coin+packet1coin;
	total_single_lock=sl2000+sl500+sl200+sl100+sl50+sl20+sl10+sl5+total_coins;
	total_double_lock=(bundle2000*2000000+bundle500*500000+bundle200*200000+bundle100*100000+bundle50*50000+bundle20*20000+bundle10*10000+bundle5*5000);
	cash_in_hand=total_single_lock+total_double_lock;

	result_cont=document.getElementById('result_cont');

	result_cont.innerHTML="Total Coins=" + total_coins + "<br>Total Single Locks=" + total_single_lock + "<br>Total Double Locks=" + total_double_lock + "<br>Total Cash in Hand= " + cash_in_hand;

}