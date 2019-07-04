// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency >= 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    if (currency <= 0) return {};
    var Change = {};
    function CoinsNum(name, value) {
        var Counter = Math.floor(currency / value);
        if (Counter > 0) {
            Change[name] = Counter;
            currency = (currency % value);
        }
    }
    CoinsNum("H", 50);
    CoinsNum("Q", 25);
    CoinsNum("D", 10);
    CoinsNum("N", 5);
    CoinsNum("P", 1);
    return Change;
};
