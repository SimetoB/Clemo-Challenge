(function() {
    //Slider for the header
    var i = 0,
        images = ['', 'img1.png', 'img2.png'],
        header = document.getElementById('header'),
        headerBackground0 = document.getElementById('header-background0'),
        headerBackground1 = document.getElementById('header-background1'),
        headerBackground2 = document.getElementById('header-background2');

    headerBackground0.addEventListener('click', switchSlide, false);
    headerBackground1.addEventListener('click', switchSlide, false);
    headerBackground2.addEventListener('click', switchSlide, false);

    function autoSlide() {
        document.getElementById('header-background' + i + '').style.backgroundColor = 'inherit';
        i += 1;
        if (i == images.length) {
            i = 0
        }
        header.style.backgroundImage = 'url(' + images[i] + ')';
        document.getElementById('header-background' + i + '').style.backgroundColor = 'black';
    };

    var headerBackgrounds = setInterval(autoSlide, 5000);

    function switchSlide(currentTarget) {
        if (this.id === 'header-background0') {
            document.getElementById('header-background0').style.backgroundColor = 'black';
            document.getElementById('header-background1').style.backgroundColor = 'inherit';
            document.getElementById('header-background2').style.backgroundColor = 'inherit';
            header.style.backgroundImage = 'url("")';
            i = 2;
        } else if (this.id === 'header-background1') {
            document.getElementById('header-background0').style.backgroundColor = 'inherit';
            document.getElementById('header-background1').style.backgroundColor = 'black';
            document.getElementById('header-background2').style.backgroundColor = 'inherit';
            header.style.backgroundImage = 'url("img1.png")';
            i = 0;
        } else if (this.id === 'header-background2') {
            document.getElementById('header-background0').style.backgroundColor = 'inherit';
            document.getElementById('header-background1').style.backgroundColor = 'inherit';
            document.getElementById('header-background2').style.backgroundColor = 'black';
            header.style.backgroundImage = 'url("img2.png")';
            i = 1;
        }
    };

    //Change the set of best team container
    var j = 0,
        table = document.getElementById('best-team-table')
        chevronLeft = document.getElementById('prev-workers'),
        chevronRight = document.getElementById('next-workers'),
        tableArr = ['<td><ul><li class="circle"></li><li><h2>paul hall</h2></li><li><hr /></li><li><h3>art director</h3></li></ul></td><td><ul><li class="circle"></li><li><h2>joshua<br />spencer</h2></li><li><hr /></li><li><h3>founder</h3></li></ul></td><td><ul><li class="circle"></li><li><h2>diane lewis</h2></li><li><hr /></li><li><h3>artist. designer</h3></li></ul></td>','<td><ul><li class="circle"></li><li><h2>paul hall2</h2></li><li><hr /></li><li><h3>art director2</h3></li></ul></td><td><ul><li class="circle"></li><li><h2>joshua<br />spencer2</h2></li><li><hr /></li><li><h3>founder2</h3></li></ul></td><td><ul><li class="circle"></li><li><h2>diane lewis2</h2></li><li><hr /></li><li><h3>artist. designer2</h3></li></ul></td>','<td><ul><li class="circle"></li><li><h2>paul hall3</h2></li><li><hr /></li><li><h3>art director3</h3></li></ul></td><td><ul><li class="circle"></li><li><h2>joshua<br />spencer3</h2></li><li><hr /></li><li><h3>founder3</h3></li></ul></td><td><ul><li class="circle"></li><li><h2>diane lewis3</h2></li><li><hr /></li><li><h3>artist. designer3</h3></li></ul></td>']

    function renderTable() {
        table.innerHTML = tableArr[j];
    }

    renderTable();

    chevronLeft.addEventListener('click', showPrev, false);
    chevronRight.addEventListener('click', showNext, false);

    function showPrev() {
        if (j === 0) {
            j = 2;
            renderTable();
        } else {
            j -= 1;
            renderTable();
        }
    }

    function showNext() {
        if (j === 2) {
            j = 0;
            renderTable();
        } else {
            j += 1;
            renderTable();
        }
    }
}());