var livros2014 = (function() {
  'use strict';

  function init() {
    start();
    bindOpenBook();
    bindHoverBook();
    bindShowBook();
    bindBackBook();
    bindShowAuthors();
    bindbackAuthors();
    bindShowPrize()
    bindShowPrizeBack()
  }

  function start() {
    var $bgElements = $('#bg-elements');
    var $bookClosed = $('#livros2014-book-closed');

    $bgElements.velocity({ opacity: 1 }, { duration: 500 , display: 'block' });
    $bookClosed.velocity({ opacity: 1 }, { duration: 500 , delay: 500, display: 'block' });
  }

  function bindOpenBook() {
    $('#livros2014-book-closed h1').on('click', function () {
      openBook();
    });
  }

  function openBook() {
    var $bookClosed = $('#livros2014-book-closed');
    var $books = $('#livros20140-books');
    var $booksOpenningDivs = $('#livros2014-book-openning', $books).find('div');
    var duracao = 100
    $books.show();
    var i = 0;
    var animOpen = window.setInterval(function(){
      if( i < 6){
        $booksOpenningDivs.eq(i).hide();
        i++;
        $booksOpenningDivs.eq(i).show();
        $bookClosed.hide()
      }
      if( i == 7){
        window.clearInterval(animOpen)
      }
    }, 90);
    window.setTimeout(function () {
      showBooks();
    }, 90 * 7)
  }

  function showBooks() {
    var $bookOpen = $('#livros2014-book-open');
    var $bookLogo = $('#livros2014-back-home');
    var $bookPrize = $('#livros2014-open-prize');
    var $books = $('.livros2014-coluna li');
    var $bookName = $('#livros2014-book-name');
    $bookOpen.show();
    $bookLogo.velocity({ opacity: 1, rotateX: 0, left: 10 }, { duration: 500, delay: 300 , display: 'block' });
    $bookPrize.velocity({ top: 20 }, { duration: 500, delay: 300 , display: 'block' });
    var i = 0
    var animOpen = window.setInterval(function(){
      $books.eq(i).velocity({ opacity: 1 }, { duration: 500 , display: 'block' });
      i++;
       if( i == 30){
        window.clearInterval(animOpen)
      }
    }, 50);
    $bookName.velocity({ opacity: 1, left: 90 }, { duration: 500, delay: 50 * 25 , display: 'block' });
  }

  function bindHoverBook() {
    var $books = $('.livros2014-coluna li');
    var $ribbon = $('#livros2014-book-name');
    var $ribbonTitle = $('h3', $ribbon);
    var $ribbonText = $('p', $ribbon);
    $books.on('mouseenter', function () {
      var $this = $(this);
      var titulo = $this.find('.titulo').text();
      var autores = $this.find('.autores').text();
      var ilustrador = $this.find('.ilustrador').text();
      var editora = $this.find('.editora').text();
      var preco = $this.find('.preco').text();
      var finalText = '';
      if(autores != ilustrador){
        if( autores != '' ){
          finalText = 'Textos de ' + autores;
        }
        if( ilustrador != '' ){
          if( autores == '' ){
            finalText += 'Ilustrações de ' + ilustrador
          } else{
            finalText += ', ilustrações de ' + ilustrador
          }
        }
      } else{
        finalText = 'Textos e ilustrações de ' + autores;
      }
      finalText += ', Editora ' + editora;
      finalText += ', R$ ' + preco;
      $ribbonTitle.text(titulo)
      $ribbonText.text( finalText )
    })
    .on('mouseleave', function() {
      $ribbonTitle.text('');
      $ribbonText.text('');
    })
  }

  function bindShowBook() {
    var $books = $('.livros2014-coluna li');
    var $booksList = $('#livros2014-book-open');
    var $bookInfo = $('#livros2014-book-info');
    var $bookLogo = $('#livros2014-back-home');
    var $bookPrize = $('#livros2014-open-prize');
    var $bookName = $('#livros2014-book-name');

    $books.on('click', function () {
      var $this = $(this);
      var img = $this.find('.image img').attr('src').replace('thumb/', '');
      var titulo = $this.find('.titulo').text();
      var editora = $this.find('.editora').text();
      var preco = $this.find('.preco').text();
      var autores = $this.find('.autores').text();
      var ilustrador = $this.find('.ilustrador').text();
      var video = $this.find('.video').text();
      var descricaoLivro = $this.find('.descricaoLivro').text();

      var finalText = '';
      if(autores != ilustrador){
        if( autores != '' ){
          finalText = 'Textos de ' + autores;
        }
        if( ilustrador != '' ){
          if( autores == '' ){
            finalText += 'Ilustrações de ' + ilustrador
          } else{
            finalText += ', ilustrações de ' + ilustrador
          }
        }
      } else{
        finalText = 'Textos e ilustrações de ' + autores;
      }
      finalText += ', Editora ' + editora;
      finalText += ', R$ ' + preco;

      $('#livros2014-book-info-image img').attr('src', img );
      $('#livros2014-book-info-author h3').text(titulo);
      $('#livros2014-book-info-author p').text(finalText);
      $('#livros2014-book-info-author div').text(descricaoLivro);
      $booksList.velocity({ opacity: 0 }, { duration: 500 , display: 'none' });
      $bookLogo.velocity({ top: 10 }, { duration: 500 , display: 'block' });
      $bookPrize.velocity({ top: -80 }, { duration: 500 , display: 'block' });
      $bookName.velocity({ left: 1000 }, { duration: 500 , display: 'block' });
      $bookInfo.velocity({ opacity: 1 }, { duration: 500, delay: 250 , display: 'block' });
    });
  }

  function bindBackBook() {
    var $booksList = $('#livros2014-book-open');
    var $bookInfo = $('#livros2014-book-info');
    var $bookLogo = $('#livros2014-back-home');
    var $bookPrize = $('#livros2014-open-prize');
    var $bookName = $('#livros2014-book-name');
    $('#livros2014-voltar').on('click', function() {
      $booksList.velocity({ opacity: 1 }, { duration: 500 , display: 'block' });
      $bookLogo.velocity({ top: 360 }, { duration: 500 , display: 'block' });
      $bookPrize.velocity({ top: 20 }, { duration: 500 , display: 'block' });
      $bookName.velocity({ left: 90 }, { duration: 500 , display: 'block' });
      $bookInfo.velocity({ opacity: 0 }, { duration: 500, delay: 250 , display: 'none' });
    });
  }

  function bindShowAuthors() {
    var $bookInfo = $('#livros2014-book-info');
    var $bookAuthor = $('#livros2014-book-author');
    var $bookOpen = $('#livros2014-book-openning');
    var $bookHome = $('#livros2014-back-home');
    $('#livros2014-sobre').on('click', function () {
      $bookOpen.velocity({ opacity: 0 }, { duration: 500 , display: 'none' });
      $bookInfo.velocity({ opacity: 0 }, { duration: 500 , display: 'none' });
      $bookHome.velocity({ opacity: 0 }, { duration: 500,  display: 'none' });
      $bookAuthor.velocity({ opacity: 1 }, { duration: 500, delay: 250,  display: 'block' });
    });
  }

  function bindbackAuthors() {
    var $backAuthors = $('#livros2014-book-author-back');
    var $bookInfo = $('#livros2014-book-info');
    var $bookAuthor = $('#livros2014-book-author');
    var $bookOpen = $('#livros2014-book-openning');
    var $bookHome = $('#livros2014-back-home');

    $backAuthors.on('click', function () {
      $bookOpen.velocity({ opacity: 1 }, { duration: 500 , display: 'block' });
      $bookInfo.velocity({ opacity: 1 }, { duration: 500 , display: 'block' });
      $bookAuthor.velocity({ opacity: 0 }, { duration: 500,  display: 'none' });
      $bookHome.velocity({ opacity: 1 }, { duration: 500,  display: 'block' });
    });
  }

  function bindShowPrize() {
    var $bookPrize = $('#livros2014-open-prize');
    var $bookPrizeArea = $('#livros2014-book-prize');
    var $booksList = $('#livros2014-book-open');
    var $bookLogo = $('#livros2014-back-home');
    var $bookName = $('#livros2014-book-name');
    var $bookOpen = $('#livros2014-book-openning');
    $bookPrize.on('click', function() {
      $bookPrize.velocity({ top: -100 }, { duration: 500 , display: 'block' });
      $bookLogo.velocity({ opacity: 0 }, { duration: 500 , display: 'none' });
      $bookName.velocity({ left: 1000 }, { duration: 500 , display: 'none' });
      $booksList.velocity({ opacity: 0 }, { duration: 500 , delay: 250, display: 'none' });
      $bookOpen.velocity({ opacity: 0 }, { duration: 500 , delay: 250, display: 'none' });
      $bookPrizeArea.velocity({ opacity: 1 }, { duration: 500 , delay: 250, display: 'block' });
    });
  }

  function bindShowPrizeBack() {
    var $bookPrizeArea = $('#livros2014-book-prize');
    var $bookOpen = $('#livros2014-book-openning');
    var $booksList = $('#livros2014-book-open');
    var $bookName = $('#livros2014-book-name');
    var $bookLogo = $('#livros2014-back-home');
    var $bookPrize = $('#livros2014-open-prize');
    $('#livros2014-book-prize-back').on('click', function () {
      $bookPrizeArea.velocity({ opacity: 0 }, { duration: 500 , display: 'none' });
      $bookOpen.velocity({ opacity: 1 }, { duration: 500 , display: 'block' });
      $booksList.velocity({ opacity: 1 }, { duration: 500, display: 'block' });
      $bookName.velocity({ left: 90 }, { duration: 500 , display: 'block' });
      $bookLogo.velocity({ opacity: 1 }, { duration: 500 , display: 'block' });
      $bookPrize.velocity({ top: 20 }, { duration: 500 , display: 'block' });
    });
  }

  return {
    init:init
  };

}());

livros2014.init();