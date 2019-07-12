function renderInf(){

   db.collection('resturant').where('type', '==', 'excellent').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {


      if(change.doc.data().name !== "" ){
        console.log(change.doc.data().name )

      let section = document.getElementById("SECTION1");
      section.className = "bg-light";
      section.style.display ="block"
       let div = document.createElement('div');
       div.className = "half d-md-flex d-block"
        let divText = document.createElement('div');
        divText.className = "text";
        divText.setAttribute("data-aos", "fade-right");
       var img = document.createElement("IMG");
       img.className = "class"
        img.src= change.doc.data().url[0]
       img.setAttribute("data-aos", "fade");
       img.setAttribute("style", "width:550px");
       img.setAttribute("style", "height:550px");
       var h = document.createElement("H2")                // Create a <h1> element
       var t = document.createTextNode(change.doc.data().name);     // Create a text node
         h.appendChild(t);
      var p = document.createElement("p");
        var p2 = document.createElement("p");

      div.appendChild(img);
        div.appendChild(divText);
      divText.appendChild(h);
      divText.appendChild(p)
      divText.appendChild(p2)
    section.appendChild(div);
       let id = change.doc.id
      var a = document.createElement('a');
      var linkText = document.createTextNode("read more");
      a.appendChild(linkText);
      a.title = "read more";
      a.href = 'details/'+id;
        divText.appendChild(a)

    }
});

});
db.collection('resturant').where('type', '>=', 'medium').onSnapshot(snapshot => {
 let changes = snapshot.docChanges();
 changes.forEach(change => {


   if(change.doc.data().name !== "" ){
     console.log(change.doc.data().name )

   let section = document.getElementById("SECTION2");
   section.className = "bg-light";
   section.style.display ="block"
    let div = document.createElement('div');
    div.className = "half d-md-flex d-block"
     let divText = document.createElement('div');
     divText.className = "text";
     divText.setAttribute("data-aos", "fade-right");
    var img = document.createElement("IMG");
    img.className = "class"
     img.src= change.doc.data().url[0]
    img.setAttribute("data-aos", "fade");
    img.setAttribute("style", "width:550px");
    img.setAttribute("style", "height:550px");
    var h = document.createElement("H2")                // Create a <h1> element
    var t = document.createTextNode(change.doc.data().name);     // Create a text node
      h.appendChild(t);
   var p = document.createElement("p");
     var p2 = document.createElement("p");

   div.appendChild(img);
     div.appendChild(divText);
   divText.appendChild(h);
   divText.appendChild(p)
   divText.appendChild(p2)
 section.appendChild(div);
    let id = change.doc.id
   var a = document.createElement('a');
   var linkText = document.createTextNode("read more");
   a.appendChild(linkText);
   a.title = "read more";
   a.href = 'details/'+id;
     divText.appendChild(a)

 }
});

});
db.collection('resturant').where('type', '==', 'bad').onSnapshot(snapshot => {
 let changes = snapshot.docChanges();
 changes.forEach(change => {


   if(change.doc.data().name !== "" ){
     console.log(change.doc.data().name )

   let section = document.getElementById("SECTION3");
   section.className = "bg-light";
   section.style.display ="block"
    let div = document.createElement('div');
    div.className = "half d-md-flex d-block"
     let divText = document.createElement('div');
     divText.className = "text";
     divText.setAttribute("data-aos", "fade-right");
    var img = document.createElement("IMG");
    img.className = "class"
     img.src= change.doc.data().url[0]
    img.setAttribute("data-aos", "fade");
    img.setAttribute("style", "width:550px");
    img.setAttribute("style", "height:550px");
    var h = document.createElement("H2")                // Create a <h1> element
    var t = document.createTextNode(change.doc.data().name);     // Create a text node
      h.appendChild(t);
   var p = document.createElement("p");
     var p2 = document.createElement("p");

   div.appendChild(img);
     div.appendChild(divText);
   divText.appendChild(h);
   divText.appendChild(p)
   divText.appendChild(p2)
 section.appendChild(div);
    let id = change.doc.id
   var a = document.createElement('a');
   var linkText = document.createTextNode("read more");
   a.appendChild(linkText);
   a.title = "read more";
   a.href = 'details/'+id;
     divText.appendChild(a)

 }
});

});
var sers = document.getElementById("sers")
console.log(sers)
sers.addEventListener('click', (e) => {
  e.preventDefault;
  var ss = document.getElementById("search").value;
  console.log(ss);
localStorage.setItem("x", ss);
})
}
