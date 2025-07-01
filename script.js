
document.getElementById("startButton").addEventListener("click", function () {
  const names = ["小松菜と炙り鮭チーズ", "山わさびとクリームチーズ", "ダブル昆布", "梅きんぴらごぼう", "大葉みそ", "じゃがいもとカレーそぼろ"];
  const images = ["onigiri_0_0.jpg", "onigiri_0_1.jpg", "onigiri_0_2.jpg", "onigiri_1_0.jpg", "onigiri_1_1.jpg", "onigiri_1_2.jpg"];
  const descriptions = [
    "小松菜と鮭の相性バツグン！香ばしくてほっとする味。",
    "ツンと辛い山わさびがやみつき。刺激好きなあなたに。",
    "2種の昆布で深い旨味。シンプルだけど奥深い。",
    "梅とごぼうの絶妙バランス。しっかり者なあなたにぴったり。",
    "味噌の風味と大葉の爽やかさが魅力。和の心を大切にするタイプ。",
    "ボリューム満点、食べ応えあり。元気いっぱいなあなたに！"
  ];

  const index = Math.floor(Math.random() * names.length);
  document.getElementById("onigiri-name").textContent = names[index];
  document.getElementById("onigiri-image").src = images[index];
  document.getElementById("onigiri-image").alt = names[index];
  document.getElementById("onigiri-description").textContent = descriptions[index];
  document.getElementById("result").classList.remove("hidden");
});
