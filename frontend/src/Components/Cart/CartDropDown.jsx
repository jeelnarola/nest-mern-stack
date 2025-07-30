import { IoMdClose } from "react-icons/io";
const cartItems = [
    {
        id: 1,
        name: "Daisy Casual Bag",
        price: 800,
        quantity: 1,
        image: "data:image/jpeg;base64,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",
    },
    {
        id: 2,
        name: "Corduroy Shirts",
        price: 3200,
        quantity: 1,
        image: "https://img.freepik.com/premium-psd/glass-water-bottal-mockup_495865-384.jpg",
    },
];
function CartDropDown() {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
        <>
            <div className="">
                <div className="space-y-4 max-h-72 overflow-auto">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-start gap-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-sm font-medium text-[#253D4E]">{item.name}</h4>
                                    <button className="text-gray-400 hover:text-red-500 text-sm"><IoMdClose/></button>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {item.quantity} × <span className="text-[#3BB77E] font-semibold">${item.price.toFixed(2)}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <hr className="my-4" />

                <div className="flex justify-between font-semibold text-[#253D4E]">
                    <span>Total</span>
                    <span className="text-[#3BB77E]">${total.toFixed(2)}</span>
                </div>

                <div className="mt-4 flex gap-2">
                    <button className="flex-1 border border-[#3BB77E] text-[#3BB77E] font-semibold py-2 rounded-md hover:bg-[#3BB77E]/10 transition">
                        View cart
                    </button>
                    <button className="flex-1 bg-[#3BB77E] text-white font-semibold py-2 rounded-md hover:bg-[#34a66f] transition">
                        Checkout
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartDropDown