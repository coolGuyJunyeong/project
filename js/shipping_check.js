$.ajax({
    type: "get", //데이터를 읽어오는 방식
    url: "./json/shipping.json", //요청할 url, 또는 파일명
    dataType: "json" , //＂서버에서 전송받을 데이터형식",
    success: function(data){// 정상 요청, 응답 시 처리
        console.log("succese");
        console.log(data);
        $(".shipping_list").append("<p>"+data[1][0].key()+"</p>");
    },
    error: function(xhr){
        console.log("error");
    },
});