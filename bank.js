const selectElement = document.getElementById("select1");
const inputElement = document.querySelector(".input2");

// selectElement.addEventListener("change", (event) => {
//   const selectedOptionValue = event.target.value;
//   inputElement.value = selectedOptionValue;
// });

// var license_amount_data; // 儲存讀取的 JSON 資料

// 下載 JSON 檔案並將其解析為 JavaScript 物件
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     license_amount_data = JSON.parse(this.responseText);
//   }
// };
// xhr.open('GET', './data.json', true);
// xhr.send();
var license_amount_data =[{"id":1,"text":"國際稽核國際稽核軟體應用師"},{"id":2,"text":"會計師執照"}];

function openNewWindow() {
  // 取得第一筆資料
//   var license_amount = license_amount_data[0].text;

  // 創建一個新的瀏覽器窗口
  var newWindow = window.open('', '', 'width=600,height=400');
  var newContent = `
    <html> 
      <head> 
        <title>新網頁</title> 
        <link rel="stylesheet" href="bank.css"> 
      </head> 
      <body> 
        <div class="license_interface c">
          <p class="c">${license_amount_data[0].text}</p>
        </div>
        <div class="container c">
          <div class="col-lg-5 col-sm-5 category c">
            <p>資訊類</p>
          </div>
          <div class="col-lg-7 col-sm-7 category c">
            <p>國立高雄科技大學</p>
          </div>
        </div>
         <div class="container c">
          <div class="fundraising c">
            <p>募資金額<span class="t1">2080</span>元</p>
          </div>
        </div>
        <div class="container c">
            <div class="col-lg-12">
                <div class="col-lg-7">
                    <div class="line2"></div>
                </div>
                <div class="col-lg-2">
                    <p>目錄</p>
                </div>
                <div class="col-lg-3">
                    <div class="line2"></div>
                </div>
            </div>
        </div>
        <div class="container c">
            <div class="fundraiser c">
                <p>集資提案計畫者｜王OO</p>
            </div>
        </div>
        <div class="container contents_head c">
            <div class="contents c">
                <p>集資摘要</p>
            </div>
            <div class="contents c">
                <p>集資動機</p>
            </div>
            <div class="contents c">
                <p>集資計畫</p>
            </div>
            <div class="contents c">
                <p>時程規劃</p>
            </div>
            <div class="contents c">
                <p>經費規劃</p>
            </div>
        </div>

      </body> 
    </html>
  `;
  newWindow.document.write(newContent);
}


