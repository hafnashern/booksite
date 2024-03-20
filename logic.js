//addbook
function addbook(event){
    event.preventDefault();
    var bookname=document.getElementById("bookname1").value
    var authername=document.getElementById("authername1").value
    var coverimage=document.getElementById("coverimg").value

    if (bookname in localStorage){
        alert("book already present")
    }
    else{
        book={bookname,authername,coverimage}
        localStorage.setItem(bookname,JSON.stringify(book))

        window.location.assign("index.html")
        alert("book added succesfully")
    }
}

//search book
function searchbook(event){
    event.preventDefault();
    var sbookname=document.getElementById("srchinpt").value
    if (sbookname in localStorage){

        bookdetails=
        JSON.parse(localStorage.getItem(sbookname))
        
        document.getElementById("result").innerHTML=
        `<div class="card" style="width: 25%;">
        <img src= "${bookdetails.coverimage}"class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Book Name : ${bookdetails.bookname}</h5>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Author Name : ${bookdetails.authername}</li>
            </ul>
        </div>`;
    }
        else {
          document.getElementById("result").innerHTML= `<h1 class="text-danger">Book is Not Found</h1>`;
        }
                } 
    
