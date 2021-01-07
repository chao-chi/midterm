$(document).ready(function(){
    new WOW().init();

    var firebaseConfig = {
        apiKey: "AIzaSyDch_dCyYYSvGToPaxIgkK6XEYL3NiRnL4",
        authDomain: "f2e-endterm.firebaseapp.com",
        projectId: "f2e-endterm",
        storageBucket: "f2e-endterm.appspot.com",
        messagingSenderId: "49301175365",
        appId: "1:49301175365:web:86807d6ec829e5f8e2b72c",
        measurementId: "G-MG7FQY3CFF"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    const $name = $("#name");
    const $email = $("#email");
    const $message = $("#message");
    let docRef = firebase.firestore();
    let messagesRef = docRef.collection("contactUs");
    
    $("#btn_submit").click(function(){
        let name_v = $name.val();
        let email_v =$email.val();
        let message_v = $message.val();
        
        if (name_v!='' && email_v!='' && message_v!=''){
            $("#error").addClass("none");
            messagesRef.add({
                "name":name_v,
                "email":email_v,
                "message":message_v
            });
            $name.val('');
            $email.val('');
            $message.val('');
    
            $("#success").removeClass("none");
        }
        else {
            $("#success").addClass("none");
            $("#error").removeClass("none");
        }
    });

});