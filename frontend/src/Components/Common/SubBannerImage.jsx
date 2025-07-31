import banner1 from '../../assets/banner-1.png'
import banner2 from '../../assets/banner-2.png'
import banner3 from '../../assets/banner-3.png'

const bannarData = [
    {
        name: "Everyday Fresh & Clean with Our Products",
        image: banner1,
    },
    {
        name: "Make your Breakfast Healthy and Easy",
        image: banner2,
    },
    {
        name: "The best Organic Products Online",
        image: banner3,
    }
]
function SubBannerImage() {
    return (
        <div className="container mx-auto py-10">
            <div className="grid grid-cols-3 space-x-4">
                {
                    bannarData.map((ele) => {

                        return(
                            <div class="bg-[#f5f5f5] p-6 rounded-lg shadow hover:shadow-lg transition relative">

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-between w-62 pt-10">
                                <h2 className="text-3xl font-semibold  mb-2 text-black">
                                    {ele.name}
                                </h2>
                                <button className="bg-green-500 text-white py-2 px-4 rounded w-fit mt-5">
                                    Shop Now →
                                </button>
                            </div>
                            <img src={ele.image} alt="Onions" class="w-full h-auto rounded absolute top-0 left-0 bottom-0 object-cover " />
                            {/* <button class="bg-green-500 text-white py-2 px-4 rounded">Shop Now →</button> */}
                        </div>
                        )
                    })
                }

            </div>
        </div>

    )
}

export default SubBannerImage