let cheerio = require('cheerio');
var JsCrawler = require("js-crawler");
const htmlparser2 = require('htmlparser2');

var jsCrawler = new JsCrawler().configure({ ignoreRelative: false, depth: 2 });

function Review(index, date) {
    this.index = index
    this.date = date;
    this.title = '';
    this.description = '';
    this.role = '';
    this.pros = '';
    this.cons = '';
    this.advice = '';
    this.classifications = []
}

function Utils(_url) {
    let base = this;
    this.url = _url;
    this.urls = [];
    this.rawData = []
    this.finalResult = []

    this.urlCount = function () {
        return base.urls.length
    }
}

Utils.prototype.getUrls = function (_url,callback, callback2) {
    console.log('@@',_url)
    let urls = []
    let base = this;
    jsCrawler.crawl({
        url: this.url,
        success: function (page) {
            if (page.url.match(_url)) {
                urls.push({ url: page.url, content: page.content })
                base.urls = urls;
                callback(urls);
            }
        },
        failure: function (page) {
            // console.log(page.status);
            callback2(page.status, null)
        },
        finished: function (crawledUrls) {
            console.log('DOne....')
            base.urls = urls;
            callback2(null, base.urls)
        }
    });
}

Utils.prototype.parseContent = function () {
    let base = this;
    return base.urls[0].content;
}

Utils.prototype.fetchElement = function (reviews, _count, callback, callbackTwo) {
    let count = _count;
    if (reviews) {
        for (let i = 0; i < reviews.length; i++) {
            if (reviews[i] && reviews[i].children) {
                count += 1;
                this.fetchElement(reviews[i].children, count, callback, callbackTwo)
            } else {
                let rating;
                if (reviews[i].parent.next && reviews[i].parent.next.attribs) {
                    rating = reviews[i].parent.next.attribs.title || null
                }
                let data = { count: count, data: reviews[i].data, class: reviews[i].parent.attribs.class, rating: rating }
                this.rawData.push(data)
                callback(data)
            }
            if (i == (reviews.length - 1)) {
                callbackTwo('Done')
            }
        }
    }
}

Utils.prototype.processRawData = function (callback) {
    let _review;
    let base = this;
    let results = base.rawData;
    let index = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i].class == 'date subtle small') {
            index += 1
            _review = new Review(index, results[i].data)
        } else if (results[i].class == 'minor') {
            _review.classifications.push({ class: results[i].data, rating: results[i].rating })

        } else if (results[i].class == 'authorJobTitle middle reviewer') {
            _review.role = results[i].data.trim()

        } else if (results[i].class == 'mainText mb-0') {
            _review.description = results[i].data.trim()

        } else if (results[i].data == 'Pros' && results[i + 1]) {
            _review.pros = results[i + 1].data.trim()

        } else if (results[i].data == 'Cons' && results[i + 1]) {
            _review.cons = results[i + 1].data.trim()

        } else if (results[i].data == 'Advice to Management' && results[i + 1]) {
            _review.advice = results[i + 1].data.trim()
            base.finalResult.push(_review)
        }
        if (i == (results.length - 1)) {
            callback(base.finalResult)
        }
    }
}

Utils.prototype.process = function (_url,callback) {
    let base = this;
    this.getUrls(_url,urls => {
        let data = base.parseContent();
        let options = {
            withDomLvl1: true,
            normalizeWhitespace: false,
            xmlMode: true,
            decodeEntities: true
        }
        const dom = htmlparser2.parseDOM(data.toString(), options);
        let $ = cheerio.load(dom)
        let reviews = $('#ReviewsRef #ReviewsFeed .empReviews').attr('li', 'empReview cf').toArray();
        base.fetchElement(reviews, 0, record => { }, complete => {
            //console.log('Fetching completed from the page.')
        })
        base.processRawData(done => {
            console.log('Data processed')
            callback(done)
        });
    }, (error, success) => {
        if (error) {
            //console.log('Error Code', error)
        }
        else {
            console.log('Processing completed', success)
            callback(base.finalResult)
        }
    });

}
        
module.exports = Utils;


// // let util = new Utils('https://www.glassdoor.co.in/Reviews/Travelex-Reviews-E23898_P3.htm')

// // util.process(result => {
// //     return result
// // });
// util.getUrls(urls => {
//     let base = this;
//     let data = util.parseContent();
//     let options = {
//         withDomLvl1: true,
//         normalizeWhitespace: false,
//         xmlMode: true,
//         decodeEntities: true
//     }
//     const dom = htmlparser2.parseDOM(data.toString(), options);
//     let $ = cheerio.load(dom)
//     let reviews = $('#ReviewsRef #ReviewsFeed .empReviews').attr('li', 'empReview cf').toArray();
//     util.fetchElement(reviews, 0, record => { }, complete => {
//     })
//     util.processRawData(done => {
//         console.log('Data processed')
//     });
// }, (error, success) => {
//     if (error)
//         console.log('Error Code', error)
//     else
//         return util.finalResult
// });

// console.log(util.finalResult)







// const htmlparser2 = require('htmlparser2');
// const htmlToJson = require('html-to-json')
// let data = fs.readFileSync(`${__dirname}/sample.html`)

// // console.log(data.toString('utf-8'))
// let options = {
//     withDomLvl1: true,
//     normalizeWhitespace: false,
//     xmlMode: true,
//     decodeEntities: true
// }
// const dom = htmlparser2.parseDOM(data.toString(), options);

// let $ = cheerio.load(dom)
// // console.log($(''))

// // console.log($('div #ReviewsRef #empReview cf').html())
// //let reviews = $('#ReviewsRef').attr('id', 'empReview cf').html()
// let reviews = $('#ReviewsRef #ReviewsFeed .empReviews').attr('li', 'empReview cf').toArray();
// //let reviews = $('#ReviewsRef #ReviewsFeed li div > time').html();

// //console.log(reviews)
// // reviews.forEach(element => {
// //     //console.log('@@', element)
// //     element.children.forEach(item => {
// //         console.log('@@@@', item.children)
// //     })
// //})

// let review = {
//     date: '',
//     title: '',
//     description: '',
//     jobTitle: '',
//     pros: '',
//     cons: '',
//     advice: ''
// }

// function fetchElement(reviews) {
//     let results = [];
//     if (reviews) {
//         for (let i = 0; i < reviews.length; i++) {
//             if (reviews[i] && reviews[i].children) {
//                 fetchElement(reviews[i].children)
//             } else {
//                 if (reviews[i].parent.attribs && reviews[i].parent.attribs.class && reviews[i].parent.attribs.class == 'date subtle small') {
//                     review.date = reviews[i].data
//                 }
//                 results.push({ data: reviews[i].data, parent: reviews[i].parent, class: reviews[i].parent.attribs.class })
//             }
//         }
//     }
// }
// // reviews.forEach(element => {
// //     if (element && element.children) {
// //         fetchElement(element.children)
// //     } else {
// //         console.log('@@', element.data, element.parent.attribs)
// //         if (element.parent.attribs && element.parent.attribs.class && element.parent.attribs.class == 'date subtle small') {
// //             review.date = element.data
// //         }
// //         results.push({ data: element.data, parent: element.parent, class: element.parent.attribs.class })
// //     }
// // })


// let data1 = fetchElement(reviews)
// console.log(data1)


//let reviews = $('#ReviewsRef #ReviewsFeed .empReviews').attr('li', 'empReview cf').toArray()
//console.log(reviews)
// reviews.forEach(element => {
//     element.children.forEach(item => {
//         console.log(item)
//     })}
// })


// fetchElement(reviews)
// [{
    //     date:'',
//     ttle:'',
//     des:'',
//     pros:'',
//     cons:'',
//     advice:''
// }]

                        // var promise = htmlToJson.parse(data.toString(), {
                        //     'text': function ($doc) {
                        //         return $doc.find('div').html();
                        //     }
                        // }, function (err, result) {
                        //     console.log(result);
                        // });

                        // promise.done(function (result) {
                        //     //Works as well
                        //});