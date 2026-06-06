let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert("🛒 " + name + " ба сабад илова шуд");
}

function openCart() {

    if (cart.length === 0) {
        alert("🛒 Сабад холӣ аст");
        return;
    }

    let text = "🛒 САБАД:\n\n";
    let total = 0;

    cart.forEach((i, index) => {
        text += (index + 1) + ". " + i.name + " - " + i.price + " TJS\n";
        total += i.price;
    });

    text += "\n💰 Ҷамъ: " + total + " TJS\n\n";
    text += "👉 Барои фармоиш додан OK ро пахш кунед";

    let confirmOrder = confirm(text);

    if (confirmOrder) {
        checkout();
    }
}
function checkout() {

    let name = prompt("👤 Номи худро нависед:");
    let phone = prompt("📞 Рақами телефон:");

    if (!name || !phone) {
        alert("❌ Маълумот пурра нест");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);

    alert(
        "✅ ФАРМОИШ ҚАБУЛ ШУД!\n\n" +
        "👤 Ном: " + name + "\n" +
        "📞 Телефон: " + phone + "\n" +
        "💰 Ҷамъ: " + total + " TJS\n\n" +
        "🚚 Мо ба шумо занг мезанем!"
    );

    // empty cart after order
    cart = [];
}