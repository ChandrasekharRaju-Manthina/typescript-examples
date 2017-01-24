class Quarter {
    private value = .25;

    get Value() {
        return this.value;
    }

    set Value(newValue: number) {
      this.value = newValue;
    }

    getImageUrl() {
        return "img/quarter.jpeg";
    }
}

var coin = new Quarter();
var value = coin.Value;
coin.Value = 25;
