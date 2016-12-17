
var Car = function(brand, model, price){

    var priceChanging = [], priceChanged = [];

    this.brand = function(val){
        return brand;
    };

    this.model = function(val){
        return model;
    };

    this.price = function (val) {
        if (val !== undefined && val !== price){
            for (i=0; i<priceChanging.length; i++)
                priceChanging[i](this,val);
            price = val;
            for (i=0; i<priceChanged.length; i++)
                priceChanged[i](this,val);
        }
        return price;
    };

    this.onPriceChanging = function (callback) {
        priceChanging.push(callback);
    };

    this.onPriceChanged = function (callback) {
        priceChanged.push(callback);
    }

};

var car = new car("BMW","M3",2006);

car.onPriceChangig(function (elem,newPrice) {
    console.log("price of "+elem.brand()+" changing from "+elem.price()+" to "+newPrice);
});

car.onPriceChanged(function (elem,newPrice) {
    console.log(elem.brand()+" "+elem.model()+" new price: "+elem.price());
});




console.log("brand "+bmw.brand()+" model "+bmw.model()+" price "+bmw.price());

