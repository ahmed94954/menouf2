function renderInf(){
   db.collection('resturant').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if(change.doc.data().name !== ""){
      let section = document.createElement("SECTION");
      section.className = "bg-light";
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
      // var t2 = document.createTextNode(change.doc.data().number);
      // var t3 = document.createTextNode(change.doc.data().adress);
      // p.appendChild(t2);
      // p2.appendChild(t3);
      section.appendChild(div);
      div.appendChild(img);
        div.appendChild(divText);
      divText.appendChild(h);
      divText.appendChild(p)
      divText.appendChild(p2)
      document.body.appendChild(section)
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

}
