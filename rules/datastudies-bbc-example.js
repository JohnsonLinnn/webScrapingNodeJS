//let template = require('__data-template-example');

const template = {
    html: null,
    descriptionPresent: false,
    preselectedValues: true
};

module.exports = {
    name: 'test', //optional

    extractor: {
        extract: function() { // optional

            let data = []
            let allHeadlines = document.querySelectorAll("tr");
            
            for (headline of allHeadlines) {
                console.log(headline)
                let innerText = headline.innerText;
                data.push(innerText)
            }
            
           console.log(allHeadlines)
            return data;
        },

    }

};