window.onload = function () {
	  var num;
	  var startingHeadPos;
	  var dtp = [];
	  var sstfdtp = [];
	  var max;
	  var dt=[];
	  var sstfdt=[];
	  var seekTime=0;
	  var sstfseekTime=0;
	  var queue2=[];
	  var seek=0;
	  var sstfseek=0;
	  var headCurrentPos;
	  var sstfheadCurrentPos;
	  var tempt=0;

	  

	  $("#sdet").submit(function(e){
		  num = $("#ndata").val();
		  startingHeadPos = $("#spos").val();
		  headCurrentPos = startingHeadPos;
		  var output="";
		  output +="<form id='data' method='post'>";
		  for(let i=0; i<num; i++){
			  output +="&nbsp;"+"<b style='font-size:17px;'>Track Position "+(i+1)+"&nbsp;"+":"+"&nbsp;"+"</b>"+"<input style='width: 250px;height: 25px;' type='text' id='d-"+i+"' placeholder='Track Position "+(i+1)+"'>";
		  }
		  output +="&nbsp;&nbsp;<input style='margin-top:30px;' class='button' type='submit'>";
		  output +="</form>";
		  $("#form").html(output);
		  e.preventDefault();
	  });
	  
	  $("#form").on("submit","#data",function(e){
		  dtp=[];
		  dtp.push({x:startingHeadPos,y:0});
		  for(let i=0;i<num;i++){
			  var temp=$("#d-"+i).val();
			  dt.push(parseInt(temp));
			  console.log(JSON.stringify({x:temp,y:(i+1)*10}));
			  dtp.push({x:temp,y:(i+1)*10});
		  }
		  temp = JSON.parse(JSON.stringify(dtp));
		  temp.sort(function(a,b){return b.x-a.x});
		  max=parseInt(temp[0].x)+10;
//sstf code
        sstfdtp=[];
      sstfdtp.push({x:startingHeadPos,y:0});
      for(let i=0;i<num;i++){
        var sstftemp=$("#d-"+i).val();
        sstfdt.push(parseInt(sstftemp));
        queue2[i]=Math.abs(startingHeadPos-sstfdt[i]);
      }

      for (let i=0;i<num;i++){
        var sstftemp=$("#d-"+i).val();
        sstfdt.push(parseInt(sstftemp));
          for (let j=i+1;j<num;j++){
            if(queue2[i]>queue2[j]){
               tempt=queue2[i];
               queue2[i]=queue2[j];
               queue2[j]=tempt;

               tempt=sstfdt[i];
               sstfdt[i]=sstfdt[j];
               sstfdt[j]=tempt;
            }
          }
          console.log(JSON.stringify({x:sstftemp,y:(i+1)*10}));
          sstfdtp.push({x:sstfdt[i],y:(i+1)*10});  
      }
      
      sstftemp = JSON.parse(JSON.stringify(sstfdtp));
      sstftemp.sort(function(a,b){return b.x-a.x});
      max=parseInt(sstftemp[0].x)+10;

//sstf code end
		  console.log()
		  chartDraw(dtp);
		  calSeek();
		  show();

		  var btn = document.getElementByClassName("cmpbtn");
		  btn.style.display="block";
		  btn.addEventListener("click",function(e){
		  comparesstf(e),
		 
		  show2(e),
		  calSeek2();
		  });

		  e.preventDefault();
	  });
	 
	  function comparesstf(e) {
	  	chartDraw(dtp,sstfdtp);
	  }
	 
	  function calSeek(){

		  for(let i=0;i<num;i++){
			  seekTime += Math.abs(dt[i]-headCurrentPos);
			  headCurrentPos = dt[i];
		  }
		  headCurrentPos=startingHeadPos;
		  $("#res1").html("<span style='color: green; font-size : 18px;' ><b>Total seek time is = "+seekTime+"</span>")
		  $("#res1").css("text-align", "center"); 

	  }
	   function show()
      {

      	      var para = document.createElement("P");
      	      para.innerHTML = "<h2>"+"FCFS Seek Sequences: &nbsp;"+"</h2>";
                 document.getElementById("show1").appendChild(para);
	         for (var i = 0; i < num; i++) {
	         	console.log(headCurrentPos);
	         	 seek = Math.abs(headCurrentPos-dt[i]);
	         	 var para = document.createElement("P");
                 para.innerHTML = "Disk head moves from "+headCurrentPos+" to "+dt[i]+" with seek "+seek;
                 document.getElementById("show1").appendChild(para);
                 headCurrentPos = dt[i];
	         } 

            headCurrentPos=startingHeadPos;
            sstfheadCurrentPos=headCurrentPos;
      }
      function show2(e) {
      	 var para = document.createElement("P");
      	      para.innerHTML = "<h2>"+"SSTF Seek Sequences: &nbsp;"+"</h2>";
                 document.getElementById("show2").appendChild(para);
	         for (var i = 0; i < num; i++) {
	         	console.log(sstfheadCurrentPos);
	         	sstfseek = Math.abs(sstfheadCurrentPos-sstfdt[i]);
	         	var para1 = document.createElement("P");
	         	para1.innerHTML = "SSTF Disk head moves from "+sstfheadCurrentPos+" to "+sstfdt[i]+" with seek "+sstfseek;
                document.getElementById("show2").appendChild(para1);
                sstfheadCurrentPos = sstfdt[i];
             }
             sstfheadCurrentPos=startingHeadPos;
      	
      }
      function calSeek2(e){

		  for(let i=0;i<num;i++){
			  sstfseekTime += Math.abs(sstfdt[i]-sstfheadCurrentPos);
			  sstfheadCurrentPos = sstfdt[i];
		  }
		  headCurrentPos=startingHeadPos;
		  sstfheadCurrentPos=startingHeadPos;
		  $("#res2").html("<span style='color: red; font-size : 18px;' ><b>Total seek time is = "+sstfseekTime+"</span>")
		  $("#res2").css("text-align", "center"); 

	  }

            function chartDraw(data1,data2){
		  	      
		  	      var chart = new CanvasJS.Chart("chartContainer",
			{
				animationEnabled:true,

				zoomEnabled:true,
				
				title: {
					text: "Chart of Track sequence",
					fontSize: 20
				},
				legend:{
					horizontalAlign: "left",
					verticalAlign: "top",
                     
                     fontSize: 15,
                     cursor: "pointer",
            itemclick: function (e) {
                //console.log("legend click: " + e.dataPointIndex);
                //console.log(e);
                if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                } else {
                    e.dataSeries.visible = true;
                }

                e.chart.render();
            }
				},
				axisX2:{
					title:"Tracks",
                    titleFontSize:25,
					interval: 20,
					minimum: 0,
					maximum: max
				},
				axisY:{
					reversed:true,
					lineThickness : 0,
					gridThickness : 0,
					tickThickness : 0,
					labelFormatter: function(e){
						return "";
					}
				},
				data: [
				{
					axisXType: "secondary",
					type: "line",
					name: "FCFS",
					showInLegend: true,            
					color: "green",
					dataPoints: data1
				},
				{
					axisXType: "secondary",
					type: "line", 
					name: "SSTF",
					showInLegend: true,           
					color: "red",
					dataPoints: data2
				}
				]        
			});
			chart.render();
	  }
  }