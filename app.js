"use strict";

/* Sepet start codes */
//Sayaç: tıklanıldığında artıp azalacak olan sayaç bileşenidir.
var counter = 0;
var counter2 = 0;
var counter3 = 0; //Artırma fonksiyonu: çağrıldığında arttırma işlemini yapıp tekrar againCall() fonksiyonunu çağırır.

var counterPlus = function counterPlus() {
  counter++;
  againCall();
}; //Azaltma fonksiyonu: çağrıldığında azaltma işlemini yapıp tekrar againCall() fonksiyonunu çağırır.


var counterMinus = function counterMinus() {
  counter--;
  againCall();
};

var counterPlus2 = function counterPlus2() {
  counter2++;
  againCall2();
};

var counterMinus2 = function counterMinus2() {
  counter2--;
  againCall2();
};

var counterPlus3 = function counterPlus3() {
  counter3++;
  againCall3();
};

var counterMinus3 = function counterMinus3() {
  counter3--;
  againCall3();
}; //Event
//againCall fonksiyonu: butonlara tıklandığında counter olaylarını gerçekleştirir.


function againCall() {
  //Template yapımızı oluşturur.
  var eventTuto = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement("p", {
    id: "p1"
  }, "1.Forma Adeti: ", counter)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, ' ', /*#__PURE__*/React.createElement("button", {
    //Kullanıcı butona tıkladığında(onClick event ile) arttırma işlemini yapar.
    onClick: counterPlus,
    className: "btn btn-danger" //CSS yapıları
    ,
    style: {
      fontSize: '14px',
      backgroundColor: "brown",
      borderColor: "brown",
      borderRadius: "0.25rem",
      boxSizing: "border-box",
      width: "30px"
    },
    id: "plus_id"
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, ' ', /*#__PURE__*/React.createElement("button", {
    //Kullanıcı butona tıkladığında(onClick event ile) azaltma işlemini yapar.
    onClick: counterMinus,
    className: "btn" //CSS yapıları
    ,
    style: {
      fontSize: '14px',
      backgroundColor: "blue",
      borderColor: "blue",
      borderRadius: "0.25rem",
      boxSizing: "border-box",
      width: "30px"
    },
    id: "minus_id"
  }, "-"))))); //Ekranda template(eventTuto)-root(plus_minus) yapısını gösterir.

  ReactDOM.render(eventTuto, document.getElementById('plus_minus'));
} //Fonksiyonu çağırır.


againCall(); //Event2

function againCall2() {
  var eventTuto2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement("p", {
    id: "p2"
  }, "2.Forma Adeti: ", counter2)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, ' ', /*#__PURE__*/React.createElement("button", {
    onClick: counterPlus2,
    className: "btn btn-danger",
    style: {
      fontSize: '14px',
      backgroundColor: "brown",
      borderColor: "brown",
      borderRadius: "0.25rem",
      boxSizing: "border-box",
      width: "30px"
    },
    id: "plus_id2"
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, ' ', /*#__PURE__*/React.createElement("button", {
    onClick: counterMinus2,
    className: "btn",
    style: {
      fontSize: '14px',
      backgroundColor: "blue",
      borderColor: "blue",
      borderRadius: "0.25rem",
      boxSizing: "border-box",
      width: "30px"
    },
    id: "minus_id2"
  }, "-")))));
  ReactDOM.render(eventTuto2, document.getElementById('plus_minus2'));
}

againCall2(); //Event3

function againCall3() {
  var eventTuto3 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement("p", {
    id: "p3"
  }, "3.Forma Adeti: ", counter3)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, ' ', /*#__PURE__*/React.createElement("button", {
    onClick: counterPlus3,
    className: "btn btn-danger",
    style: {
      fontSize: '14px',
      backgroundColor: "brown",
      borderColor: "brown",
      borderRadius: "0.25rem",
      boxSizing: "border-box",
      width: "30px"
    },
    id: "plus_id3"
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, ' ', /*#__PURE__*/React.createElement("button", {
    onClick: counterMinus3,
    className: "btn",
    style: {
      fontSize: '14px',
      backgroundColor: "blue",
      borderColor: "blue",
      borderRadius: "0.25rem",
      boxSizing: "border-box",
      width: "30px"
    },
    id: "minus_id3"
  }, "-")))));
  ReactDOM.render(eventTuto3, document.getElementById('plus_minus3'));
}

againCall3();
/* Sepet ends codes */

/* Timer start codes */

function timerClock() {
  var time = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, " ", new Date().toLocaleTimeString(), " "))); //Ekranda template(time)-root(timer_id) yapısını gösterir.

  ReactDOM.render(time, document.getElementById('timer_id'));
}

$(function () {
  //Gösterme butonuna tıklama işlemi
  $("#gosterButon").click(function () {
    //show: fonksiyon içindeki timer root bileşeni görünür olacak şekilde ayarlanır.
    $("#timer_id").show(); //Bir metodu sürekli belirli aralıklarla çağırır.

    setInterval(timerClock, 1000);
  }); //Kapatma butonuna tıklama işlemi

  $("#kapatButon").click(function () {
    //hide: fonksiyon içindeki timer root bileşeni gizli olacak şekilde ayarlanır.
    $("#timer_id").hide(); //setInterval: timerClock() fonksiyonunu sürekli belirli aralıklarla çağırır.

    setInterval(timerClock, 1000);
  });
});
/* Timer ends codes */

/* Todolist start codes */
//Nesne oluşturma

var listItemObject = {
  //İki tane static yapı
  title: 'Blog sayfama eklememi istediğiniz yerleri yazabilirsiniz...',
  listCounter: 'Eklenecek Yer Sayısı',
  //Listelenecek dizi değişkeni tanımlaması
  data: []
}; //List clear
//listItemObject nesnesinden gelen data dizi listesini temizler.

var clearList = function clearList() {
  listItemObject.data = []; //Son değişikliği gösterir.

  formTutorial();
}; //onSubmit


function formOnSubmit(event) {
  //Preventdefault kavramı ilgili elementin tarayıcı tarafından o an yaptığı varsayılan işlemi engellemeye yarar.
  event.preventDefault(); //formInput'ın value değerini event yapısı ile alır.

  var formInputData = event.target.elements.formInput.value;

  if (formInputData) {
    //Gelen bir data var ise sona ekleme yapar.
    //push: sona ekleme yapar.
    listItemObject.data.push(formInputData); //Form bileşenini görmek için çağırdık.

    formTutorial(); //Son durumda input içini boşaltır.

    event.target.elements.formInput.value = '';
  }
} //Göndere tıkladıkça liste eleman sayısı artar.


function formTutorial() {
  //Template yapısı
  var form = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-capitalize mt-2",
    style: {
      color: "brown",
      fontSize: "15px"
    }
  }, listItemObject.title, " ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-smile",
    style: {
      fontSize: "18px",
      color: "blue"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "black",
      fontSize: "15px"
    }
  }, listItemObject.listCounter, " : ", listItemObject.data.length), /*#__PURE__*/React.createElement("p", {
    className: "text-capitalize mt-2",
    style: {
      color: "black",
      fontSize: "14px"
    }
  }, "Ekleme listesi"), /*#__PURE__*/React.createElement("ul", {
    style: {
      color: "black",
      fontSize: "13px"
    }
  }, listItemObject.data.map(function (temp) {
    //toString: kendisine tanımlanan değişken değerini string olarak değiştirerek döndürür.
    return /*#__PURE__*/React.createElement("li", {
      className: "text-capitalize",
      key: temp.toString()
    }, " ", temp, " ");
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: formOnSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    name: "formInput",
    style: {
      color: "black",
      fontSize: "13px",
      marginTop: "3px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger mr-3",
    style: {
      fontSize: "0.75rem",
      padding: "0 1rem",
      marginBottom: "1rem",
      marginRight: "1rem"
    },
    type: "submit"
  }, "G\xF6nder"), /*#__PURE__*/React.createElement("button", {
    onClick: clearList,
    className: "btn btn-primary",
    style: {
      fontSize: "0.75rem",
      padding: "0 1rem",
      marginBottom: "1rem",
      marginRight: "1rem"
    }
  }, "Temizle")))), /*#__PURE__*/React.createElement("form", {
    className: "d-flex mb-30"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-control",
    style: {
      marginRight: "25px",
      marginTop: "20px",
      fontSize: "13px",
      color: "black"
    },
    type: "text",
    placeholder: "arama ..."
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      backgroundColor: "brown",
      fontSize: "0.75rem",
      padding: "0 1.4rem",
      marginTop: "18px",
      marginBottom: "1rem",
      marginRight: "1rem"
    },
    type: "submit"
  }, "Arama"))); //Ekranda template(form)-root(todolistId) yapısını gösterir.

  ReactDOM.render(form, document.getElementById('todolistId'));
} //Fonksiyonu çağırır.


formTutorial();
/* Todolist ends codes */

/* İletişim Form Validation start codes */

$(document).ready(function () {
  $("#basic_form").validate({
    //Özel yapılar
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    //rules start codes
    //Rules bölümü name içindeki değer ile çalışılır.
    rules: {
      //Rules name üzerinden ilerler.
      name: {
        //Bu kısım özellikleri eklediğimiz kısımdır.
        required: true,
        //Minimum 3 uzunluğunda bir name olmalıdır.
        minlength: 3
      },
      email: {
        required: true,
        //Email kurallarına uymalıdır.
        email: true
      },
      konu: {
        minlength: 8,
        //Maksimum 20 uzunluğunda bir konu olmalıdır.
        maxlength: 20
      },
      mesaj: {
        required: true,
        minlength: 3,
        maxlength: 50
      }
    },
    //message
    //Özel bir yapıdır. Rules ile aynı hizada yazılır.
    //Name değişkeninin içindeki değer ile çalışır.
    //Rules kısmında aldığımız özellikleri sağlamaz ise geriye dönecek olan mesajlar kısmıdır.
    messages: {
      name: {
        minlength: "Lütfen en az 3 karakter giriniz...",
        required: "Ad alanı boş geçilemez..."
      },
      email: {
        required: "Email alanı boş geçilemez",
        email: "Email formatında girmediniz örneğin: xyz@deneme.com"
      },
      konu: {
        minlength: "Lütfen en az 8 karakterli konu giriniz...",
        maxlength: "Lütfen en fazla 20 karakterli konu giriniz..."
      },
      mesaj: {
        required: "Lütfen mesajınızı giriniz...",
        minlength: "Lütfen en az 3 karakterli mesaj giriniz...",
        maxlength: "Lütfen en fazla 50 karakterli mesaj giriniz..."
      }
    }
  });
}); //Bu kodlar ile uyarılar ekranda görünür formu kapatmadığımız sürece.

/* İletişim Form Validation ends codes */

/* Responsive NavBar Top start codes */

$(document).ready(function () {
  //NAVBAR 
  //scrollTop: Web sayfasında sayfanın istenilen yerini sayfa yüklendiğinde göstermek için kullanılır.
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
      //slideDown: aşağıya kaydırma efektidir.
      $("#main-nav").slideDown(700);
    } else {
      //slideUp: yukarı kaydırma efektidir.
      $("#main-nav").slideUp(700);
    }
  }); //RESPONSIVE MENU
  //click: tıklama gerçekleşince çalışır.

  $('.responsive').on('click', function (e) {
    //slideToggle: seçilen nesneyi durumuna göre gösterir veya gizler.
    $('.nav-menu').slideToggle();
  });
});
/* Responsive NavBar Top ends codes */
