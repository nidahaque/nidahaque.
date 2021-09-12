
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Nida Haque",
    "body": "   Associate Consultant | KPMG Global Services (KGS)  Since Jan 2021 to present     Deal Advisory &amp; Strategy Team- Primary focus on Global Infrastructure.       Associate | PWC  June 2019 to Jan 2021     Working in GRID - Capital Projects &amp; Infrastructure   Overview   Strategy Formulation - Preparing market entry roadmaps for various government &amp; private stakeholders, top line approach, detailed regulatory &amp; risk assessments, potential revenue assumptions.    Supply/Value Chain Assessments.    Governance &amp; Policy Assessments.    Business Development &amp; Proposal Formulation.    Stakeholders Management.    Sectors assigned   Urban Mobility - UT issue identification and strategic solutioning, suggestions for LVC &amp; identification of non-fare revenue sources, revenue calculations ,TOD planning, public transport reforms.    Tourism focussed strategy plans - Aproaches for sustainable tourism, analyzing market trends, regulatory framework, revenue forecasting, suggestions on viability, project packagings, local culture upliftment.    Real estate &amp; Land monetization strategies.    Public private partnership - project structuring, feasibility assessments.    Thought Leadership - Impact of COVID-19 on Indian tourism.       How to reach me  LinkedIn  Email: nidahaque1@gmail. com "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                                                                     My very second blog article              :       Today is September 12th, 2021. :                                                                               Nida                12 Sep 2021                                                                                                                                     My very first blog article              :       Today is September 12th, 2021. :                                                                               Nida                12 Sep 2021                                            "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/my-very-second-blog-article/",
    "title": "My very second blog article",
    "body": "2021/09/12 - Today is September 12th, 2021. I am setting up my blog, hosted on Github. This is my second article. This is a headerI like to bold thing or italic thing. this is strike. link to some url This is H2 header: This is H3 header:  this is a list list item      table   table         data   data    this is block quote. 1this is some code. "
    }, {
    "id": 6,
    "url": "http://localhost:4000/my-very-first-blog-article/",
    "title": "My very first blog article",
    "body": "2021/09/12 - Today is September 12th, 2021. I am setting up my blog, hosted on Github. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});