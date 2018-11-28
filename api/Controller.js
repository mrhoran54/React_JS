// contactController.js
// Import contact model

// first require the model file
ThisForThat = require('./Model');

// I pulled these array from the webiste itself on inspect element
// they are the exact phrases from the original website

var _this = ["Skynet","Digital Music Distribution","FitBit","DollarShaveClub","Realtime Data","ManPacks","Initial Coin Offering","Blockchain","Cryptocurrency","Conversion Funnel","Social Network","Airbnb","SnapChat","Bang With Friends","HTML5 App","Google Analytics","Mapreduce Query","Node.js Server","KickStarter","Match.com","Adultfriendfinder","Pinterest","Amber Alert System","Groupon","Appstore","Digital Magazine","Distributed Social Network","Quadcopter Drone","Daring Fireball","Content Distribution Network","Analytics Platform","OpenTable","LinkedIn","Brick and Mortar Solution","Aggregator","React-Native App","ProductHunt","Foursquare","YouTube","WeedMaps","Texts From Last Night","Ponzi Scheme","1-800-Flowers","Cash4Gold","Online Marketplace","Viral Marketer","Wearable Computer","Google Glass App","Facebook Marketplace","Playboy","Cloud Storage Provider","Pandora","Green Tech Program","Eco-Friendly Marketplace","Netflix","Amazon","Zappos","Reddit","Enron","Wordpress","iPhone App","Android App","Meme Generator","Crowdsourcing App","TBH App","HQ Trivia","Apartment Guide","Social CRM","Database Abstraction Layer","API","New Social Platform","Tumblr","Deal Finder","CPA Ad Network","Collaborative Filter","Shopping Site","Slack","Soylent","Optimizely","Recommendation Engine","Neural Network","Tesseract OCR engine","Unreadable CAPTCHA","Mobile Ecosystem","Flickr","Salesforce.com","Twitter Filter","Wikipedia","Yelp"];

var _that = ["Facebook Platform","Erlang Enthusiasts","Collegiate Jewish Women","The Snapchat Generation","Ex-Girlfriends","Laundromats","Celebrity Gossip","Endangered Species","Pandas","Middle Schoolers","Alpha Phi Girls","Funeral Homes","Chinese Take-out","Ex-Convicts","Fast Casual Restaurants","Marketers","Qualifying Leads","Funeral Homes","Farmers","Cougars","Pilots","Gynecologists","Cracked iPhone Apps","Stolen Goods","Adult Dancers","Hunters","High-End Pornography","Sysadmins","Bath Salts","Nootropics","California","Gay Marriages","Government Corruption","Whiskey Lovers","Parking Tickets","Highway Accidents","Traveling","Airlines","Presentation Tools","Your Boss","Ponzi Schemes","Your Finances","Restroom Attendants","Your Aquarium","Your Cat's Litter Box","Pets","Alcoholics","Camp Counselors","Models","The Army","Cheap Vodka","Tech Incubators","Star Trek Conventions","Small Businesses","Beer","Nightclub Lines","Semi-Active Volcanoes","Attractive People","Ugly People","Sanctimonial Artifacts","Traveling Abroad","Your Mom","Billionaires","Happy Hours","Ugg Boots","The Homeless","Blacking Out","Red Wine","Christian Families","Social Outcasts","Surgeons","Sorority Chicks","Pounding Jagger Bombs","Medicinal Marijuana","Textbooks","Coffee Shops","Baristas"];
  

// the get function actions
exports.index = function (req, res) {
    // first generate the random paring by randomly generating the indexes
    // I also pulled this formula from the website itself to mimick it's exact behavior
    var this_index = Math.floor(Math.random()*_this.length);
    var that_index = Math.floor(Math.random()*_that.length);

    // this is the basica get function, pulling and returning this that pairing on a get call

    ThisForThat.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }

        //adding the right header to allow CORs concept of preventing requests to be made from one domain to another
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.json({                       // finally return the data since those headers work now
            that: _this[that_index],
            this: _that[this_index]
            
        });
    });
};

// Handle create thisthat actions
// I won't really be using it for my app but I was just testing it out

exports.new = function (req, res) {

    var x = new ThisForThat();
    x.this = req.body.this;
    x.that = req.body.that;

    x.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            this : x.this, 
            that: x.that
        });
    });
};

