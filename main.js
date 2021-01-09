new Vue({
  el: '#app',
  data() {
    return {
      show: false,
      info: null,
      message: 'Hello Vue.js!',
      index: 0
    }
  },
  mounted() {
    axios
      .get('https://script.google.com/macros/s/AKfycbzW2ze_EaQqZwE6T1tTdbMfv4e9el4MjIMVAGUZrKiRoMVhFQs/exec')
      //.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))

  },
 
  methods: {
    getAnswer: function (index, valAnswer) {
      //var x = document.getElementById('xxx');
      //alert(value);
      document.getElementById('answer').innerHTML = valAnswer;
      this.show = !this.show;
      this.message = this.message.split('').reverse().join('')
    }
  }
})

//-----------------------------------------------------------------
searchWord = function () {

  var searchResult,
    searchText = $(this).val(), // 検索ボックスに入力された値
    targetText,
    hitNum;

  // 検索結果を格納するための配列を用意
  searchResult = [];

  // 検索結果エリアの表示を空にする
  $('#search-result__list').empty();
  $('.search-result__hit-num').empty();

  // 検索ボックスに値が入ってる場合
  if (searchText != '') {
    $('.target-area li').each(function () {
      targetText = $(this).text();

      // 検索対象となるリストに入力された文字列が存在するかどうかを判断
      if (targetText.indexOf(searchText) != -1) {

        $(this).css('display', 'block');

        // 検索文字列がヒットしなかったとき
      } else {
        $(this).css('display', 'none');
      }
    });

    // 検索ボックスに入力が無い時  
  } else {

    // li要素に繰り返し
    $('.target-area li').each(function () {

      // 表示を戻す
      $(this).css('display', 'block');
    }
    )
  };
};

// searchWordの実行
$('#search-text').on('input', searchWord);



//-----------------------------------------------------------------
$(function(){
  $('#sortKind').click(function() {

  var r = $('option:selected').val();
  alert(r);

  var searchResult,
    selectText = $(this).val(), // 選択ボックスに入力された値
    targetText;

  // 検索結果エリアの表示を空にする
  $('#search-result__list').empty();

  // 検索ボックスに値が入ってる場合
  if (selectText != '') {
    $('.target-area li').each(function () {
      targetText = $(this).text();

      // 検索対象となるリストに入力された文字列が存在するかどうかを判断
      if (targetText.indexOf(selectText) != -1) {

        $(this).css('display', 'block');

        // 検索文字列がヒットしなかったとき
      } else {
        $(this).css('display', 'none');
      }
    });

    // 検索ボックスに入力が無い時  
  } else {

    // li要素に繰り返し
    $('.target-area li').each(function () {

      // 表示を戻す
      $(this).css('display', 'block');
    }
    )
  };
})});










