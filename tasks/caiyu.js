/**
 * 彩云天气 api定时任务 查询未来一小时的天气情况
 *
 */

 const url = "https://api.caiyunapp.com/v2.5/ptXyJVyj6Siwou5E/114.6544,22.1552/hourly?hourlysteps=1";
 const method = "GET";
 const headers = {"Field": "test-header-param"};
 const data = {"info": "abc"};
 
 const myRequest = {
     url: url,
     method: method, // Optional, default GET.
     headers: headers, // Optional.
     body: JSON.stringify(data) // Optional.
 };
 
 $task.fetch(myRequest).then(response => {
     // response.statusCode, response.headers, response.body
     let dataObj = JSON.parse(response.body);
     let resInfo = {'location':'深圳紫荆花园'};
     let desc = dataObj.result.forecast_keypoint;
     resInfo.desc = desc;
     
     //let desc = response.body.result.forecast_keypoint;
 //if(desc != undefined){
 //	console.log(desc);
 //}
     $notify("彩云天气预报！测试", "位置：" + resInfo.location, desc); // Success!
     $done();
 }, reason => {
     // reason.error
     $notify("Title", "Subtitle", reason.error); // Error!
     $done();
 });
 